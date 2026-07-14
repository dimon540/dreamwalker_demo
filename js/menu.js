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


<button onclick="showMenu()">
Назад
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


<button onclick="showMenu()">
Назад
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



<div class="chapter-card open">


<h2>
Пролог
</h2>


<p>
Початок історії Dreamwalker
</p>


<button>
Почати
</button>


</div>





<div class="chapter-card locked">


<h2>
🔒 Розділ 1
</h2>


<p>
Відкрийте після завершення прологу
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

Назад

</button>



</div>


</div>

`;

}


app.innerHTML = `

<div class="menu">


<h1 class="logo">
Розділи
</h1>



<div class="menu-buttons">


<button>
Розділ 1
</button>


<button>
Розділ 2
</button>


<button>
Розділ 3
</button>


<button onclick="showMenu()">
Назад
</button>


</div>


</div>

`;

}




// =========================
// ЗБЕРЕЖЕННЯ
// =========================

function showSaves(){


app.innerHTML = `

<div class="menu">


<h1 class="logo">
Збереження
</h1>



<div class="menu-buttons">


<button>
Слот 1
</button>


<button>
Слот 2
</button>


<button>
Слот 3
</button>


<button onclick="showMenu()">
Назад
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



<div class="setting">

<label id="musicValue">
🎵 Музика: ${settings.music}%
</label>


<input 
id="music"
type="range"
min="0"
max="100"
value="${settings.music}"
>


</div>




<div class="setting">

<label id="soundValue">
🔊 Звуки: ${settings.sound}%
</label>


<input 
id="sound"
type="range"
min="0"
max="100"
value="${settings.sound}"
>


</div>




<div class="setting">

<label id="textValue">
💬 Швидкість тексту: ${settings.textSpeed}
</label>


<input 
id="textSpeed"
type="range"
min="1"
max="10"
value="${settings.textSpeed}"
>


</div>




<div class="setting">


<label>
🌐 Мова
</label>


<select id="language">


<option ${settings.language === "Українська" ? "selected" : ""}>
Українська
</option>


<option ${settings.language === "English" ? "selected" : ""}>
English
</option>


</select>


</div>




<div class="setting">


<label>

<input 
id="autosave"
type="checkbox"
${settings.autosave ? "checked" : ""}
>

Автозбереження

</label>


</div>




<button onclick="applySettings()">
Зберегти
</button>



<button onclick="resetSettings()">
Скинути
</button>



<button onclick="showMenu()">
Назад
</button>



</div>


</div>

`;



// живі значення


document.getElementById("music").oninput = function(){

document.getElementById("musicValue").innerHTML =
"🎵 Музика: " + this.value + "%";

};



document.getElementById("sound").oninput = function(){

document.getElementById("soundValue").innerHTML =
"🔊 Звуки: " + this.value + "%";

};



document.getElementById("textSpeed").oninput = function(){

document.getElementById("textValue").innerHTML =
"💬 Швидкість тексту: " + this.value;

};



}




// =========================
// ЗБЕРЕГТИ НАЛАШТУВАННЯ
// =========================

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
// СКИНУТИ НАЛАШТУВАННЯ
// =========================

function resetSettings(){


settings = {

    music:70,
    sound:80,
    textSpeed:5,
    language:"Українська",
    autosave:true

};


saveSettings();


showSettings();


}




// =========================
// ГАЛЕРЕЯ
// =========================

function showGallery(){


app.innerHTML = `

<div class="menu">

<h1 class="logo">
Галерея
</h1>


<div class="menu-buttons">

<p>
Галерея відкривається під час проходження
</p>


<button onclick="showMenu()">
Назад
</button>


</div>


</div>

`;

}




// =========================
// ПРО ГРУ
// =========================

function showAbout(){


app.innerHTML = `

<div class="menu">

<h1 class="logo">
Dreamwalker
</h1>


<div class="menu-buttons">


<p>
Dreamwalker — візуальна новела
про мрії, страхи та шлях до мети.
</p>


<button onclick="showMenu()">
Назад
</button>


</div>


</div>

`;

}




// запуск

showMenu();
