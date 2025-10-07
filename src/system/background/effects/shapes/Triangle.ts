import { Shape } from './Shape'

export class Triangle extends Shape {
    constructor(x: number, y: number, size: number) {
        super(x, y, size)
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath()

        const halfSide = this.size / Math.sqrt(3)
        ctx.moveTo(this.x, this.y - this.size / 2)
        ctx.lineTo(this.x - halfSide, this.y + this.size / 2)
        ctx.lineTo(this.x + halfSide, this.y + this.size / 2)
        ctx.closePath()
        ctx.stroke()
    }
}
