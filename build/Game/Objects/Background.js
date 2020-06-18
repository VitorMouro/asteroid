import Entity from "../../Engine/Types/Entity.js";
import Star from "./Star.js";
import Canvas from "../../Engine/Base/Canvas.js";
import Vector2 from "../../Engine/Types/Vector2.js";
import Rect from "../../Engine/Shapes/Rect.js";
export default class Background extends Entity {
    constructor() {
        super();
        this.max_stars = 100;
        this.stars = [];
        this.color = "black";
        this.id = "background";
        this.position = new Vector2(0, 0);
        this.rotation = 0;
        this.shape = new Rect(this.position.x + Canvas.width / 2, this.position.y + Canvas.height / 2, Canvas.width, Canvas.height, 0, this.color);
        this.generateStars();
    }
    draw(ctx) {
        this.shape.draw(ctx);
        this.stars.forEach((start) => {
            start.draw(ctx);
        });
    }
    update(dt) {
        return;
    }
    generateStars() {
        this.stars = [];
        for (let i = 0; i < this.max_stars; i++) {
            this.stars.push(new Star);
        }
    }
}
//# sourceMappingURL=Background.js.map