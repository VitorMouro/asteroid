import Entity from "../Base/Entity.js";
import Star from "./Star.js";
export default class Background extends Entity {
    constructor() {
        super();
        this.max_stars = 100;
        this.stars = [];
        this.color = "black";
        this.generateStars();
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(0, 0, window.canvas.width, window.canvas.height);
        ctx.closePath();
        ctx.fill();
        this.stars.forEach((star) => {
            star.draw(ctx);
        });
    }
    update(dt) {
        return;
    }
    generateStars() {
        this.stars = [];
        for (let i = 0; i < this.max_stars; i++) {
            this.stars.push(new Star);
        }
    }
}
