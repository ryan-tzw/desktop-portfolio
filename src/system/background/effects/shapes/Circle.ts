import { Shape } from './Shape'

export class Circle extends Shape {
    constructor(x: number, y: number, size: number) {
        super(x, y, size)
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2)
        ctx.stroke()
        ctx.closePath()
    }
}
