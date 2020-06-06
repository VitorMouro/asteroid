enum Key {
    Left = 37,
    Up = 38,
    Right = 39,
    Down = 40
}

export default class Input {

    constructor(){
        document.addEventListener("keydown", this.handleKeyDown)
    }

    is_key_pressed(key: string){

    }

    handleKeyDown(event: KeyboardEvent){
        console.log(event.keyCode)

    }

}