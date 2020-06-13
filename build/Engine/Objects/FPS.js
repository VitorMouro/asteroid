import Entity from "../Types/Entity.js";
import Vector2 from "../Types/Vector2.js";
export default class FPS extends Entity {
    constructor() {
        super();
        this.fps = 0;
        this.counter = 0;
        this.shape = null;
        this.color = null;
        this.id = "FPS";
        this.position = new Vector2(5, 20);
        this.rotation = 0;
    }
    draw(ctx) {
        ctx.font = "20px Consolas";
        ctx.fillText("FPS: " + this.fps.toFixed(0), this.position.x, this.position.y);
    }
    update(dt) {
        if (this.counter > 1000) {
            this.fps = 1000 / dt;
            this.counter = 0;
        }
        this.counter += dt;
    }
}
//# sourceMappingURL=FPS.js.map