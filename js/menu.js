const app = document.getElementById("app");


app.innerHTML = `

<div class="menu">

<h1 class="logo">
Dreamwalker
</h1>


<div class="menu-buttons">

<button id="newGame">
Нова гра
</button>


<button id="continue">
Продовжити
</button>


<button id="chapters">
Розділи
</button>


<button id="saves">
Збереження
</button>


<button id="settings">
Налаштування
</button>


<button id="achievements">
Досягнення
</button>


<button id="gallery">
Галерея
</button>


<button id="authors">
Про авторів
</button>


<button id="exit">
Вийти
</button>

</div>

</div>

`;



// кнопка нової гри

document
.getElementById("newGame")
.onclick = function(){

    alert("Початок нової гри");

};



// продовжити

document
.getElementById("continue")
.onclick = function(){

    alert("Поки що немає збережень");

};



// розділи

document
.getElementById("chapters")
.onclick = function(){

    alert("Розділи будуть додані");

};



// збереження

document
.getElementById("saves")
.onclick = function(){

    alert("Система збережень ще розробляється");

};



// налаштування

document
.getElementById("settings")
.onclick = function(){

    alert("Налаштування");

};



// досягнення

document
.getElementById("achievements")
.onclick = function(){

    alert("Досягнення");

};



// галерея

document
.getElementById("gallery")
.onclick = function(){

    alert("Галерея");

};



// автори

document
.getElementById("authors")
.onclick = function(){

    alert("Dreamwalker\nСтворено з любов'ю");

};



// вихід

document
.getElementById("exit")
.onclick = function(){

    alert("Дякуємо за гру!");

};
