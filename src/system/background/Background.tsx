import { useEffect, useRef } from 'react'
import { CanvasManager } from './CanvasManager'
import { ShapesEffect } from './effects/ShapesEffect'

export function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const effect = new ShapesEffect(canvas, ctx)
        const canvasManager = new CanvasManager(canvas, effect)
        canvasManager.start()

        return () => {
            canvasManager.stop()
        }
    }, [])

    return (
        <>
            <canvas
                ref={canvasRef}
                id="background"
                className="fixed top-0 left-0 -z-1 h-full w-full"
            >
                Animated background
            </canvas>
        </>
    )
}
