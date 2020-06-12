import Entity from "../Types/Entity.js";
import Star from "./Star.js";
import Canvas from "../Base/Canvas.js";
import Vector2 from "../Types/Vector2.js";
export default class Background extends Entity {
    constructor() {
        super();
        this.max_stars = 100;
        this.stars = [];
        this.color = "black";
        this.id = "Back";
        this.position = new Vector2(0, 0);
        this.rotation = 0;
        this.generateStars();
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(0, 0, Canvas.width, Canvas.height);
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
//# sourceMappingURL=Background.js.map