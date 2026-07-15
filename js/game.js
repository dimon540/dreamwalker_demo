// =========================
// GAME ENGINE
// =========================

console.log("Двигун гри запущено.");


// запуск сцени

function startScene(sceneName) {


    const scene = scenes[sceneName];


    if (!scene) {

        console.error("Сцена не знайдена:", sceneName);

        return;

    }



    app.innerHTML = `

    <div class="screen">


        <div id="background"></div>


        <div id="dialogue">

            ${scene.text}

        </div>



        <button class="game-button" onclick="nextScene('${scene.next}')">

            Далі

        </button>


    </div>


    `;



    document.getElementById("background").style.backgroundImage =
    `url('${scene.background}')`;

}



// наступна сцена

function nextScene(sceneName) {


    if(sceneName){

        startScene(sceneName);

    }


}
