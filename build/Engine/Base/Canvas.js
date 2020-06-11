class CanvasSingleton {
    constructor() {
        this.width = 800;
        this.height = 800;
        const canvas = document.createElement("canvas");
        const container = document.getElementById("container");
        container.prepend(canvas);
        canvas.width = this.width;
        canvas.height = this.height;
        this.ctx = canvas.getContext("2d");
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    get Context() {
        return this.ctx;
    }
}
const Canvas = CanvasSingleton.Instance;
export default Canvas;
