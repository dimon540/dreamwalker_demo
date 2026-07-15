const app = document.getElementById("app");


// =========================
// PLAYER NAME
// =========================

let player = JSON.parse(
    localStorage.getItem("dreamwalkerPlayer")
)
||
{
    name:"Єва"
};



function savePlayer(){

    localStorage.setItem(
        "dreamwalkerPlayer",
        JSON.stringify(player)
    );

}



// =========================
// SETTINGS
// =========================

let settings = JSON.parse(
    localStorage.getItem("dreamwalkerSettings")
) || {

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
// MAIN MENU
// =========================

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



<button onclick="showSaves()">
Збереження
</button>



<button onclick="showSettings()">
Налаштування
</button>



<button onclick="showGallery()">
Галерея
</button>



<button onclick="showAbout()">
Про гру
</button>



</div>


</div>

`;

}



// =========================
// NEW GAME
// =========================

function newGame(){

    showNameCreate();

}



// =========================
// NAME CREATION
// =========================

function showNameCreate(){


app.innerHTML = `


<div class="menu name-screen">


<h1 class="logo">
Як тебе звати?
</h1>



<div class="settings-panel">


<p>
Ім'я головної героїні
</p>



<input

id="playerName"

class="name-input"

value="${player.name}"

maxlength="15"


>



<button 
class="game-button"

onclick="confirmName()">

Почати

</button>



</div>


</div>


`;

}




function confirmName(){


let name =

document.getElementById("playerName")
.value
.trim();



if(name === ""){

    name="Єва";

}



player.name=name;


savePlayer();



startScene("scene1");


}





// =========================
// CONTINUE
// =========================

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



// =========================
// CHAPTERS
// =========================

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
Незнайоме місто
</p>


<button onclick="newGame()">
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



<button onclick="showMenu()">
← Назад
</button>



</div>


</div>

`;

}



// =========================
// SAVES
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



<button onclick="showMenu()">
← Назад
</button>



</div>


</div>

`;

}



// =========================
// SETTINGS
// =========================

function showSettings(){


app.innerHTML=`

<div class="menu">


<h1 class="logo">
Налаштування
</h1>



<div class="settings-panel">


<label id="musicLabel">
🎵 Музика: ${settings.music}%
</label>


<input 
id="music"
type="range"
min="0"
max="100"
value="${settings.music}"
>



<label id="soundLabel">
🔊 Звуки: ${settings.sound}%
</label>


<input 
id="sound"
type="range"
min="0"
max="100"
value="${settings.sound}"
>



<label id="textLabel">
💬 Швидкість тексту: ${settings.textSpeed}
</label>


<input 
id="textSpeed"
type="range"
min="1"
max="10"
value="${settings.textSpeed}"
>



<label>
🌐 Мова
</label>


<select id="language">

<option>
Українська
</option>

<option>
English
</option>

</select>



<label class="checkbox">

<input 
type="checkbox"
id="autosave"
${settings.autosave ? "checked":""}
>

Автозбереження

</label>



<button onclick="applySettings()">
Зберегти
</button>



<button onclick="showMenu()">
← Назад
</button>



</div>


</div>

`;



document.getElementById("music").oninput=function(){

document.getElementById("musicLabel").innerHTML =
"🎵 Музика: "+this.value+"%";

};



document.getElementById("sound").oninput=function(){

document.getElementById("soundLabel").innerHTML =
"🔊 Звуки: "+this.value+"%";

};



document.getElementById("textSpeed").oninput=function(){

document.getElementById("textLabel").innerHTML =
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


settings.language =
document.getElementById("language").value;


settings.autosave =
document.getElementById("autosave").checked;



saveSettings();


showMenu();


}



// =========================
// GALLERY
// =========================

function showGallery(){

app.innerHTML=`

<div class="menu">


<h1 class="logo">
Галерея
</h1>


<button class="game-button" onclick="showMenu()">
← Назад
</button>


</div>

`;

}



// =========================
// ABOUT
// =========================

function showAbout(){

app.innerHTML=`

<div class="menu">


<h1 class="logo">
DREAMWALKER
</h1>



<p>
Візуальна новела про мрії,
страхи та шлях до мети.
</p>



<button class="game-button" onclick="showMenu()">
← Назад
</button>



</div>

`;

}



// START

showMenu();
