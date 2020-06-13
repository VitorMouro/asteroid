var Keys;
(function (Keys) {
    Keys[Keys["ArrowLeft"] = 0] = "ArrowLeft";
    Keys[Keys["ArrowUp"] = 1] = "ArrowUp";
    Keys[Keys["ArrowRight"] = 2] = "ArrowRight";
    Keys[Keys["ArrowDown"] = 3] = "ArrowDown";
    Keys[Keys[" "] = 4] = " ";
})(Keys || (Keys = {}));
class InputSingleton {
    constructor() {
        this.pressedKeys = {};
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
        document.addEventListener("keyup", this.handleKeyUp.bind(this));
        for (let key in Keys) {
            this.pressedKeys[Keys[key]] = false;
        }
    }
    is_key_pressed(key) {
        return this.pressedKeys[key];
    }
    handleKeyDown(event) {
        if (event.repeat)
            return;
        for (let key in Keys) {
            if (event.key == Keys[key]) {
                this.pressedKeys[Keys[key]] = true;
                console.log("Pressed " + Keys[key]);
            }
        }
    }
    handleKeyUp(event) {
        for (let key in Keys) {
            if (event.key == Keys[key]) {
                this.pressedKeys[Keys[key]] = false;
                console.log("Released " + Keys[key]);
            }
        }
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
}
const Input = InputSingleton.Instance;
export default Input;
//# sourceMappingURL=Input.js.map