import Vector2 from "../Types/Vector2.js";
class CameraSingleton {
    constructor() {
        this._position = new Vector2(200, 200);
    }
    update() {
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
}
const Camera = CameraSingleton.Instance;
export default Camera;
//# sourceMappingURL=Camera.js.map