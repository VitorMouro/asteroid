class CameraSingleton {

    private static _instance: CameraSingleton;

    private constructor() {
        
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
}

const Camera = CameraSingleton.Instance;
export default Camera;