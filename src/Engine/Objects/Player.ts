import Entity from "../Types/Entity.js"
import Vector2 from "../Types/Vector2.js";
import Input from "../Base/Input.js"
import Triangle from "../Shapes/Triangle.js";
import Canvas from "../Base/Canvas.js";
import Background from "./Background.js";
import Game from "../Base/Game.js";

export default class Player extends Entity {

    id: string
    position: Vector2
    rotation: number
    size: Vector2 = new Vector2(40, 60);
    thrust: number = 2
    direction: number = 0
    color: string = "white"
    shape: Triangle
    velocity: Vector2
    acceleration: Vector2
    max_speed: number = 400
    draw_velocity: boolean = false

    constructor() {
        super();
        this.id = "Player"
        this.rotation = 0
        this.position = new Vector2(200, 200);
        this.shape = new Triangle(this.position.x, this.position.y, this.size.x, this.size.y, this.rotation, this.color)
        this.acceleration = new Vector2(0, 0)
        this.velocity = new Vector2(0, 0)
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.shape.draw(ctx);
        if(this.draw_velocity){
            ctx.lineWidth = 2;
            ctx.strokeStyle = "green"
            ctx.beginPath();
            ctx.moveTo(this.position.x, this.position.y);
            ctx.lineTo(this.position.x + this.velocity.x * 100, this.position.y + this.velocity.y * 100);
            ctx.closePath();
            ctx.stroke();
        }
    }

    update(dt: number) {
        if (this.position.y < 0){
            this.position.y = Canvas.height;
            const back = Game.entities[0] as Background;
            back.generateStars()
        }
        if (this.position.y > Canvas.height){
            this.position.y = 0;
            const back = Game.entities[0] as Background;
            back.generateStars()
        }
        if (this.position.x < 0){
            this.position.x = Canvas.width;
            const back = Game.entities[0] as Background;
            back.generateStars()
        }
        if (this.position.x > Canvas.width){
            this.position.x = 0;
            const back = Game.entities[0] as Background;
            back.generateStars()
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