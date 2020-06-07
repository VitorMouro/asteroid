import Game from "./Engine/Game.js";
import Input from "./Engine/Input.js";
window.Input = new Input;
const canvas = document.getElementById("canvas");
canvas.height = 800;
canvas.width = 800;
const game1 = new Game(canvas);
