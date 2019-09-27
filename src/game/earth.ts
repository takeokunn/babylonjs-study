import * as BABYLON from "babylonjs";

class EarthGame {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;

    public constructor(canvasElement: string, canvasSize: CanvasSize) {
        this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
        this._canvas.width = canvasSize.width;
        this._canvas.height = canvasSize.height;
        this._engine = new BABYLON.Engine(this._canvas, true);
        this._scene = new BABYLON.Scene(this._engine);
    }

    public createScene(): void {
        const camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), this._scene);
        const sphere = BABYLON.Mesh.CreateSphere("sphere", 30, 1, this._scene);
        const material = new BABYLON.StandardMaterial("default", this._scene);
        material.diffuseTexture = new BABYLON.Texture("assets/earth.jpg", this._scene);
        material.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
        sphere.material = material;
        this._scene.clearColor = new BABYLON.Color4(0.0, 0.0, 0.0);

        const renderLoop = () => {
            this._engine.beginFrame();
            this._scene.render();
            this._engine.endFrame();
            BABYLON.Tools.QueueNewFrame(renderLoop.bind(this));
        };

        BABYLON.Tools.QueueNewFrame(renderLoop.bind(this));

        let alpha = 0;
        sphere.scaling.x = 7.0;
        sphere.scaling.y = 7.0;
        sphere.scaling.z = 7.0;
        this._scene.beforeRender = function() {
            sphere.rotation.y = alpha;
            alpha += 0.01;
        };
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }
}

export default EarthGame;
