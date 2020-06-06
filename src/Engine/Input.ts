let Keys: { [key: string]: number; } = {
    // Adicione pares KEY => KEYCODE como input
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}

export default class Input {

    pressed: { [key: string]: boolean; } = {}

    constructor() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
        for (let key in Keys){
            this.pressed[key] = false;
        }
    }

    is_key_pressed(key: string) {
        return this.pressed[key]
    }

    handleKeyDown(event: KeyboardEvent) {
        for (let key in Keys){
            if(event.keyCode == Keys[key]){
                this.pressed[key] = true;
            }
        }
    }

    handleKeyUp(event: KeyboardEvent){
        for (let key in Keys){
            if(event.keyCode == Keys[key]){
                this.pressed[key] = false;
            }
        }
    }
}