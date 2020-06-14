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
    find(id) {
        for (let i in this.entities) {
            if (this.entities[i].id == id)
                return this.entities[i];
        }
        return null;
    }
    remove(id) {
        this.entities = this.entities.filter((entity, index) => {
            return entity.id != id;
        });
    }
}
//# sourceMappingURL=Scene.js.map