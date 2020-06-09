import Game from "./Engine/Base/Game.js";

declare global {
    interface Window {
        canvas: HTMLCanvasElement
    }
}

const canvas: HTMLCanvasElement = document.createElement("canvas");
document.body.prepend(canvas);
canvas.height = 800;
canvas.width = 800;
window.canvas = canvas

const game = new Game(); 