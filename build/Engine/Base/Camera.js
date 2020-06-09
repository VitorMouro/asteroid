class CameraSingleton {
    constructor() {
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
}
const Camera = CameraSingleton.Instance;
export default Camera;
