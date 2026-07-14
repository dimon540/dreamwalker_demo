const app = document.getElementById("app");


// =========================
// НАЛАШТУВАННЯ
// =========================

let settings = JSON.parse(localStorage.getItem("dreamwalkerSettings")) || {

    music:70,
    sound:80,
    textSpeed:5,
    language:"Українська",
    autosave:true

};


function saveSettings(){

    localStorage.setItem(
        "dreamwalkerSettings",
        JSON.stringify(settings)
    );

}



// =========================
// ГОЛОВНЕ МЕНЮ
// =========================

function showMenu(){

app.innerHTML = `

<div class="menu">

<h1 class="logo">
Dreamwalker
</h1>


<div class="menu-buttons">


<button type="button" onclick="newGame()">
Нова гра
</button>


<button type="button" onclick="continueGame()">
Продовжити
</button>


<button type="button" onclick="showChapters()">
Розділи
</button>


<button type="button" onclick="showSaves()">
Збереження
</button>


<button type="button" onclick="showSettings()">
Налаштування
</button>


<button type="button" onclick="showGallery()">
Галерея
</button>


<button type="button" onclick="showAbout()">
Про гру
</button>


</div>

</div>

`;

}




// =========================
// НОВА ГРА
// =========================

function newGame(){

app.innerHTML = `

<div class="menu">

<h1 class="logo">
Нова гра
</h1>


<div class="menu-buttons">

<p>
Початок історії Dreamwalker
</p>


<button type="button" onclick="showMenu()">
← Назад
</button>


</div>

</div>

`;

}




// =========================
// ПРОДОВЖИТИ
// =========================

function continueGame(){

app.innerHTML = `

<div class="menu">

<h1 class="logo">
Продовжити
</h1>


<div class="menu-buttons">

<p>
Збережень поки немає
</p>


<button type="button" onclick="showMenu()">
← Назад
</button>


</div>

</div>

`;

}




// =========================
// РОЗДІЛИ
// =========================

function showChapters(){


app.innerHTML = `

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
Початок історії Dreamwalker
</p>


<button 
type="button"
onclick="newGame()">

▶ Почати

</button>


</div>





<div class="chapter-card locked">

<h2>
🔒 Розділ 1
</h2>


<p>
Завершіть пролог
</p>


</div>





<div class="chapter-card locked">

<h2>
🔒 Розділ 2
</h2>


<p>
Недоступно
</p>


</div>





<div class="chapter-card locked">

<h2>
🔒 Розділ 3
</h2>


<p>
Недоступно
</p>


</div>




<button 
type="button"
onclick="showMenu()">

← Назад

</button>



</div>


</div>

`;

}




// =========================
// ЗБЕРЕЖЕННЯ
// =========================

function showSaves(){

app.innerHTML=`

<div class="menu">

<h1 class="logo">
Збереження
</h1>


<div class="menu-buttons">

<p>
Слотів поки немає
</p>


<button type="button" onclick="showMenu()">
← Назад
</button>


</div>


</div>

`;

}



// =========================
// НАЛАШТУВАННЯ
// =========================

function showSettings(){

app.innerHTML = `

<div class="menu">


<h1 class="logo">
Налаштування
</h1>


<div class="settings-panel">


<label id="musicValue">
🎵 Музика: ${settings.music}%
</label>


<input id="music" type="range" min="0" max="100" value="${settings.music}">



<label id="soundValue">
🔊 Звуки: ${settings.sound}%
</label>


<input id="sound" type="range" min="0" max="100" value="${settings.sound}">



<label id="textValue">
💬 Швидкість тексту: ${settings.textSpeed}
</label>


<input id="textSpeed" type="range" min="1" max="10" value="${settings.textSpeed}">



<button type="button" onclick="applySettings()">
Зберегти
</button>


<button type="button" onclick="showMenu()">
← Назад
</button>


</div>


</div>

`;



document.getElementById("music").oninput=function(){

document.getElementById("musicValue").innerHTML =
"🎵 Музика: "+this.value+"%";

};


document.getElementById("sound").oninput=function(){

document.getElementById("soundValue").innerHTML =
"🔊 Звуки: "+this.value+"%";

};


document.getElementById("textSpeed").oninput=function(){

document.getElementById("textValue").innerHTML =
"💬 Швидкість тексту: "+this.value;

};


}




function applySettings(){

settings.music =
Number(document.getElementById("music").value);


settings.sound =
Number(document.getElementById("sound").value);


settings.textSpeed =
Number(document.getElementById("textSpeed").value);


saveSettings();


showMenu();

}




// =========================
// ІНШІ МЕНЮ
// =========================

function showGallery(){

app.innerHTML = `

<div class="menu">

<h1 class="logo">
Галерея
</h1>

<button class="game-button" type="button" onclick="showMenu()">
← Назад
</button>

</div>

`;

}



function showAbout(){

app.innerHTML = `

<div class="menu">

<h1 class="logo">
Dreamwalker
</h1>


<p>
Візуальна новела про мрії,
страхи та шлях до мети.
</p>


<button class="game-button" type="button" onclick="showMenu()">
← Назад
</button>

</div>

`;

}




showMenu();
