import Vector2 from "./Vector2.js"
import Shape from "../Shapes/Shape.js"

export default abstract class Entity {

    abstract id: string
    abstract position: Vector2
    abstract rotation: number
    abstract shape: Shape | null
    abstract color: string | null

    constructor(){
    }

    abstract update(delta: number) : void;
    
    abstract draw(ctx: CanvasRenderingContext2D) : void;
}