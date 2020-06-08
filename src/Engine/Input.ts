let Keys: { [key: string]: number; } = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
    // Adicione pares KEY => KEYCODE abaixo como input
}

export default class Input {

    private pressed: { [key: string]: boolean; } = {}

    constructor() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
        for (let key in Keys){
            this.pressed[key] = false;
        }
    }

    public is_key_pressed(key: string) {
        return this.pressed[key]
    }

    private handleKeyDown(event: KeyboardEvent) {
        for (let key in Keys){
            if(event.keyCode == Keys[key]){
                this.pressed[key] = true;
            }
        }
    }

    private handleKeyUp(event: KeyboardEvent){
        for (let key in Keys){
            if(event.keyCode == Keys[key]){
                this.pressed[key] = false;
            }
        }
    }
}