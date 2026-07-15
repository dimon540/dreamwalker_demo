console.log("Двигун гри запущено.");


let currentScene = null;

let currentStep = 0;



function startScene(sceneName){


    const scene = scenes[sceneName];


    if(!scene){

        console.error("Сцена не знайдена:", sceneName);

        return;

    }


    currentScene = scene;

    currentStep = 0;


    showStep();


}





function showStep(){


    const step = currentScene.steps[currentStep];


    app.innerHTML = `


    <div class="screen">


        <div id="background"></div>



        <div id="dialogue">

            ${step.text}

        </div>



        <button class="game-button" onclick="nextStep()">

            Далі

        </button>


    </div>


    `;



    document.getElementById("background").style.backgroundImage =

    `url("${step.background}")`;



}




function nextStep(){


    currentStep++;


    if(currentStep < currentScene.steps.length){

        showStep();

    }

    else {


        showMenu();


    }


}
