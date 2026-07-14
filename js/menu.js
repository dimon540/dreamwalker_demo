const app = document.getElementById("app");


// ГОЛОВНЕ МЕНЮ

function showMenu() {

app.innerHTML = `
<div class="screen">

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
</div>

`;
}



// НОВА ГРА

function newGame() {

app.innerHTML = `
<div class="screen">

<div class="menu">

<h1 class="logo">
Нова гра
</h1>


<div class="menu-buttons">


<p style="color:white;">
Початок історії Dreamwalker
</p>


<button onclick="showMenu()">
Назад
</button>


</div>

</div>
</div>

`;
}



// ПРОДОВЖИТИ

function continueGame() {

app.innerHTML = `
<div class="screen">

<div class="menu">

<h1 class="logo">
Продовжити
</h1>


<div class="menu-buttons">


<p style="color:white;">
Збережень поки немає
</p>


<button onclick="showMenu()">
Назад
</button>


</div>

</div>
</div>

`;

}



// РОЗДІЛИ

function showChapters() {

app.innerHTML = `
<div class="screen">

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
</div>

`;
}



// ЗБЕРЕЖЕННЯ

function showSaves() {

app.innerHTML = `
<div class="screen">

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
</div>

`;
}



// НАЛАШТУВАННЯ

function showSettings() {

app.innerHTML = `
<div class="screen">

<div class="menu">

<h1 class="logo">
Налаштування
</h1>


<div class="menu-buttons">


<button>
Гучність музики
</button>


<button>
Гучність звуків
</button>


<button>
Мова
</button>


<button onclick="showMenu()">
Назад
</button>


</div>

</div>
</div>

`;
}



// ГАЛЕРЕЯ

function showGallery() {

app.innerHTML = `
<div class="screen">

<div class="menu">

<h1 class="logo">
Галерея
</h1>


<div class="menu-buttons">


<p style="color:white;">
Відкривається під час проходження гри
</p>


<button onclick="showMenu()">
Назад
</button>


</div>

</div>
</div>

`;
}



// ПРО ГРУ

function showAbout() {

app.innerHTML = `
<div class="screen">
<div class="menu">

<h1 class="logo">
Dreamwalker
</h1>


<div class="menu-buttons">


<p style="color:white; max-width:400px; text-align:center;">
Dreamwalker — це візуальна новела
про мрії, страхи та шлях людини
до своєї мети.
</p>


<button onclick="showMenu()">
Назад
</button>


</div>

</div>
</div>

`;

}



// запуск меню

showMenu();
