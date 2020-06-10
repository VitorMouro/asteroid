import Entity from "../Base/Entity.js";
import Canvas from "../Base/Canvas.js"
import Vector2 from "../Types/Vector2.js";

export default class Star extends Entity {

    id: string
    position: Vector2
    rotation: number
    radius: number
    opacity: number
    color: string
    static max_radius: number = 3

    constructor(){
        super();
        this.id = "";
        this.position = new Vector2(Math.floor(Math.random() * Canvas.width) + 1, Math.floor(Math.random() * Canvas.height) + 1);
        this.rotation = 0;
        this.radius = Math.floor(Math.random() * Star.max_radius) + 1
        this.opacity = this.radius/4
        this.color = "rgba(255, 255, 255, " + this.opacity + ")"
    }

    update(){
        return;
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = this.color;
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath()
        ctx.fill();
    }

}