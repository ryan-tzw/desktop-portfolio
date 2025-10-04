import { useDraggable } from '@dnd-kit/core'
import { useEffect, useRef, useState } from 'react'

interface UseDraggableWindowProps {
    id: string
    width?: number
    height?: number
    disabled?: boolean
}

export function useDraggableWindow({
    id,
    width = 400,
    height = 300,
    disabled = false,
}: UseDraggableWindowProps) {
    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    const [position, setPosition] = useState({ x, y })
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

    // When stop dragging, update the position
    useEffect(() => {
        if (!isDragging) {
            setPosition((prev) => ({
                x: prev.x + lastTransform.current!.x,
                y: prev.y + lastTransform.current!.y,
            }))
        }
    }, [isDragging])

    const style: React.CSSProperties = {
        position: 'absolute',
        width: width,
        height: height,
        left: position.x,
        top: position.y,
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,
    }

    return {
        style,
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
