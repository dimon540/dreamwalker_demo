console.log("Двигун гри запущено.");



function startScene(sceneName){


const scene = scenes[sceneName];



if(!scene){

console.error("Сцена не знайдена:",sceneName);

return;

}



app.innerHTML=`


<div class="screen">


<div id="background"></div>


<div id="dialogue">

${scene.text}

</div>



<button class="game-button" onclick="showMenu()">

Далі

</button>


</div>


`;



document.getElementById("background").style.backgroundImage =
`url('${scene.background}')`;



}
