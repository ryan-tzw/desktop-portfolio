import { useDraggable } from '@dnd-kit/core'
import { useEffect, useRef, useState } from 'react'

interface DraggableProps {
    children?: React.ReactNode
}

export function Draggable({ children }: DraggableProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const lastTransform = useRef<{ x: number; y: number } | null>(null)

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    })

    // Keep track of the last transform value
    useEffect(() => {
        if (transform) {
            lastTransform.current = { x: transform.x, y: transform.y }
        }
    }, [transform])

    // Calculate the style for the draggable element
    const style: React.CSSProperties = {
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
    }

    // Update position on mouse up
    const handleMouseUp = () => {
        if (lastTransform.current) {
            setPosition((prev) => ({
                x: prev.x + lastTransform.current!.x,
                y: prev.y + lastTransform.current!.y,
            }))
        }
    }

    return (
        <button
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            onMouseUp={handleMouseUp}
        >
            {children}
        </button>
    )
}
