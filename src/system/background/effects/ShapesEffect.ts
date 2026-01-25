import { BaseEffect } from './BaseEffect'
import { Circle, Square, Triangle, Hexagon } from './shapes'
import type { Shape } from './shapes'

export class ShapesEffect extends BaseEffect {
    private shapes: Shape[] = []
    private gridSize = { width: 0, height: 0 }
    private panSpeed = 0.003
    private shapeSize = 15
    private shapeSpacing = 15

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(canvas, ctx)
        this.init()
    }

    private init() {
        this.shapes = []

        const size = this.shapeSize
        const spacing = this.shapeSpacing
        const numCols = Math.ceil(this.canvas.width / (size + spacing)) + 1
        const numRows = Math.ceil(this.canvas.height / (size + spacing)) + 1

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                let x: number
                if (row % 2 === 0) {
                    x = col * (size + spacing)
                } else {
                    x = col * (size + spacing) + (size + spacing) / 2
                }
                const y = row * (size + spacing) + size / 2
                const shapeTypes = [Circle, Square, Triangle, Hexagon]
                const ShapeClass = shapeTypes[(row + col) % shapeTypes.length]
                this.shapes.push(new ShapeClass(x, y, size))
            }
        }

        // calculate the total size (should be larger than canvas size)
        const totalWidth = numCols * (size + spacing)
        const totalHeight = numRows * (size + spacing)
        this.gridSize = { width: totalWidth, height: totalHeight }
    }

    private setStyle() {
        this.ctx.strokeStyle = '#ECE6FF'
        this.ctx.lineWidth = 2
        this.ctx.lineJoin = 'round'
    }

    update(deltaTime: number): void {
        this.shapes.forEach((shape) => {
            shape.x -= deltaTime * this.panSpeed
            if (shape.x < -shape.size / 2) {
                shape.x = this.gridSize.width - shape.size / 2
            }
            shape.y -= deltaTime * this.panSpeed
            if (shape.y < -shape.size / 2) {
                shape.y = this.gridSize.height - shape.size / 2
            }
        })
    }

    render(): void {
        this.ctx.save()
        this.setStyle()

        this.shapes.forEach((shape) => shape.render(this.ctx))
        this.ctx.restore()
    }

    resize(): void {
        this.init()
    }
}
