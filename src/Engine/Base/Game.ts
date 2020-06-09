import Player from "../Objects/Player.js";
import Entity from "./Entity.js";
import FPS from "../Objects/FPS.js";
import Background from "../Objects/Background.js";

export default class Game {

    ctx: CanvasRenderingContext2D
    entities: Array<Entity> = []
    lastTime: number = 0

    constructor(){
        this.ctx = window.canvas.getContext("2d") as CanvasRenderingContext2D;

        this.entities.push(new Background);
        this.entities.push(new Player);
        this.entities.push(new FPS);

        requestAnimationFrame(this.process.bind(this));
    }

    process(timestamp: number){
        const dt = timestamp - this.lastTime;
        this.lastTime = timestamp;
        this.update(dt);
        this.clear();
        this.draw();
        requestAnimationFrame(this.process.bind(this))
    }

    update(delta: number){
        this.entities.forEach((entity) => {
            entity.update(delta);
        });
    }
    
    draw(){
        this.entities.forEach((entity) => {
            entity.draw(this.ctx);
        });
    }

    clear(){ 
        this.ctx.clearRect(0, 0, window.canvas.width, window.canvas.height);
    }

}