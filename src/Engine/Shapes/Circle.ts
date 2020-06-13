import Shape from "./Shape.js";
import Vector2 from "../Types/Vector2.js";

export default class Circle extends Shape {

    position: Vector2;
    rotation: number;
    color: string;
    radius: number

    constructor(x: number, y: number, radius: number, rotation: number, color: string){
        super();
        this.position = new Vector2(x, y);
        this.rotation = rotation;
        this.color = color;
        this.radius = radius;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}