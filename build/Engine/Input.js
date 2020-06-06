let Keys = {
    // Adicione pares KEY => KEYCODE como input
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
export default class Input {
    constructor() {
        this.pressed = {};
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
        for (let key in Keys) {
            this.pressed[key] = false;
        }
    }
    is_key_pressed(key) {
        return this.pressed[key];
    }
    handleKeyDown(event) {
        for (let key in Keys) {
            if (event.keyCode == Keys[key]) {
                this.pressed[key] = true;
            }
        }
    }
    handleKeyUp(event) {
        for (let key in Keys) {
            if (event.keyCode == Keys[key]) {
                this.pressed[key] = false;
            }
        }
    }
}
