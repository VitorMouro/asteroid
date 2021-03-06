import Entity from "../Types/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Input from "../Base/Input.js";
import Triangle from "../Shapes/Triangle.js";
import Canvas from "../Base/Canvas.js";
import Game from "../Base/Game.js";
import Shot from "./Shot.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.size = new Vector2(40, 60);
        this.thrust = 2;
        this.direction = 0;
        this.color = "white";
        this.max_speed = 400;
        this.draw_velocity = true;
        this.shoot_delay = 0.2;
        this.id = "Player";
        this.rotation = -90;
        this.position = new Vector2(Canvas.width / 2, Canvas.height / 2);
        this.shape = new Triangle(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color);
        this.acceleration = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
    }
    shoot() {
        Game.activeScene.add(new Shot((Math.random() * 999).toString(), this.position.x, this.position.y, this.rotation));
    }
    draw(ctx) {
        this.shape.draw(ctx);
        if (this.draw_velocity) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "green";
            ctx.beginPath();
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(this.position.x + this.velocity.x * 100, this.position.y + this.velocity.y * 100);
            ctx.closePath();
            ctx.stroke();
        }
    }
    update(dt) {
        if (this.position.y < 0) {
            this.position.y = Canvas.height;
        }
        if (this.position.y > Canvas.height) {
            this.position.y = 0;
        }
        if (this.position.x < 0) {
            this.position.x = Canvas.width;
        }
        if (this.position.x > Canvas.width) {
            this.position.x = 0;
        }
        if (Input.is_key_pressed(" ") && this.shoot_delay < 0) {
            this.shoot();
            this.shoot_delay = 0.2;
        }
        else {
            this.shoot_delay -= dt / 1000;
        }
        if (Input.is_key_pressed("ArrowLeft")) {
            this.rotation -= 180 * dt / 1000;
        }
        if (Input.is_key_pressed("ArrowRight")) {
            this.rotation += 180 * dt / 1000;
        }
        if (Input.is_key_pressed("ArrowUp")) {
            this.acceleration.x = Math.cos(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
            this.acceleration.y = Math.sin(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        }
        else {
            this.acceleration.set(0, 0);
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
//# sourceMappingURL=Player.js.map