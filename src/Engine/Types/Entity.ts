import Vector2 from "./Vector2.js"

export default abstract class Entity {

    protected abstract id: string
    protected abstract position: Vector2
    protected abstract rotation: number

    constructor(){
    }

    abstract update(delta: number) : void;
    
    abstract draw(ctx: CanvasRenderingContext2D) : void;
}