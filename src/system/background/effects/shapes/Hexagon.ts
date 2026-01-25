import { Shape } from './Shape'

export class Hexagon extends Shape {
    private circumradius: number

    constructor(x: number, y: number, size: number) {
        super(x, y, size)
        this.circumradius = ((2 / Math.sqrt(3)) * this.size) / 2
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i
            const x = this.x + this.circumradius * Math.cos(angle)
            const y = this.y + this.circumradius * Math.sin(angle)
            if (i === 0) {
                ctx.moveTo(x, y)
            } else {
                ctx.lineTo(x, y)
            }
        }
        ctx.closePath()
        ctx.stroke()
    }
}
