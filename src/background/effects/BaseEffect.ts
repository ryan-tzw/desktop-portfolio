export abstract class BaseEffect {
    protected canvas: HTMLCanvasElement
    protected ctx: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.ctx = ctx
    }

    abstract update(deltaTime: number): void
    abstract render(): void

    // Default empty implementation - can be overridden by subclasses if needed
    resize(width: number, height: number): void {
        void width
        void height
    }
}
