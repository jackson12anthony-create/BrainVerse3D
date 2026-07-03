const canvas = document.getElementById("renderCanvas");
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    const scene = new BABYLON.Scene(engine);

    // Sky color
    scene.clearColor = new BABYLON.Color4(0.53, 0.81, 0.98, 1);

    // Camera
    const camera = new BABYLON.ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 3,
        25,
        new BABYLON.Vector3(0, 2, 0),
        scene
    );
    camera.attachControl(canvas, true);

    // Light
    new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    // Ground
    const ground = BABYLON.MeshBuilder.CreateGround(
        "ground",
        { width: 60, height: 60 },
        scene
    );

    const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
    groundMat.diffuseColor = new BABYLON.Color3(0.2, 0.8, 0.2);
    ground.material = groundMat;

    // Player
    const player = BABYLON.MeshBuilder.CreateBox(
        "player",
        { size: 2 },
        scene
    );
    player.position.y = 1;

    const playerMat = new BABYLON.StandardMaterial("playerMat", scene);
    playerMat.diffuseColor = new BABYLON.Color3(0, 0, 1);
    player.material = playerMat;

    // Coins
    for (let i = 0; i < 5; i++) {
        const coin = BABYLON.MeshBuilder.CreateCylinder(
            "coin" + i,
            {
                diameter: 1,
                height: 0.2
            },
            scene
        );

        coin.position.x = (Math.random() - 0.5) * 40;
        coin.position.z = (Math.random() - 0.5) * 40;
        coin.position.y = 1;

        const coinMat = new BABYLON.StandardMaterial("coinMat" + i, scene);
        coinMat.diffuseColor = new BABYLON.Color3(1, 0.84, 0);
        coin.material = coinMat;
    }

    return scene;
}

let scene;

document.getElementById("startBtn").onclick = () => {
    document.getElementById("menu").style.display = "none";
    canvas.style.display = "block";

    scene = createScene();

    engine.runRenderLoop(() => {
        scene.render();
    });
};

window.addEventListener("resize", () => {
    engine.resize();
});
const engine = new BABYLON.Engine(canvas, true);

const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    // Camera
    const camera = new BABYLON.ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 3,
        20,
        new BABYLON.Vector3(0, 2, 0),
        scene
    );
    camera.attachControl(canvas, true);

    // Light
    const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    // Ground
    const ground = BABYLON.MeshBuilder.CreateGround(
        "ground",
        { width: 40, height: 40 },
        scene
    );

    // Player (temporary cube)
    const player = BABYLON.MeshBuilder.CreateBox(
        "player",
        { size: 2 },
        scene
    );
    player.position.y = 1;

    return scene;
};

let scene;

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    canvas.style.display = "block";

    scene = createScene();

    engine.runRenderLoop(() => {
        scene.render();
    });
});

window.addEventListener("resize", () => {
    engine.resize();
});
