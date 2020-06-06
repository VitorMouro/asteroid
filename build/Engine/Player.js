import Entity from "./Entity.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.speed = 0.6;
        this.size = { x: 50, y: 50 };
    }
    draw(ctx) {
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    update(dt) {
        if (window.Input.is_key_pressed("UP")) {
            this.position.y -= 1 * dt;
        }
        if (window.Input.is_key_pressed("DOWN")) {
            this.position.y += 1 * dt;
        }
        if (window.Input.is_key_pressed("RIGHT")) {
            this.position.x += 1 * dt;
        }
        if (window.Input.is_key_pressed("LEFT")) {
            this.position.x -= 1 * dt;
        }
    }
}
