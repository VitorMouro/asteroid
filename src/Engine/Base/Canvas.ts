class CanvasSingleton {

    private static _instance: CanvasSingleton;
    public width: number = 800
    public height: number = 800
    private ctx: CanvasRenderingContext2D

    private constructor() {
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        const container: HTMLElement = document.getElementById("container") as HTMLElement;
        container.prepend(canvas);
        canvas.width = this.width;
        canvas.height = this.height;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    get Context () {
        return this.ctx;
    }
}

const Canvas = CanvasSingleton.Instance;
export default Canvas;