class SignalSingleton {
    constructor() {
        this.registered_entities = [];
    }
    register(entity) {
        this.registered_entities.push(entity);
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
}
const Signal = SignalSingleton.Instance;
export default Signal;
