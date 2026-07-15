function loadScene(sceneName) {
    const scene = scenes[sceneName];

    document.getElementById("background").style.backgroundImage =
        `url(${scene.background})`;

    document.getElementById("dialogue").innerText =
        scene.text;
}

function startGame() {
    loadScene("scene1");
}
