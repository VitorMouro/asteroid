import Game from "./Engine/Base/Game.js";

declare global {
    interface Window {
        Game: Game
    }
}

const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
canvas.height = 800;
canvas.width = 800;

const game1 = new Game(canvas); 
window.Game = game1;