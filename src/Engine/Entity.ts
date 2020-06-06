export default abstract class Entity {

    position: {x: number, y: number}

    constructor(){
        this.position = {x: 0, y: 0}
    }

    abstract update(delta: number) : void;
    
    abstract draw(ctx: CanvasRenderingContext2D) : void;
}