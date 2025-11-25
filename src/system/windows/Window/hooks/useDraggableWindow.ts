import { useDraggable } from '@dnd-kit/core'
import { useEffect, useMemo, useRef, useState } from 'react'
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
    config?: DesktopWindowConfig
}

export function useDraggableWindow({
    id,
    disabled = false,
    config = {},
}: UseDraggableWindowProps) {
    const { size, initPosition, origin } = getDesktopPropsOrDefaults(config)

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

    const clampedTransform = useMemo(() => {
        return transform
            ? {
                  x: Math.min(
                      Math.max(transform.x, -position.x - size.width * 0.75), // left edge of screen
                      window.innerWidth - position.x - size.width * 0.25 // right edge of screen
                  ),
                  y: Math.min(
                      Math.max(transform.y, -position.y), // top edge of screen
                      window.innerHeight - position.y - 48 // bottom edge of screen
                  ),
              }
            : null
    }, [transform, position, size])

    console.log('transform:', transform)
    console.log('clampedTransform:', clampedTransform)

    useEffect(() => {
        if (clampedTransform) {
            lastTransform.current = {
                x: clampedTransform.x,
                y: clampedTransform.y,
            }
        }
    }, [clampedTransform])

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
        transform: clampedTransform
            ? `translate(${clampedTransform.x}px, ${clampedTransform.y}px)`
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
