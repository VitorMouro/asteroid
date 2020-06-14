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
        for(let i in this.entities){
            if(this.entities[i].id == id)
                return this.entities[i]
        }
        return null
    }

    remove(id: string) : void {
        this.entities = this.entities.filter((entity, index) => {
            return entity.id != id;
        });
    }

}