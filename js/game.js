// =========================
// GAME ENGINE
// =========================

console.log("Двигун гри запущено.");


let currentScene = null;

let currentStep = 0;

let typing = false;

let typingTimer;



// =========================
// ЗАПУСК СЦЕНИ
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


    showStep();

}



// =========================
// ПОКАЗ КАДРУ
// =========================

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
                `
                <div class="speaker">
                    ${step.name}
                </div>
                `
                :
                ""
            }



            <div id="dialogue">

            </div>



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



    // прибираємо старі ефекти

    bg.classList.remove(
        "background-hide",
        "background-show",
        "camera-close",
        "camera-far"
    );



    // затемнення перед зміною

    bg.classList.add(
        "background-hide"
    );



    setTimeout(()=>{


        bg.style.backgroundImage =

        `url("${step.background}")`;



        // камера

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



    typeText(step.text);



}




// =========================
// ДРУК ТЕКСТУ
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
// КНОПКА ДАЛІ
// =========================

function nextStep(){



    // якщо текст друкується
    // показати одразу весь

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


        showMenu();


    }


}
