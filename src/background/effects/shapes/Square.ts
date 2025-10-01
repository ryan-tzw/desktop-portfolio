import { Shape } from './Shape'

export class Square extends Shape {
    constructor(x: number, y: number, size: number) {
        super(x, y, size)
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath()
        ctx.rect(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size,
            this.size
        )
        ctx.stroke()
        ctx.closePath()
    }
}
