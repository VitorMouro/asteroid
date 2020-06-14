import Entity from "../Types/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Shape from "../Shapes/Shape.js";
import Circle from "../Shapes/Circle.js";
import Canvas from "../Base/Canvas.js";
import Game from "../Base/Game.js";

export default class Asteroid extends Entity {

    id: string;
    position: Vector2;
    rotation: number;
    shape: Circle;
    color: string | null;
    velocity: Vector2 = new Vector2(0, 0)
    thrust: number = 200

    constructor(id: string, x: number, y: number, rotation: number, color: string){
        super();
        this.id = id
        this.position = new Vector2(x, y)
        this.rotation = rotation
        this.color = color
        this.shape = new Circle(this.position.x, this.position.y, Math.random()*70+30, this.rotation, "white")
    }

    update(dt: number): void {
        this.velocity.x = Math.cos(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.velocity.y = Math.sin(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.position.add(this.velocity);
        this.shape.position = this.position;

        if (this.position.y < 0 || this.position.y > Canvas.height || this.position.x < 0 || this.position.x > Canvas.width)
            // Game.activeScene.remove(this.id);
            return

    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.shape.draw(ctx);
    }
    
}