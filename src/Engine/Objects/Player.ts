import Entity from "../Base/Entity.js"
import Vector2 from "../Types/Vector2.js";
import Input from "../Base/Input.js"
import Triangle from "../Shapes/Triangle.js";
import Canvas from "../Base/Canvas.js";

export default class Player extends Entity {

    size: Vector2 = new Vector2(40, 60);
    thrust: number = 1
    direction: number = 0
    color: string = "white"
    shape: Triangle
    velocity: Vector2
    acceleration: Vector2
    max_speed: number = 200

    constructor() {
        super();
        this.position.set(100, 100);
        this.shape = new Triangle(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color)
        this.acceleration = new Vector2(0, 0)
        this.velocity = new Vector2(0, 0)
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.shape.show_normal = true;
        this.shape.draw(ctx);

        ctx.lineWidth = 2;
        ctx.strokeStyle = "green"
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + this.velocity.x * 100, this.position.y + this.velocity.y * 100);
        ctx.closePath();
        ctx.stroke();
    }

    update(dt: number) {
        if (this.position.y < 0)
            this.position.y = Canvas.height;
        if (this.position.y > Canvas.height)
            this.position.y = 0;
        if (this.position.x < 0)
            this.position.x = Canvas.width;
        if (this.position.x > Canvas.width)
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
        } else {
            this.acceleration.set(0, 0);
        }

        this.velocity.add(this.acceleration)
        if (this.velocity.magnitude() * 1000 / dt > this.max_speed) {
            this.velocity.normalize();
            this.velocity.multiplyScalar(this.max_speed * dt / 1000);
        }
        this.position.add(this.velocity);

        this.shape.position = this.position
        this.shape.rotation = this.rotation
    }
}