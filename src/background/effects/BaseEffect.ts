export abstract class BaseEffect {
    protected canvas: HTMLCanvasElement
    protected ctx: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.ctx = ctx
    }

    abstract update(deltaTime: number): void
    abstract render(): void
    abstract resize(width?: number, height?: number): void
}
