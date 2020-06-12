import Player from "../Objects/Player.js";
import FPS from "../Objects/FPS.js";
import Background from "../Objects/Background.js";
import Canvas from "./Canvas.js";
class GameSingleton {
    constructor() {
        this.entities = [];
        this.lastTime = 0;
        this.ctx = Canvas.Context;
        this.entities.push(new Background);
        this.entities.push(new Player);
        this.entities.push(new FPS);
    }
    start() {
        requestAnimationFrame(this.process.bind(this));
    }
    process(timestamp) {
        const dt = timestamp - this.lastTime;
        this.lastTime = timestamp;
        this.update(dt);
        this.clear();
        this.draw();
        requestAnimationFrame(this.process.bind(this));
    }
    update(delta) {
        this.entities.forEach((entity) => {
            entity.update(delta);
        });
    }
    draw() {
        this.entities.forEach((entity) => {
            entity.draw(this.ctx);
        });
    }
    clear() {
        this.ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
}
const Game = GameSingleton.Instance;
export default Game;
//# sourceMappingURL=Game.js.map