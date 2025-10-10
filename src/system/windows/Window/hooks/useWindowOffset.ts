import { useEffect, useState } from 'react'

interface UseWindowOffsetProps {
    initialPosition?: { x: number; y: number }
    size: { width: number; height: number }
    onPositionChange: (position: { x: number; y: number }) => void
}

/**
 * "Offset" simply means position from the center of the screen, as opposed to position from the top-left corner as is typical in standard CSS.
 * Offset updates when the window is dragged, and is used to recalculate the actual position on window resize.
 */
export function useWindowOffset({
    initialPosition,
    size,
    onPositionChange,
}: UseWindowOffsetProps) {
    // calc offset from center of the screen
    const [offset, setOffset] = useState(() => {
        if (initialPosition) {
            const offsetX =
                initialPosition.x - window.innerWidth / 2 + size.width / 2
            const offsetY =
                initialPosition.y - window.innerHeight / 2 + size.height / 2
            return { x: offsetX, y: offsetY }
        }
        return { x: 0, y: 0 }
    })

    useEffect(() => {
        function handleResize() {
            const newPosition = {
                x: window.innerWidth / 2 + offset.x - size.width / 2,
                y: window.innerHeight / 2 + offset.y - size.height / 2,
            }
            onPositionChange(newPosition)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [offset, size, onPositionChange])

    return {
        offset: offset,
        updateOffset: setOffset,
    }
}
