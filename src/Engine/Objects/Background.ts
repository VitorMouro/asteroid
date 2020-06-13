import Entity from "../Types/Entity.js"
import Star from "./Star.js";
import Canvas from "../Base/Canvas.js";
import Vector2 from "../Types/Vector2.js";
import Rect from "../Shapes/Rect.js";

export default class Background extends Entity {

    id: string
    position: Vector2
    rotation: number
    max_stars: number = 100
    stars: Array<Star> = []
    color: string = "black"
    shape: Rect

    constructor(){
        super();
        this.id = "background";
        this.position = new Vector2(0, 0)
        this.rotation = 0
        this.shape = new Rect(this.position.x+Canvas.width/2, this.position.y+Canvas.height/2, Canvas.width, Canvas.height, 0, this.color);
        this.generateStars();
    }

    draw(ctx: CanvasRenderingContext2D){
        this.shape.draw(ctx);
        this.stars.forEach((start) => {
            start.draw(ctx);
        });
    }

    update(dt: number){
        return;
    }

    generateStars(){
        this.stars = [];
        for(let i = 0; i < this.max_stars; i++){
            this.stars.push(new Star);
        }
    }

}