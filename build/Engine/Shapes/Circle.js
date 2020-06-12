import Shape from "./Shape.js";
import Vector2 from "../Types/Vector2.js";
export default class Circle extends Shape {
    constructor() {
        super();
        this.position = new Vector2(0, 0);
        this.rotation = 0;
        this.color = "white";
        this.radius = 5;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}
//# sourceMappingURL=Circle.js.map