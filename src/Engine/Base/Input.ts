enum Keys{
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    " "
}

class InputSingleton {

    
    private pressedKeys: { [key: string]: boolean; } = {}
    private static _instance: InputSingleton;

    private constructor() {
        window.addEventListener("keydown", this.handleKeyDown.bind(this), false)
        window.addEventListener("keyup", this.handleKeyUp.bind(this), false)
        for (let key in Keys){
            this.pressedKeys[Keys[key]] = false;
        }
    }

    public is_key_pressed(key: string) {
        return this.pressedKeys[key]
    }

    private handleKeyDown(event: KeyboardEvent) {
        if(event.repeat)
            return;
        for (let key in Keys){
            if(event.key == Keys[key]){
                this.pressedKeys[Keys[key]] = true;
                console.log("Pressed " + Keys[key])
                event.preventDefault();
            }
        }
    }

    private handleKeyUp(event: KeyboardEvent){
        for (let key in Keys){
            if(event.key == Keys[key]){
                this.pressedKeys[Keys[key]] = false;
                console.log("Released " + Keys[key])
                event.preventDefault();
            }
        }
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
}

const Input = InputSingleton.Instance;
export default Input;