var Key;
(function (Key) {
    Key[Key["Left"] = 37] = "Left";
    Key[Key["Up"] = 38] = "Up";
    Key[Key["Right"] = 39] = "Right";
    Key[Key["Down"] = 40] = "Down";
})(Key || (Key = {}));
export default class Input {
    constructor() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    is_key_pressed(key) {
    }
    handleKeyDown(event) {
        console.log(event.keyCode);
    }
}
