import Entity from "../../Engine/Types/Entity.js";
import Canvas from "../../Engine/Base/Canvas.js";
import Vector2 from "../../Engine/Types/Vector2.js";
import Circle from "../../Engine/Shapes/Circle.js";
export default class Star extends Entity {
    constructor() {
        super();
        this.id = "";
        this.position = new Vector2(Math.floor(Math.random() * Canvas.width) + 1, Math.floor(Math.random() * Canvas.height) + 1);
        this.rotation = 0;
        this.radius = Math.floor(Math.random() * Star.max_radius) + 1;
        this.opacity = this.radius / 4;
        this.color = "rgba(255, 255, 255, " + this.opacity + ")";
        this.shape = new Circle(this.position.x, this.position.y, this.radius, this.rotation, this.color);
        this.shape.position = this.position;
        this.shape.radius = this.radius;
    }
    update() {
        return;
    }
    draw(ctx) {
        this.shape.draw(ctx);
    }
}
Star.max_radius = 3;
//# sourceMappingURL=Star.js.map