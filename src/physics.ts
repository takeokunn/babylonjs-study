import * as BABYLON from "babylonjs";
import * as LOADERS from "babylonjs-loaders";

class PhysicsGame {
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
        const camera = new BABYLON.ArcRotateCamera("Camera", 0.86, 1.37, 250, BABYLON.Vector3.Zero(), this._scene);

        camera.attachControl(this._canvas);
        camera.maxZ = 5000;
        camera.lowerRadiusLimit = 120;
        camera.upperRadiusLimit = 430;
        camera.lowerBetaLimit = 0.75;
        camera.upperBetaLimit = 1.58;

        new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), this._scene);

        const randomNumber = (min :number, max :number) => {
            if (min == max) return min;
            const random = Math.random();
            return random * (max - min) + min;
        };

        const mat = new BABYLON.StandardMaterial("ground", this._scene);
        const t = new BABYLON.Texture("assets/gr.jpg", this._scene);
        t.uScale = t.vScale = 10;
        mat.diffuseTexture = t;
        mat.specularColor = BABYLON.Color3.Black();

        const g = BABYLON.Mesh.CreateBox("ground", 200, this._scene);
        g.position.y = -20;
        g.position.x = 0;
        g.scaling.y = 0.01;
        g.material = mat;

        this._scene.enablePhysics(new BABYLON.Vector3(0, -10, 0), new BABYLON.OimoJSPlugin());

        g.physicsImpostor = new BABYLON.PhysicsImpostor(
            g,
            BABYLON.PhysicsImpostor.BoxImpostor,
            {
                mass: 0,
                restitution: 0.9
            },
            this._scene
        );

        const getPosition = y => new BABYLON.Vector3(randomNumber(-100, 100), y, randomNumber(-100, 100));

        const allspheres = [];
        let y = 50;
        const max = 50;

        for (let index = 0; index < max; index++) {
            const redSphere = BABYLON.Mesh.CreateSphere("s" + index, 32, 8, this._scene);
            redSphere.position = getPosition(y);
            redSphere.physicsImpostor = new BABYLON.PhysicsImpostor(
                redSphere,
                BABYLON.PhysicsImpostor.SphereImpostor,
                {
                    mass: 1,
                    restitution: 0.9
                },
                this._scene
            );

            redSphere.physicsImpostor.applyImpulse(new BABYLON.Vector3(1, 2, -1), new BABYLON.Vector3(1, 2, 0));

            const redMat = new BABYLON.StandardMaterial("ground", this._scene);
            redMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            redMat.emissiveColor = BABYLON.Color3.Red();
            redSphere.material = redMat;

            // push all spheres in the allspheres variable
            allspheres.push(redSphere);
            y += 10; // increment height
        }
        this._scene.registerBeforeRender(function() {
            allspheres.forEach(obj => {
                // if the sphers falls down its updated again over here
                // If object falls
                if (obj.position.y < -100) {
                    obj.position = getPosition(200);
                }
            });
        });
    }

    public doRender(): void {
        this._engine.runRenderLoop((): void => this._scene.render());
        window.addEventListener("resize", (): void => this._engine.resize());
    }
}

export default PhysicsGame;
