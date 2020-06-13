import Scene from "../Base/Scene.js";
import Player from "../Objects/Player.js";
import Background from "../Objects/Background.js";
import FPS from "../Objects/FPS.js";
const MainScene = new Scene;
MainScene.add(new Background);
MainScene.add(new Player);
MainScene.add(new FPS);
export default MainScene;
//# sourceMappingURL=MainScene.js.map