import * as BABYLON from "babylonjs";

class VideoGame {
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
        const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), this._scene);
        camera.attachControl(this._canvas, false);

        // light
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);
        light.intensity = 0.7;

        // ground
        const ground = BABYLON.Mesh.CreateGround("ground1", 100, 50, 2, this._scene);
        ground.position.y = 1;

        // mat
        const mat = new BABYLON.StandardMaterial("mat", this._scene);
        const videoTexture = new BABYLON.VideoTexture("video", ["assets/sample.mp4"], this._scene, true, true);
        mat.diffuseTexture = videoTexture;

        ground.material = mat;

        this._scene.onPointerUp = () => videoTexture.video.play();
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }

    public stopRender(): void {
        this._engine.stopRenderLoop();
    }
}

export default VideoGame;
