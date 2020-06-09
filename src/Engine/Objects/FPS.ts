import Entity from "../Base/Entity.js";

export default class FPS extends Entity {

    fps: number = 0
    counter: number = 0

    draw(ctx: CanvasRenderingContext2D){
        ctx.font = "20px Consolas";
        ctx.fillText("FPS: " + this.fps.toFixed(0), 5, 20);
    }

    update(dt: number) {
        if(this.counter > 1000){
            this.fps = 1000/dt;
            this.counter = 0;
        }
        this.counter += dt;
    }
}