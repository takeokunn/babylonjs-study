import * as BABYLON from "babylonjs";

class SandboxGame {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;

    public constructor(canvasElement: string, canvasSize: CanvasSize) {
        this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
        this._canvas.width = canvasSize.width;
        this._canvas.height = canvasSize.height;
        this._engine = new BABYLON.Engine(this._canvas, true);
    }

    public createScene(): void {
        // scene
        this._scene = new BABYLON.Scene(this._engine);

        // camera
        const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this._scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(this._canvas, false);

        // light
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);

        // sphere
        const sphere = BABYLON.MeshBuilder.CreateSphere("sphere1", { segments: 16, diameter: 2 }, this._scene);
        sphere.position.y = 1;

        // ground
        BABYLON.MeshBuilder.CreateGround("ground1", { width: 6, height: 6, subdivisions: 2 }, this._scene);
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }

    public stopRender(): void {
        this._engine.stopRenderLoop();
    }
}

export default SandboxGame;
