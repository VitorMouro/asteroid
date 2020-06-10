import Entity from "../Base/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Input from "../Base/Input.js";
import Triangle from "../Shapes/Triangle.js";
import Canvas from "../Base/Canvas.js";
import Game from "../Base/Game.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.size = new Vector2(40, 60);
        this.thrust = 2;
        this.direction = 0;
        this.color = "white";
        this.max_speed = 400;
        this.draw_velocity = false;
        this.id = "Player";
        this.rotation = 0;
        this.position = new Vector2(200, 200);
        this.shape = new Triangle(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color);
        this.acceleration = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
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
            const back = Game.entities[0];
            back.generateStars();
        }
        if (this.position.y > Canvas.height) {
            this.position.y = 0;
            const back = Game.entities[0];
            back.generateStars();
        }
        if (this.position.x < 0) {
            this.position.x = Canvas.width;
            const back = Game.entities[0];
            back.generateStars();
        }
        if (this.position.x > Canvas.width) {
            this.position.x = 0;
            const back = Game.entities[0];
            back.generateStars();
        }
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
