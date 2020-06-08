import Vector2 from "../Types/Vector2.js";

export default abstract class Shape {

    position: Vector2
    rotation: number
    color: string

    constructor(){
        this.position = new Vector2(0, 0)
        this.rotation = 0
        this.color = "white"
    }

    abstract draw(ctx: CanvasRenderingContext2D) : void;
}