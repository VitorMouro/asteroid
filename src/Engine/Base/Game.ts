import Player from "../../Game/Objects/Player.js";
import FPS from "../../Game/Objects/FPS.js";
import Background from "../../Game/Objects/Background.js";
import Canvas from "./Canvas.js";
import Scene from "./Scene.js";
import Empty from "../../Game/Objects/Empty.js";

class GameSingleton {

    private static _instance: GameSingleton;
    ctx: CanvasRenderingContext2D
    lastTime: number = 0
    activeScene: Scene

    constructor(){
        this.ctx = Canvas.Context
        this.activeScene = new Scene;
        this.activeScene.add(new Background)
        this.activeScene.add(new Player)
        this.activeScene.add(new FPS)
        this.activeScene.add(new Empty)
    }

    start(){
        requestAnimationFrame(this.process.bind(this));
    }

    process(timestamp: number){
        let dt = timestamp - this.lastTime;
        this.lastTime = timestamp;
        this.update(dt);
        this.clear();
        this.draw(this.ctx);
        requestAnimationFrame(this.process.bind(this))
    }

    update(dt: number){
        this.activeScene.update(dt)
    }
    
    draw(ctx: CanvasRenderingContext2D){
        this.activeScene.draw(ctx)
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