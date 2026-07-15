const app = document.getElementById("app");



let settings = JSON.parse(
localStorage.getItem("dreamwalkerSettings")
) || {

music:70,
sound:80,
textSpeed:5

};



function saveSettings(){

localStorage.setItem(
"dreamwalkerSettings",
JSON.stringify(settings)
);

}




function showMenu(){


app.innerHTML = `


<div class="menu">


<h1 class="logo">
DREAMWALKER
</h1>



<div class="menu-buttons">


<button onclick="newGame()">
Нова гра
</button>



<button onclick="continueGame()">
Продовжити
</button>



<button onclick="showChapters()">
Розділи
</button>



<button onclick="showSettings()">
Налаштування
</button>



</div>



</div>


`;



}





function newGame(){


startScene("scene1");


}





function continueGame(){


app.innerHTML=`

<div class="menu">

<h1 class="logo">
Продовжити
</h1>


<div class="menu-buttons">

<p>
Збережень поки немає
</p>


<button onclick="showMenu()">
← Назад
</button>


</div>

</div>

`;

}




function showChapters(){


app.innerHTML=`

<div class="menu">


<h1 class="logo">
Розділи
</h1>


<div class="chapters-panel">


<div class="chapter-card">


<h2>
🌙 Пролог
</h2>


<p>
Незнайомий місто
</p>


<button onclick="newGame()">
Почати
</button>


</div>



<button onclick="showMenu()">
← Назад
</button>


</div>


</div>

`;

}





function showSettings(){


app.innerHTML=`

<div class="menu">


<h1 class="logo">
Налаштування
</h1>



<div class="settings-panel">


<label>
🎵 Музика ${settings.music}%
</label>


<input 
type="range"
min="0"
max="100"
value="${settings.music}"
>


<label>
🔊 Звуки ${settings.sound}%
</label>


<input 
type="range"
min="0"
max="100"
value="${settings.sound}"
>



<button onclick="showMenu()">
← Назад
</button>


</div>


</div>

`;

}





showMenu();
