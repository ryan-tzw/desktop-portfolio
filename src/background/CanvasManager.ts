import type { BaseEffect } from './effects/BaseEffect'

/**
 * CanvasManager.ts
 * Handles canvas render loop, resizing and other canvas related tasks.
 */
export class CanvasManager {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D | null
    private animationFrameId: number | null = null
    private effect: BaseEffect
    private lastTimestamp: number = 0
    private targetFPS: number = 30
    private frameInterval: number = 1000 / this.targetFPS

    public constructor(canvas: HTMLCanvasElement, effect: BaseEffect) {
        // Initialize properties
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.effect = effect

        // Handle resize
        this.resizeCanvas()
        window.addEventListener('resize', this.resizeCanvas.bind(this))
    }

    private resizeCanvas() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        // Notify the effect about the resize
        this.effect.resize(this.canvas.width, this.canvas.height)
    }

    public setEffect(effect: BaseEffect) {
        this.effect = effect
    }

    /**
     * Start the render loop
     */
    public start() {
        console.log('CanvasManager started')

        const render = (timestamp: number) => {
            if (this.ctx) {
                const deltaTime = timestamp - this.lastTimestamp
                if (deltaTime >= this.frameInterval) {
                    this.lastTimestamp =
                        timestamp - (deltaTime % this.frameInterval)

                    // Clear the canvas
                    this.ctx.clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height
                    )

                    // Update and render the effect
                    this.effect.update(deltaTime)
                    this.effect.render()
                }
            }

            this.animationFrameId = requestAnimationFrame(render)
        }

        this.animationFrameId = requestAnimationFrame(render)
    }

    public stop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId)
            this.animationFrameId = null
        }
    }
}
