import Entity from "./Entity.js";
import Vector2 from "./Types/Vector2.js";
import Rect from "./Shapes/Rect.js";
import Input from "./Input.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.size = new Vector2(50, 50);
        this.speed = 0.2;
        this.direction = 0;
        this.color = "Red";
    }
    draw(ctx) {
        let rect = new Rect(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color);
        rect.draw(ctx);
    }
    update(dt) {
        this.updateDirection();
        this.position.x += this.direction * Math.cos(this.rotation) * this.speed * dt;
        this.position.y += this.direction * Math.sin(this.rotation) * this.speed * dt;
        console.log(this.rotation);
    }
    updateDirection() {
        this.direction = 0;
        if (Input.is_key_pressed("UP")) {
            this.direction -= 1;
        }
        if (Input.is_key_pressed("DOWN")) {
            this.direction += 1;
        }
        if (Input.is_key_pressed("RIGHT")) {
            this.rotation += 4;
        }
        if (Input.is_key_pressed("LEFT")) {
            this.rotation -= 4;
        }
    }
}
