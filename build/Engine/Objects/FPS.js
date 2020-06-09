import Entity from "../Base/Entity.js";
export default class FPS extends Entity {
    constructor() {
        super(...arguments);
        this.fps = 0;
        this.counter = 0;
    }
    draw(ctx) {
        ctx.font = "20px Consolas";
        ctx.fillText("FPS: " + this.fps.toFixed(0), 5, 20);
    }
    update(dt) {
        if (this.counter > 1000) {
            this.fps = 1000 / dt;
            this.counter = 0;
        }
        this.counter += dt;
    }
}
