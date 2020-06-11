import Vector2 from "../Types/Vector2.js";

export default abstract class Shape {

    protected abstract position: Vector2
    protected abstract rotation: number
    protected abstract color: string

    abstract draw(ctx: CanvasRenderingContext2D) : void;
}