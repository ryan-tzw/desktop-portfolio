import { useDraggable } from '@dnd-kit/core'
import { useEffect, useRef, useState } from 'react'
import { useWindowOffset } from './useWindowOffset'

interface UseDraggableWindowProps {
    id: string
    size: { width: number; height: number }
    initPosition?: { x: number; y: number }
    disabled?: boolean
}

export function useDraggableWindow({
    id,
    size = { width: 400, height: 300 },
    initPosition: initialPosition,
    disabled = false,
}: UseDraggableWindowProps) {
    const [position, setPosition] = useState(() => {
        if (initialPosition) return initialPosition

        // if not given, start in the center of the screen
        return {
            x: window.innerWidth / 2 - size.width / 2,
            y: window.innerHeight / 2 - size.height / 2,
        }
    })
    const lastTransform = useRef({ x: 0, y: 0 })

    // track offset from center of the screen
    const { updateOffset } = useWindowOffset({
        initialPosition,
        size,
        onPositionChange: setPosition,
    })

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
        // When stop dragging, update the position
        if (!isDragging) {
            setPosition((prev) => ({
                x: prev.x + lastTransform.current!.x,
                y: prev.y + lastTransform.current!.y,
            }))

            // also calc the new offset
            updateOffset((prev) => ({
                x: prev.x + lastTransform.current!.x,
                y: prev.y + lastTransform.current!.y,
            }))
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
