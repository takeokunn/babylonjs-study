import SandboxGame from "./sandbox";
import VideoGame from "./video";
import EarthGame from "./earth";
import PhysicsGame from "./physics";
import RenderingGame from "./rendering";
import WaterGame from "./water";
import ReflectionGame from "./reflection";

const elem = "renderCanvas";

const canvasSize: CanvasSize = {
    width: window.innerWidth - 100,
    height: window.innerHeight - 100
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

const reflection = (): void => {
    const game: ReflectionGame = new ReflectionGame(elem, canvasSize);
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
    // reflection();
};

window.addEventListener("DOMContentLoaded", main);
