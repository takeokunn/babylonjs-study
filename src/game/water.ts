import * as BABYLON from "babylonjs";
import * as MATERIALS from "babylonjs-materials";

class WaterGame {
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

        // Camera
        const camera = new BABYLON.ArcRotateCamera(
            "Camera",
            (3 * Math.PI) / 2,
            Math.PI / 4,
            100,
            BABYLON.Vector3.Zero(),
            this._scene
        );
        camera.attachControl(this._canvas, true);

        // Light
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);

        // Skybox
        const skybox = BABYLON.Mesh.CreateBox("skyBox", 5000.0, this._scene);
        const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this._scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/skybox/TropicalSunnyDay", this._scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;

        // Water material
        const waterMaterial = new MATERIALS.WaterMaterial("waterMaterial", this._scene, new BABYLON.Vector2(512, 512));
        waterMaterial.bumpTexture = new BABYLON.Texture("assets/waterbump.png", this._scene);
        waterMaterial.windForce = -10;
        waterMaterial.waveHeight = 0.5;
        waterMaterial.bumpHeight = 0.1;
        waterMaterial.waveLength = 0.1;
        waterMaterial.waveSpeed = 50.0;
        waterMaterial.colorBlendFactor = 0;
        waterMaterial.windDirection = new BABYLON.Vector2(1, 1);
        waterMaterial.colorBlendFactor = 0;

        // Ground
        const groundTexture = new BABYLON.Texture("assets/sand.jpg", this._scene);
        groundTexture.vScale = groundTexture.uScale = 4.0;

        const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", this._scene);
        groundMaterial.diffuseTexture = groundTexture;

        const ground = BABYLON.Mesh.CreateGround("ground", 512, 512, 32, this._scene, false);
        ground.position.y = -1;
        ground.material = groundMaterial;

        // Water mesh
        const waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 512, 512, 32, this._scene, false);
        waterMesh.material = waterMaterial;

        // Sphere
        const sphereMaterial = new BABYLON.StandardMaterial("sphereMaterial", this._scene);
        sphereMaterial.diffuseTexture = new BABYLON.Texture("//www.babylonjs.com/assets/wood.jpg", this._scene);

        const sphere = BABYLON.Mesh.CreateSphere("sphere", 32, 24, this._scene);
        sphere.position.y = 20;
        sphere.material = sphereMaterial;

        // Configure water material
        waterMaterial.addToRenderList(ground);
        waterMaterial.addToRenderList(skybox);
        waterMaterial.addToRenderList(sphere);
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }

    public stopRender(): void {
        this._engine.stopRenderLoop();
    }
}

export default WaterGame;
