import Game from "./Engine/Game.js";
import Input from "./Engine/Input.js";

declare global {
    interface Window {
        Input: Input
        Game: Game
    }
}

window.Input = new Input

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
canvas.height = 800;
canvas.width = 800;

const game1 = new Game(canvas); 