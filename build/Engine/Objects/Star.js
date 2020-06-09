import Entity from "../Base/Entity.js";
import Canvas from "../Base/Canvas.js";
export default class Star extends Entity {
    constructor() {
        super();
        this.radius = Math.floor(Math.random() * Star.max_radius) + 1;
        this.opacity = this.radius / 4;
        this.color = "rgba(255, 255, 255, " + this.opacity + ")";
        this.position.x = Math.floor(Math.random() * Canvas.width) + 1;
        this.position.y = Math.floor(Math.random() * Canvas.height) + 1;
    }
    update() {
        return;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
Star.max_radius = 3;
