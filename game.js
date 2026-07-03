const canvas = document.getElementById("renderCanvas");

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
