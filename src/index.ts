import * as BABYLON from "babylonjs";

class Game {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _camera: BABYLON.FreeCamera;
    private _light: BABYLON.Light;

    public constructor(canvasElement: string) {
        this._canvas = document.getElementById(
            canvasElement
        ) as HTMLCanvasElement;
        this._engine = new BABYLON.Engine(this._canvas, true);
    }

    public createScene(): void {
        // scene
        this._scene = new BABYLON.Scene(this._engine);

        // camera
        this._camera = new BABYLON.FreeCamera(
            "camera1",
            new BABYLON.Vector3(0, 5, -10),
            this._scene
        );
        this._camera.setTarget(BABYLON.Vector3.Zero());
        this._camera.attachControl(this._canvas, false);

        // light
        this._light = new BABYLON.HemisphericLight(
            "light1",
            new BABYLON.Vector3(0, 1, 0),
            this._scene
        );

        // sphere
        const sphere = BABYLON.MeshBuilder.CreateSphere(
            "sphere1",
            { segments: 16, diameter: 2 },
            this._scene
        );
        sphere.position.y = 1;

        // ground
        BABYLON.MeshBuilder.CreateGround(
            "ground1",
            { width: 6, height: 6, subdivisions: 2 },
            this._scene
        );
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }
}

const main = (): void => {
    const elem = "renderCanvas";
    const game: Game = new Game(elem);
    game.createScene();
    game.doRender();
};

window.addEventListener("DOMContentLoaded", main);
