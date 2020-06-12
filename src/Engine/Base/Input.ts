let Keys: { [key: string]: number; } = {
    // Adicione pares KEY => KEYCODE abaixo como input
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
}

class InputSingleton {

    private pressed: { [key: string]: boolean; } = {}
    private static _instance: InputSingleton;

    private constructor() {
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

    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }
}

const Input = InputSingleton.Instance;
export default Input;