console.log("Двигун гри запущено.");


let currentScene = null;

let currentStep = 0;

let typing = false;

let typingTimer;



function startScene(sceneName){


    const scene = scenes[sceneName];


    if(!scene){

        console.error(
            "Сцена не знайдена:",
            sceneName
        );

        return;

    }


    currentScene = scene;

    currentStep = 0;


    showStep();


}




function showStep(){


    clearInterval(typingTimer);



    const step =
    currentScene.steps[currentStep];



    app.innerHTML = `


    <div class="screen">


        <div id="background"></div>



        <div id="dialogue-box">


            ${
            step.name
            ?
            `<div class="speaker">
            ${step.name}
            </div>`
            :
            ""
            }



            <div id="dialogue">

            </div>



        </div>



        <button class="game-button" onclick="nextStep()">

        Далі

        </button>



    </div>


    `;



    document
    .getElementById("background")
    .style.backgroundImage =

    `url("${step.background}")`;



    typeText(step.text);



}




function typeText(text){


    const box =
    document.getElementById("dialogue");


    box.innerHTML="";


    let index=0;


    typing=true;



    typingTimer=setInterval(()=>{


        box.innerHTML += text[index];


        index++;



        if(index>=text.length){


            clearInterval(typingTimer);


            typing=false;


        }



    },35);



}




function nextStep(){


    if(typing){


        clearInterval(typingTimer);


        document.getElementById("dialogue").innerHTML =

        currentScene.steps[currentStep].text;


        typing=false;


        return;


    }



    currentStep++;



    if(currentStep < currentScene.steps.length){


        showStep();


    }

    else{


        showMenu();


    }


}
