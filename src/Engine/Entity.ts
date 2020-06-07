import Vector2 from "./Vector2.js"

export default abstract class Entity {

    position: Vector2

    constructor(){
        this.position = new Vector2(0, 0)
    }

    abstract update(delta: number) : void;
    
    abstract draw(ctx: CanvasRenderingContext2D) : void;
}