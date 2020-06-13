export default class Scene {
    constructor() {
        this.entities = [];
    }
    update(dt) {
        this.entities.forEach((entity) => {
            entity.update(dt);
        });
    }
    draw(ctx) {
        this.entities.forEach((entity) => {
            entity.draw(ctx);
        });
    }
    add(entity) {
        this.entities.push(entity);
    }
    get(id) {
        this.entities.forEach((entity) => {
            if (entity.id == id)
                return entity;
        });
        return null;
    }
}
//# sourceMappingURL=Scene.js.map