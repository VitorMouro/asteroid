import Vector2 from "../Types/Vector2.js"
import Shape from "./Shape.js"

export default class Triangle extends Shape{

    size: Vector2
    show_normal: boolean = false

    private p1: Vector2 = new Vector2(0, 0)
    private p2: Vector2 = new Vector2(0, 0)
    private p3: Vector2 = new Vector2(0, 0)

    constructor(x: number, y: number, w: number, h: number, r: number, color: string) {
        super();
        this.position = new Vector2(x, y);
        this.rotation = r || 0;
        this.color = color;
        this.size = new Vector2(w, h)
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.p1 = new Vector2(this.position.x+this.size.y/2, this.position.y);
        this.p2 = new Vector2(this.position.x-this.size.y/2, this.position.y-this.size.x/2);
        this.p3 = new Vector2(this.position.x-this.size.y/2, this.position.y+this.size.x/2);
        this.fix_points();

        if(this.show_normal){
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red"
            ctx.beginPath();
            ctx.moveTo(this.position.x-Math.cos(this.rotation * Math.PI / 180)*50, this.position.y-Math.sin(this.rotation * Math.PI / 180)*50);
            ctx.lineTo(this.position.x+Math.cos(this.rotation * Math.PI / 180)*50, this.position.y+Math.sin(this.rotation * Math.PI / 180)*50);
            ctx.closePath();
            ctx.stroke();
        }


        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.lineTo(this.p3.x, this.p3.y);
        ctx.closePath();
        ctx.fill();
    }

    private fix_points() {
        this.p1 = this.rotate_point(this.p1, this.position, this.rotation);
        this.p2 = this.rotate_point(this.p2, this.position, this.rotation);
        this.p3 = this.rotate_point(this.p3, this.position, this.rotation);
    }

    private rotate_point(p: Vector2, origin: Vector2, angle: number) {
        angle = angle * Math.PI / 180.0;
        let newPoint: Vector2 = new Vector2(0, 0);
        newPoint.x = Math.cos(angle) * (p.x - origin.x) - Math.sin(angle) * (p.y - origin.y) + origin.x;
        newPoint.y = Math.sin(angle) * (p.x - origin.x) + Math.cos(angle) * (p.y - origin.y) + origin.y;
        return newPoint
    }
}