import Game from "./Engine/Game.js";
import Input from "./Engine/Input.js";

declare global {
    interface Window {
        Input: Input
    }
}

window.Input = new Input

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;

canvas.height = 800;
canvas.width = 800;

const gameInstance = new Game(canvas); 