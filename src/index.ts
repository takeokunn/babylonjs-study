// import SandboxGame from "./sandbox";
import VideoGame from "./video";

const canvasSize: CanvasSize = {
    width: 600,
    height: 480
};

const main = (): void => {
    const elem = "renderCanvas";
    // const game: SandboxGame = new SandboxGame(elem, canvasSize);
    const game: VideoGame = new VideoGame(elem, canvasSize);
    game.createScene();
    game.doRender();
};

window.addEventListener("DOMContentLoaded", main);
