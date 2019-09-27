import SandboxGame from "./sandbox";
import VideoGame from "./video";
import EarthGame from "./earth";
import PhysicsGame from "./physics";
import RenderingGame from "./rendering";
import WaterGame from "./water";

const elem = "renderCanvas";

const canvasSize: CanvasSize = {
    width: 600,
    height: 480
};

const sandbox = (): void => {
    const game: SandboxGame = new SandboxGame(elem, canvasSize);
    game.createScene();
    game.doRender();
};

const video = (): void => {
    const game: VideoGame = new VideoGame(elem, canvasSize);
    game.createScene();
    game.doRender();
};

const earth = (): void => {
    const game: EarthGame = new EarthGame(elem, canvasSize);
    game.createScene();
    game.doRender();
};

const physics = (): void => {
    const game: PhysicsGame = new PhysicsGame(elem, canvasSize);
    game.createScene();
    game.doRender();
};

const rendering = (): void => {
    const game: RenderingGame = new RenderingGame(elem, canvasSize);
    game.createScene();
    game.doRender();
};

const water = (): void => {
    const game: WaterGame = new WaterGame(elem, canvasSize);
    game.createScene();
    game.doRender();
};

const main = (): void => {
    // sandbox();
    // video();
    // earth();
    // physics();
    // rendering();
    water();
};

window.addEventListener("DOMContentLoaded", main);
