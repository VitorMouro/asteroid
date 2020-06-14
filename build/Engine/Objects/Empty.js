import Entity from "../Types/Entity.js";
import Vector2 from "../Types/Vector2.js";
import Game from "../Base/Game.js";
import Asteroid from "./Asteroid.js";
import Canvas from "../Base/Canvas.js";
export default class Empty extends Entity {
    constructor() {
        super(...arguments);
        this.id = "";
        this.position = new Vector2(0, 0);
        this.rotation = 0;
        this.shape = null;
        this.color = null;
        this.asteroid_delay = 1;
    }
    spawn_asteroid() {
        let asteroid_position = new Vector2(0, 0);
        let asteroid_radius = Math.random() * 80 + 20;
        let clampX = Math.round(Math.random());
        if (clampX) {
            asteroid_position.x = Math.round(Math.random()) * (Canvas.width + 2 * asteroid_radius) - asteroid_radius;
            asteroid_position.y = Math.random() * Canvas.height;
        }
        else {
            asteroid_position.y = Math.round(Math.random()) * (Canvas.height + 2 * asteroid_radius) - asteroid_radius;
            asteroid_position.x = Math.random() * Canvas.width;
        }
        const player = Game.activeScene.find("Player");
        let player_direction = new Vector2(asteroid_position.x - player.position.x, asteroid_position.y - player.position.y);
        let asteroid_direction = player_direction.angle() * 180 / Math.PI + 180 + Math.random() * 120 - 60;
        Game.activeScene.add(new Asteroid((Math.random() * 999).toString(), asteroid_position.x, asteroid_position.y, asteroid_direction, asteroid_radius, "white"));
    }
    update(dt) {
        if (this.asteroid_delay < 0) {
            this.spawn_asteroid();
            this.asteroid_delay = Math.random() * 3;
        }
        else
            this.asteroid_delay -= dt / 1000;
    }
    draw(ctx) {
    }
}
//# sourceMappingURL=Empty.js.map