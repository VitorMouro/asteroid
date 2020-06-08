import Vector2 from "../Types/Vector2.js";
import Shape from "./Shape.js";
export default class Triangle extends Shape {
    constructor(x, y, w, h, r, color) {
        super();
        this.p1 = new Vector2(0, 0);
        this.p2 = new Vector2(0, 0);
        this.p3 = new Vector2(0, 0);
        this.position = new Vector2(x, y);
        this.rotation = r || 0;
        this.color = color;
        this.size = new Vector2(w, h);
    }
    draw(ctx) {
        this.p1 = new Vector2(this.position.x + this.size.y / 2, this.position.y);
        this.p2 = new Vector2(this.position.x - this.size.y / 2, this.position.y - this.size.x / 2);
        this.p3 = new Vector2(this.position.x - this.size.y / 2, this.position.y + this.size.x / 2);
        this.fix_points();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + Math.cos(this.rotation * Math.PI / 180) * 50, this.position.y + Math.sin(this.rotation * Math.PI / 180) * 50);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.lineTo(this.p3.x, this.p3.y);
        ctx.closePath();
        ctx.fill();
    }
    fix_points() {
        this.p1 = this.rotate_point(this.p1, this.position, this.rotation);
        this.p2 = this.rotate_point(this.p2, this.position, this.rotation);
        this.p3 = this.rotate_point(this.p3, this.position, this.rotation);
    }
    rotate_point(p, origin, angle) {
        angle = angle * Math.PI / 180.0;
        let newPoint = new Vector2(0, 0);
        newPoint.x = Math.cos(angle) * (p.x - origin.x) - Math.sin(angle) * (p.y - origin.y) + origin.x;
        newPoint.y = Math.sin(angle) * (p.x - origin.x) + Math.cos(angle) * (p.y - origin.y) + origin.y;
        return newPoint;
    }
}
