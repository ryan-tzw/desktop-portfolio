export abstract class Shape {
    public x: number
    public y: number
    public size: number

    constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.size = size
    }

    abstract render(ctx: CanvasRenderingContext2D): void
}
