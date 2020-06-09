import Entity from "./Entity.js";
import Vector2 from "./Types/Vector2.js";
import Input from "./Input.js";
import Triangle from "./Shapes/Triangle.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.size = new Vector2(40, 60);
        this.speed = 300;
        this.direction = 0;
        this.color = "white";
        this.position.x = 100;
        this.position.y = 100;
        this.shape = new Triangle(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color);
    }
    draw(ctx) {
        this.shape.draw(ctx);
    }
    update(dt) {
        this.updateDirection(dt);
        this.position.x += this.direction * Math.cos(this.rotation * Math.PI / 180) * this.speed * dt / 1000;
        this.position.y += this.direction * Math.sin(this.rotation * Math.PI / 180) * this.speed * dt / 1000;
        if (this.position.y < 0)
            this.position.y = window.Game.canvas.height;
        if (this.position.y > window.Game.canvas.height)
            this.position.y = 0;
        if (this.position.x < 0)
            this.position.x = window.Game.canvas.width;
        if (this.position.x > window.Game.canvas.width)
            this.position.x = 0;
        this.shape.position = this.position;
        this.shape.rotation = this.rotation;
    }
    updateDirection(dt) {
        this.direction = 0;
        if (Input.is_key_pressed("UP")) {
            this.direction += 1;
        }
        if (Input.is_key_pressed("DOWN")) {
            this.direction -= 1;
        }
        if (Input.is_key_pressed("RIGHT")) {
            this.rotation += 200 * dt / 1000;
        }
        if (Input.is_key_pressed("LEFT")) {
            this.rotation -= 200 * dt / 1000;
        }
    }
}
