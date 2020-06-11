import Player from "../Objects/Player.js";
import Entity from "../Types/Entity.js";
import FPS from "../Objects/FPS.js";
import Background from "../Objects/Background.js";
import Canvas from "./Canvas.js";
import Circle from "../Shapes/Circle.js";

class GameSingleton {

    private static _instance: GameSingleton;
    ctx: CanvasRenderingContext2D
    entities: Array<Entity> = []
    lastTime: number = 0

    constructor(){
        this.ctx = Canvas.Context;

        this.entities.push(new Background);
        this.entities.push(new Player);
        this.entities.push(new FPS);
    }

    start(){
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
        this.ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

}

const Game = GameSingleton.Instance;
export default Game;