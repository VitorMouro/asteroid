import Entity from "../../Engine/Types/Entity.js";
import Vector2 from "../../Engine/Types/Vector2.js";
import Circle from "../../Engine/Shapes/Circle.js";
import Canvas from "../../Engine/Base/Canvas.js";
import Game from "../../Engine/Base/Game.js";
export default class Shot extends Entity {
    constructor(id, x, y, r) {
        super();
        this.velocity = new Vector2(0, 0);
        this.thrust = 400;
        this.radius = 5;
        this.color = "white";
        this.id = id;
        this.position = new Vector2(x, y);
        this.rotation = r;
        this.shape = new Circle(this.position.x, this.position.y, this.radius, this.rotation, this.color);
    }
    update(dt) {
        this.velocity.x = Math.cos(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.velocity.y = Math.sin(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.position.add(this.velocity);
        this.shape.position = this.position;
        if (this.position.y < 0 || this.position.y > Canvas.height || this.position.x < 0 || this.position.x > Canvas.width)
            Game.activeScene.remove(this.id);
    }
    draw(ctx) {
        this.shape.draw(ctx);
    }
}
//# sourceMappingURL=Shot.js.map