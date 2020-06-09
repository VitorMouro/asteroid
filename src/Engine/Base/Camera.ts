import Vector2 from "../Types/Vector2.js";

class CameraSingleton {

    private static _instance: CameraSingleton;
    public _position: Vector2

    private constructor() {
        this._position = new Vector2(200, 200);
    }

    update(){

    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
}

const Camera = CameraSingleton.Instance;
export default Camera;