const app = document.getElementById("app");


// ГОЛОВНЕ МЕНЮ

function showMenu() {

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



// НОВА ГРА

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



// ПРОДОВЖИТИ

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



// РОЗДІЛИ

function showChapters(){

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



// ЗБЕРЕЖЕННЯ

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



// НАЛАШТУВАННЯ

function showSettings(){

app.innerHTML = `

<div class="menu">


<h1 class="logo">
Налаштування
</h1>



<div class="settings-panel">


<div class="setting">

<label>
🎵 Музика
</label>

<input type="range" value="70">

</div>



<div class="setting">

<label>
🔊 Звуки
</label>

<input type="range" value="80">

</div>



<div class="setting">

<label>
💬 Швидкість тексту
</label>

<input type="range" value="50">

</div>



<div class="setting">

<label>
🌐 Мова
</label>


<select>

<option>
Українська
</option>

<option>
English
</option>


</select>


</div>



<div class="setting">

<label>

<input type="checkbox" checked>

Автозбереження

</label>


</div>




<button onclick="showMenu()">

Назад

</button>



</div>


</div>

`;

}



// ГАЛЕРЕЯ

function showGallery(){

app.innerHTML = `

<div class="menu">


<h1 class="logo">
Галерея
</h1>



<div class="menu-buttons">


<p>
Галерея буде відкриватися під час проходження
</p>


<button onclick="showMenu()">
Назад
</button>


</div>


</div>

`;

}



// ПРО ГРУ

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
