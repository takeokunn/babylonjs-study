import * as BABYLON from "babylonjs";

class RenderingGame {
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
        const camera = new BABYLON.ArcRotateCamera(
            "Camera",
            -Math.PI / 4,
            Math.PI / 2.5,
            200,
            BABYLON.Vector3.Zero(),
            this._scene
        );
        camera.attachControl(this._canvas, true);
        camera.minZ = 0.1;

        // Light
        new BABYLON.PointLight("point", new BABYLON.Vector3(0, 40, 0), this._scene);

        // Environment Texture
        const hdrTexture = new BABYLON.HDRCubeTexture("assets/GravelPlaza_REF.hdr", this._scene, 512);

        // Skybox
        const hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, this._scene);
        const hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", this._scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
        hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        hdrSkyboxMaterial.microSurface = 1.0;
        hdrSkyboxMaterial.cameraExposure = 0.6;
        hdrSkyboxMaterial.cameraContrast = 1.6;
        hdrSkyboxMaterial.disableLighting = true;
        hdrSkybox.material = hdrSkyboxMaterial;
        hdrSkybox.infiniteDistance = true;

        // Create mesh
        const woodbox = BABYLON.MeshBuilder.CreateBox(
            "plane",
            {
                width: 40,
                height: 50,
                depth: 65
            },
            this._scene
        );

        const wood = new BABYLON.PBRMaterial("wood", this._scene);
        wood.reflectionTexture = hdrTexture;
        wood.directIntensity = 1.5;
        wood.environmentIntensity = 0.5;
        wood.specularIntensity = 0.3;
        wood.cameraExposure = 0.9;
        wood.cameraContrast = 1.6;

        wood.reflectivityTexture = new BABYLON.Texture("assets/reflectivity.jpg", this._scene);
        wood.useMicroSurfaceFromReflectivityMapAlpha = true;

        wood.albedoColor = BABYLON.Color3.White();
        wood.albedoTexture = new BABYLON.Texture("assets/albedo.jpg", this._scene);
        woodbox.material = wood;

        // Create rendering pipeline
        const pipeline = new BABYLON.StandardRenderingPipeline("standard", this._scene, 1.0 / devicePixelRatio, null, [
            camera
        ]);
        pipeline.lensTexture = new BABYLON.Texture("assets/lens_dirt.jpg", this._scene);
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }

    public stopRender(): void {
        this._engine.stopRenderLoop();
    }
}

export default RenderingGame;
