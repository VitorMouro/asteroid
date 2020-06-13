import Vector2 from "./Vector2.js"
import Shape from "../Shapes/Shape.js"

export default abstract class Entity {

    protected abstract id: string
    protected abstract position: Vector2
    protected abstract rotation: number
    protected abstract shape: Shape | null
    protected abstract color: string | null

    constructor(){
    }

    abstract update(delta: number) : void;
    
    abstract draw(ctx: CanvasRenderingContext2D) : void;
}