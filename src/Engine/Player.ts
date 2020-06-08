import Entity from "./Entity.js"
import Vector2 from "./Types/Vector2.js";
import Rect from "./Shapes/Rect.js";
import Input from "./Input.js"

export default class Player extends Entity {

    size: Vector2 = new Vector2(50, 50);
    speed: number = 0.2
    direction: number = 0
    color: string = "Red"

    constructor() {
        super();
    }

    draw(ctx: CanvasRenderingContext2D) {
        let rect = new Rect(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color);
        rect.draw(ctx);
    }

    update(dt: number) {
        this.updateDirection()
        this.position.x += this.direction * Math.cos(this.rotation) * this.speed * dt;  
        this.position.y += this.direction * Math.sin(this.rotation) * this.speed * dt;  
        console.log(this.rotation)
    }

    updateDirection(){
        this.direction = 0
        if(Input.is_key_pressed("UP")){
            this.direction -= 1;
        }
        if(Input.is_key_pressed("DOWN")){
            this.direction += 1;
        }
        if(Input.is_key_pressed("RIGHT")){
            this.rotation += 4;
        }
        if(Input.is_key_pressed("LEFT")){
            this.rotation -= 4;
        }
    }
}