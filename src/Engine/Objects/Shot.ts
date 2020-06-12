import Entity from "../Types/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Circle from "../Shapes/Circle.js";
import Canvas from "../Base/Canvas.js";

export default class Shot extends Entity {
    
    id: string
    position: Vector2
    rotation: number
    shape: Circle
    velocity: Vector2 = new Vector2(0, 0)
    thrust: number = 100
    
    constructor(id: string, x: number, y: number, r: number){
        super();
        this.id = id;
        this.position = new Vector2(x, y);
        this.rotation = r;
        this.shape = new Circle;
    }

    update(dt: number): void {
        this.velocity.x = Math.cos(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.velocity.y = Math.sin(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.position.add(this.velocity);
        this.shape.position = this.position;

        if (this.position.y < 0)
            this.position.y = Canvas.height;
        if (this.position.y > Canvas.height)
            this.position.y = 0;
        if (this.position.x < 0)
            this.position.x = Canvas.width;
        if (this.position.x > Canvas.width)
            this.position.x = 0;
    }
    
    draw(ctx: CanvasRenderingContext2D): void {
        this.shape.draw(ctx);
    }  
}