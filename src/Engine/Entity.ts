import Vector2 from "./Types/Vector2.js"

export default abstract class Entity {

    position: Vector2
    rotation: number

    constructor(){
        this.position = new Vector2(0, 0)
        this.rotation = 0
    }

    abstract update(delta: number) : void;
    
    abstract draw(ctx: CanvasRenderingContext2D) : void;
}