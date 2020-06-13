import Entity from "../Types/Entity.js";

export default class Scene {

    private entities: Array<Entity> = []

    update(dt: number){
        this.entities.forEach((entity) => {
            entity.update(dt);
        });
    }

    draw(ctx: CanvasRenderingContext2D){
        this.entities.forEach((entity) => {
            entity.draw(ctx);
        });
    }

    add(entity: Entity){
        this.entities.push(entity)
    }

    find(id: string) : Entity | null{
        this.entities.forEach((entity) => {
            if(entity.id == id)
                return entity
        });
        return null
    }

}