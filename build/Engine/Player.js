import Entity from "./Entity.js";
export default class Player extends Entity {
    constructor() {
        super();
        this.size = { x: 50, y: 50 };
    }
    draw(ctx) {
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    update(dt) {
    }
}
