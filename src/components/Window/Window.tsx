import { useDraggable } from '@dnd-kit/core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'

interface WindowProps {
    title: string
    width?: number
    height?: number
    children?: React.ReactNode
}

export function Window({
    title,
    width = 320,
    height = 200,
    children,
}: WindowProps) {
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
        id: 'draggable',
    })

    // Keep track of the last transform value
    useEffect(() => {
        if (transform) {
            lastTransform.current = { x: transform.x, y: transform.y }
            console.log(lastTransform.current)
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

    // Calculate the style for the draggable element
    const style: React.CSSProperties = {
        position: 'absolute',
        width: width,
        height: height,
        left: position.x,
        top: position.y,
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="overflow-hidden rounded-xl shadow-md backdrop-blur-xs"
        >
            {/* Title Bar */}
            <div
                ref={setActivatorNodeRef}
                {...listeners}
                {...attributes}
                className="flex h-12 cursor-default text-white"
            >
                <h1 className="font-fredoka h-full flex-1 content-center bg-[rgba(0,0,0,0.7)] px-4">
                    {title}
                </h1>

                <button className="bg-[rgba(0,0,0,0.7)] px-4 hover:bg-[rgba(128,0,0,0.7)]">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

            {/* Contents */}
            <div>{children}</div>
        </div>
    )
}
