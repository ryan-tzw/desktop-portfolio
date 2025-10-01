import { BaseEffect } from './BaseEffect'
import { Circle } from './shapes/Circle'
import type { Shape } from './shapes/Shape'
import { Square } from './shapes/Square'
import { Triangle } from './shapes/Triangle'

export class ShapesEffect extends BaseEffect {
    private shapes: Shape[] = []

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(canvas, ctx)
        this.generateShapes()
    }

    private generateShapes() {
        this.shapes = []

        const shapeSize = 50
        const numShapes = 9

        // space between shapes
        const spacing =
            (this.canvas.width - (numShapes - 1) * shapeSize) / numShapes

        for (let i = 0; i < numShapes; i++) {
            const x = i * (spacing + shapeSize) + 25
            const y = this.canvas.height / 2

            // Random shape type
            const shapeTypes = [Circle, Square, Triangle]
            const ShapeClass = shapeTypes[i % shapeTypes.length]

            this.shapes.push(new ShapeClass(x, y, shapeSize))
        }
    }

    private setStyle() {
        this.ctx.fillStyle = '#c3b3ff'
        this.ctx.strokeStyle = '#c3b3ff'
        this.ctx.lineWidth = 4
        this.ctx.lineJoin = 'round'
    }

    update(deltaTime: number): void {
        this.shapes.forEach((shape) => {
            shape.x -= deltaTime * 0.02
            if (shape.x < -shape.size / 2) {
                shape.x = this.canvas.width + shape.size / 2
            }
        })
    }

    render(): void {
        this.ctx.save()
        this.setStyle()

        this.shapes.forEach((shape) => shape.render(this.ctx))
        this.ctx.restore()
    }

    resize(width: number, height: number): void {
        this.generateShapes()
    }
}
