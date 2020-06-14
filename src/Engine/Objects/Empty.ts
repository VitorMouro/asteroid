import Entity from "../Types/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Shape from "../Shapes/Shape.js";
import Game from "../Base/Game.js";
import Asteroid from "./Asteroid.js";
import Canvas from "../Base/Canvas.js";

export default class Empty extends Entity{

    id: string = ""
    position: Vector2 = new Vector2(0, 0)
    rotation: number = 0
    shape: Shape | null = null
    color: string | null = null
    asteroid_delay = 1

    spawn_asteroid(){
        let asteroid_position = new Vector2(0, 0)   
        let clampX = Math.round(Math.random())
        if(clampX){
            asteroid_position.x = Math.round(Math.random())*Canvas.width
            asteroid_position.y = Math.random() * Canvas.height
        }else{
            asteroid_position.y = Math.round(Math.random())*Canvas.height
            asteroid_position.x = Math.random() * Canvas.width
        }

        Game.activeScene.add(new Asteroid("", asteroid_position.x, asteroid_position.y, Math.round(Math.random()*360), "white"))
    }

    update(dt: number){
        if(this.asteroid_delay < 0){
            this.spawn_asteroid();
            this.asteroid_delay = Math.random()*3
        }
        else
            this.asteroid_delay -= dt/1000
    }

    draw(ctx: CanvasRenderingContext2D){

    }
}