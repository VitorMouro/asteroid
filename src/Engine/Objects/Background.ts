import Entity from "../Base/Entity.js"
import Star from "./Star.js";
import Canvas from "../Base/Canvas.js";

export default class Background extends Entity {

    max_stars: number = 100
    stars: Array<Star> = []
    color: string = "black"

    constructor(){
        super();
        this.generateStars();
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(0, 0, Canvas.width, Canvas.height);
        ctx.closePath();
        ctx.fill();
        this.stars.forEach((star) => {
            star.draw(ctx);
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