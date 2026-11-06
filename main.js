
const themeBtn = document.querySelector("#themeBtn");

// Получаем сохранённую тему
const savedTheme = localStorage.getItem("theme");

// Восстанавливаем тему после открытия страницы
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerText = "☀️ Светлая тема";
}

// Переключаем тему при нажатии
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeBtn.innerText = "☀️ Светлая тема";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.innerText = "🌙 Тёмная тема";
    }

});
