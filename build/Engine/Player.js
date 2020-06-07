import Entity from "./Entity.js";
import Vector2 from "./Vector2.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.speed = 0.6;
        this.size = new Vector2(50, 50);
        this.direction = new Vector2(0, 0);
    }
    draw(ctx) {
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    update(dt) {
        this.updateDirection();
        this.position.add(this.direction.multiplyScalar(this.speed * dt));
    }
    updateDirection() {
        this.direction.reset();
        if (window.Input.is_key_pressed("UP")) {
            this.direction.y -= 1;
        }
        if (window.Input.is_key_pressed("DOWN")) {
            this.direction.y += 1;
        }
        if (window.Input.is_key_pressed("RIGHT")) {
            this.direction.x += 1;
        }
        if (window.Input.is_key_pressed("LEFT")) {
            this.direction.x -= 1;
        }
        this.direction.normalize();
    }
}
