export default class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setVector(vector) {
        this.x = vector.x;
        this.y = vector.y;
        return this;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    reset() {
        this.x = 0;
        this.y = 0;
        return this;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    addScalar(val) {
        this.x += val;
        this.y += val;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    subtractScalar(val) {
        this.x -= val;
        this.y -= val;
        return this;
    }
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }
    multiplyScalar(val) {
        this.x *= val;
        this.y *= val;
        return this;
    }
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    }
    divideScalar(val) {
        this.x /= val;
        this.y /= val;
        return this;
    }
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;
        return this;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    // ---- rotation ----
    // horizontal angle
    angle() {
        return Math.atan2(this.y, this.x);
    }
    // vertical angle
    angle2() {
        return Math.atan2(this.x, this.y);
    }
    sameAngleRange(vector, range) {
        range = !isNaN(range) ? range : Math.PI / 2;
        return Math.abs(this.angle() + Math.PI - (vector.angle() + Math.PI)) <= range;
    }
    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return this.set(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }
    rotateBy(angle) {
        return this.rotate(this.angle() + angle);
    }
    angleTo(vector) {
        return Math.atan2(vector.y - this.y, vector.x - this.x);
    }
    rotateAround(point, angle) {
        return this.subtract(point)
            .rotate(angle)
            .add(point);
    }
    // ----
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    distanceTo(vector) {
        return Math.sqrt((vector.x - this.x) * (vector.x - this.x) + (vector.y - this.y) * (vector.y - this.y));
    }
    invert() {
        return this.set(-this.x, -this.y);
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    cross(vector) {
        return this.x * vector.y - this.y * vector.x;
    }
    normalize() {
        if (!this.isZero()) {
            const m = this.magnitude();
            this.x /= m;
            this.y /= m;
        }
        return this;
    }
    projectOnto(vector) {
        const coeff = (this.x * vector.x + this.y * vector.y) / (vector.x * vector.x + vector.y * vector.y);
        return this.set(coeff * vector.x, coeff * vector.y);
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    toPerp(normalized) {
        const tx = this.x;
        this.x = -this.y;
        this.y = tx;
        return normalized === true ? this.normalize() : this;
    }
    // the perpendicular vector is a 90 deg CCW rotated vector
    getPerp(normalized) {
        const p = new Vector2(-this.y, this.x);
        return normalized === true ? p.normalize() : p;
    }
    lerp(vector, f) {
        this.x += (vector.x - this.x) * f;
        this.y += (vector.y - this.y) * f;
        return this;
    }
    // ---- validation ----
    equals(vector) {
        return vector.x === this.x && vector.y === this.y;
    }
    equalsNormalized(vector) {
        const v1 = this.clone().normalize();
        const v2 = vector.clone().normalize();
        return v2.x === v1.x && v2.y === v1.y;
    }
    isZero() {
        return this.x === 0 && this.y === 0;
    }
    // ---- output ----
    toString() {
        return "x:" + this.x + ", y:" + this.y;
    }
    toObject() {
        return { x: this.x, y: this.y };
    }
    toArray() {
        return [this.x, this.y];
    }
}
