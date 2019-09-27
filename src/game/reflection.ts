import * as BABYLON from "babylonjs";

class ReflectionGame {
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
        this._scene = new BABYLON.Scene(this._engine);
        const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), this._scene);
        const material = new BABYLON.StandardMaterial("kosh", this._scene);
        const sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 32, 5, this._scene);
        const light = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(-17.6, 18.8, -49.9), this._scene);

        camera.setPosition(new BABYLON.Vector3(-15, 3, 0));
        camera.attachControl(this._canvas, true);

        // Sphere1 material
        material.refractionTexture = new BABYLON.CubeTexture("assets/skybox/TropicalSunnyDay", this._scene);
        material.reflectionTexture = new BABYLON.CubeTexture("assets/skybox/TropicalSunnyDay", this._scene);
        material.diffuseColor = new BABYLON.Color3(0, 0, 0);
        material.invertRefractionY = false;
        material.indexOfRefraction = 0.98;
        material.specularPower = 128;
        sphere1.material = material;

        material.refractionFresnelParameters = new BABYLON.FresnelParameters();
        material.refractionFresnelParameters.power = 2;
        material.reflectionFresnelParameters = new BABYLON.FresnelParameters();
        material.reflectionFresnelParameters.power = 2;
        material.reflectionFresnelParameters.leftColor = BABYLON.Color3.Black();
        material.reflectionFresnelParameters.rightColor = BABYLON.Color3.White();

        // Skybox
        const skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, this._scene);
        const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this._scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skybox/TropicalSunnyDay", this._scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }

    public stopRender(): void {
        this._engine.stopRenderLoop();
    }
}

export default ReflectionGame;
