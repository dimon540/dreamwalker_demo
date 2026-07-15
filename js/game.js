// =========================
// GAME ENGINE
// =========================

console.log("Двигун гри запущено.");


let currentScene = null;

let currentStep = 0;

let typing = false;

let typingTimer;


// Аудіо

let sceneMusic = null;

let citySound = null;



// =========================
// START SCENE
// =========================

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



    playSceneAudio(sceneName);



    showStep();


}





// =========================
// SHOW STEP
// =========================

function showStep(){


    clearInterval(typingTimer);



    const step =
    currentScene.steps[currentStep];



   app.innerHTML = `
<div class="screen screen-intro">


    <div class="screen">


        <div id="background"></div>



        <div id="dialogue-box">


            ${
                step.name
                ?
                `
                <div class="speaker">
                    ${step.name}
                </div>
                `
                :
                ""
            }



            <div id="dialogue"></div>



        </div>



        <button
        class="game-button"
        onclick="nextStep()">

            Далі

        </button>



    </div>


    `;



    const bg =
    document.getElementById("background");



    bg.classList.remove(

        "background-hide",

        "background-show",

        "camera-close",

        "camera-far"

    );



    bg.classList.add(
        "background-hide"
    );



    setTimeout(()=>{


        bg.style.backgroundImage =

        `url("${step.background}")`;



        if(step.camera === "close"){


            bg.classList.add(
                "camera-close"
            );


        }



        if(step.camera === "far"){


            bg.classList.add(
                "camera-far"
            );


        }



        bg.classList.remove(
            "background-hide"
        );


        bg.classList.add(
            "background-show"
        );



    },400);



    if(currentStep === 0){


    setTimeout(()=>{

        typeText(step.text);

    },1800);


}

else{


    typeText(step.text);


}


}





// =========================
// TEXT TYPING
// =========================

function typeText(text){


    const box =
    document.getElementById("dialogue");



    box.innerHTML = "";



    let index = 0;



    typing = true;



    typingTimer = setInterval(()=>{


        box.innerHTML += text[index];


        index++;



        if(index >= text.length){


            clearInterval(typingTimer);


            typing = false;


        }



    },35);



}





// =========================
// NEXT BUTTON
// =========================

function nextStep(){



    if(typing){


        clearInterval(typingTimer);



        document.getElementById("dialogue").innerHTML =

        currentScene.steps[currentStep].text;



        typing = false;


        return;


    }



    currentStep++;



    if(currentStep < currentScene.steps.length){


        showStep();


    }

    else{


        stopSceneAudio();


        showMenu();


    }


}





// =========================
// AUDIO SYSTEM
// =========================

function playSceneAudio(sceneName){


    stopSceneAudio();



    if(sceneName === "scene1"){



        // музика

        sceneMusic = new Audio(

            "assets/music/scene1.mp3"

        );


        sceneMusic.loop = true;


        sceneMusic.volume = 0.7;



        // звук міста

        citySound = new Audio(

            "assets/sounds/city.mp3"

        );


        citySound.loop = true;


        citySound.volume = 0.25;



        sceneMusic.play()

        .then(()=>{

            console.log(
                "Музика сцени запущена"
            );

        })

        .catch(error=>{

            console.log(
                "Музика заблокована браузером",
                error
            );

        });



        citySound.play()

        .then(()=>{

            console.log(
                "Звук міста запущений"
            );

        })

        .catch(error=>{

            console.log(
                "Звук міста заблокований",
                error
            );

        });



    }


}




// =========================
// STOP AUDIO
// =========================

function stopSceneAudio(){



    if(sceneMusic){


        sceneMusic.pause();


        sceneMusic.currentTime = 0;


    }



    if(citySound){


        citySound.pause();


        citySound.currentTime = 0;


    }



}
