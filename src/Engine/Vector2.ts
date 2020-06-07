export default class Vector2 {

  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  set(vector: Vector2) {
    this.x = vector.x;
    this.y = vector.y;
    return this;
  }

  setValues(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  reset(){
    this.x = 0;
    this.y = 0;
    return this;
  }

  add(vector: Vector2) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  addScalar(val: number) {
    this.x += val;
    this.y += val;
    return this;
  }

  subtract(vector: Vector2) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }

  subtractScalar(val: number) {
    this.x -= val;
    this.y -= val;
    return this;
  }

  multiply(vector: Vector2) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  }

  multiplyScalar(val: number) {
    this.x *= val;
    this.y *= val;
    return this;
  }

  divide(vector: Vector2) {
    this.x /= vector.x;
    this.y /= vector.y;
    return this;
  }

  divideScalar(val: number) {
    this.x /= val;
    this.y /= val;
    return this;
  }

  copy(vector: Vector2) {
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

  sameAngleRange(vector: Vector2, range: number) {
    range = !isNaN(range) ? range : Math.PI / 2;
    return Math.abs(this.angle() + Math.PI - (vector.angle() + Math.PI)) <= range;
  }

  rotate(angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return this.setValues(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
  }

  rotateBy(angle: number) {
    return this.rotate(this.angle() + angle);
  }

  angleTo(vector: Vector2) {
    return Math.atan2(vector.y - this.y, vector.x - this.x);
  }

  rotateAround(point: Vector2, angle: number) {
    return this.subtract(point)
      .rotate(angle)
      .add(point);
  }

  // ----

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  distanceTo(vector: Vector2) {
    return Math.sqrt((vector.x - this.x) * (vector.x - this.x) + (vector.y - this.y) * (vector.y - this.y));
  }

  invert() {
    return this.setValues(-this.x, -this.y);
  }

  dot(vector: Vector2) {
    return this.x * vector.x + this.y * vector.y;
  }

  cross(vector: Vector2) {
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

  projectOnto(vector: Vector2) {
    const coeff = (this.x * vector.x + this.y * vector.y) / (vector.x * vector.x + vector.y * vector.y);
    return this.setValues(coeff * vector.x, coeff * vector.y);
  }

  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }

  toPerp(normalized: boolean) {
    const tx = this.x;
    this.x = -this.y;
    this.y = tx;
    return normalized === true ? this.normalize() : this;
  }

  // the perpendicular vector is a 90 deg CCW rotated vector
  getPerp(normalized: boolean) {
    const p = new Vector2(-this.y, this.x);
    return normalized === true ? p.normalize() : p;
  }

  lerp(vector: Vector2, f: number) {
    this.x += (vector.x - this.x) * f;
    this.y += (vector.y - this.y) * f;
    return this;
  }

  // ---- validation ----

  equals(vector: Vector2) {
    return vector.x === this.x && vector.y === this.y;
  }

  equalsNormalized(vector: Vector2) {
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