import Vector2 from "../Types/Vector2.js";
export default class Shape {
    constructor() {
        this.position = new Vector2(0, 0);
        this.rotation = 0;
        this.color = "white";
    }
}
