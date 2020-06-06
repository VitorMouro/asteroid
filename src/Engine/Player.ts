import Entity from "./Entity.js"

export default class Player extends Entity {

    size: { x: number, y: number }

    constructor() {
        super();
        this.size = { x: 50, y: 50 }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "rgb(200, 0, 0)"
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }

    update(dt: number) {

    }

}