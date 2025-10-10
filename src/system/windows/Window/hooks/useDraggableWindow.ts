import { useDraggable } from '@dnd-kit/core'
import { useEffect, useRef, useState } from 'react'
import { useWindowOffset } from './useWindowOffset'
import type { DesktopWindowConfig } from '../types'

function getDesktopPropsOrDefaults(desktop: DesktopWindowConfig) {
    const size = desktop.size || { width: 400, height: 300 }
    const initPosition = desktop.initPosition || {
        x: window.innerWidth / 2 - size.width / 2,
        y: window.innerHeight / 2 - size.height / 2,
    }
    const origin = desktop.origin || {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }
    return { size, initPosition, origin }
}

interface UseDraggableWindowProps {
    id: string
    disabled?: boolean
    desktop?: DesktopWindowConfig
}

export function useDraggableWindow({
    id,
    disabled = false,
    desktop = {},
}: UseDraggableWindowProps) {
    const { size, initPosition, origin } = getDesktopPropsOrDefaults(desktop)

    const [position, setPosition] = useState(initPosition) // top/left
    const transformOrigin = useRef({
        x: origin.x - initPosition.x,
        y: origin.y - initPosition.y,
    })

    // track offset from center of the screen
    const { updateOffset } = useWindowOffset({
        initialPosition: initPosition,
        size,
        onPositionChange: setPosition,
    })

    const lastTransform = useRef({ x: 0, y: 0 })

    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        isDragging,
    } = useDraggable({
        id: id,
        disabled: disabled,
    })

    useEffect(() => {
        if (transform) {
            lastTransform.current = { x: transform.x, y: transform.y }
        }
    }, [transform])

    useEffect(() => {
        if (!isDragging) {
            // When stop dragging, update the position
            setPosition((prev) => ({
                x: prev.x + lastTransform.current!.x,
                y: prev.y + lastTransform.current!.y,
            }))

            // also calc the new offset of the window from center of screen
            updateOffset((prev) => ({
                x: prev.x + lastTransform.current!.x,
                y: prev.y + lastTransform.current!.y,
            }))

            // and update the transform origin
            transformOrigin.current = {
                x: transformOrigin.current.x - lastTransform.current!.x,
                y: transformOrigin.current.y - lastTransform.current!.y,
            }
        }
    }, [isDragging, updateOffset])

    const style: React.CSSProperties = {
        position: 'absolute',
        width: size.width,
        height: size.height,
        left: position.x,
        top: position.y,
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,

        transformOrigin: `${transformOrigin.current.x}px ${transformOrigin.current.y}px`,
    }

    const mobileStyle: React.CSSProperties = {
        position: 'fixed',
        inset: 0,
    }

    return {
        style: disabled ? mobileStyle : style,
        dragProps: {
            ref: setNodeRef,
            ...attributes,
        },
        dragHandleProps: {
            ref: setActivatorNodeRef,
            ...listeners,
            ...attributes,
        },
    }
}
