import Entity from "../../Engine/Types/Entity.js";
import Vector2 from "../../Engine/Types/Vector2.js";
import Circle from "../../Engine/Shapes/Circle.js";
import Canvas from "../../Engine/Base/Canvas.js";
import Game from "../../Engine/Base/Game.js";
export default class Asteroid extends Entity {
    constructor(id, x, y, rotation, radius, color) {
        super();
        this.velocity = new Vector2(0, 0);
        this.id = id;
        this.position = new Vector2(x, y);
        this.rotation = rotation;
        this.color = color;
        this.radius = radius;
        this.thrust = 8000 / radius;
        this.shape = new Circle(this.position.x, this.position.y, this.radius, this.rotation, "white");
    }
    update(dt) {
        this.velocity.x = Math.cos(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.velocity.y = Math.sin(this.rotation * Math.PI / 180) * this.thrust * dt / 1000;
        this.position.add(this.velocity);
        this.shape.position = this.position;
        if (this.position.y < 0 - this.radius || this.position.y > Canvas.height + this.radius || this.position.x < 0 - this.radius || this.position.x > Canvas.width + this.radius)
            Game.activeScene.remove(this.id);
    }
    draw(ctx) {
        this.shape.draw(ctx);
    }
}
//# sourceMappingURL=Asteroid.js.map