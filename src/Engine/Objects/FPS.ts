import Entity from "../Types/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Shape from "../Shapes/Shape.js"

export default class FPS extends Entity {
    
    id: string
    position: Vector2
    rotation: number
    fps: number = 0
    counter: number = 0
    shape: null = null

    constructor(){
        super();
        this.id = "FPS";
        this.position = new Vector2(5, 20);
        this.rotation = 0;
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.font = "20px Consolas";
        ctx.fillText("FPS: " + this.fps.toFixed(0), this.position.x, this.position.y);
    }

    update(dt: number) {
        if(this.counter > 1000){
            this.fps = 1000/dt;
            this.counter = 0;
        }
        this.counter += dt;
    }
}