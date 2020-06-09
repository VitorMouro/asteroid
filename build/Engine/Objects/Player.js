import Entity from "../Base/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Input from "../Base/Input.js";
import Triangle from "../Shapes/Triangle.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.size = new Vector2(40, 60);
        this.thrust = 1;
        this.direction = 0;
        this.color = "white";
        this.max_speed = 200;
        this.position = new Vector2(50, 50);
        this.shape = new Triangle(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color);
        this.acceleration = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
    }
    draw(ctx) {
        this.shape.show_normal = true;
        this.shape.draw(ctx);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + this.velocity.x * 100, this.position.y + this.velocity.y * 100);
        ctx.closePath();
        ctx.stroke();
    }
    update(dt) {
        if (this.position.y < 0)
            this.position.y = window.canvas.height;
        if (this.position.y > window.canvas.height)
            this.position.y = 0;
        if (this.position.x < 0)
            this.position.x = window.canvas.width;
        if (this.position.x > window.canvas.width)
            this.position.x = 0;
        if (Input.is_key_pressed("RIGHT")) {
            this.rotation += 180 * dt / 1000;
        }
        if (Input.is_key_pressed("LEFT")) {
            this.rotation -= 180 * dt / 1000;
        }
        if (Input.is_key_pressed("UP")) {
            this.acceleration.x = Math.cos(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
            this.acceleration.y = Math.sin(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        }
        else {
            this.acceleration.reset();
        }
        this.velocity.add(this.acceleration);
        if (this.velocity.magnitude() * 1000 / dt > this.max_speed) {
            this.velocity.normalize();
            this.velocity.multiplyScalar(this.max_speed * dt / 1000);
        }
        this.position.add(this.velocity);
        this.shape.position = this.position;
        this.shape.rotation = this.rotation;
    }
}
