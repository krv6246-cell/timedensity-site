// ====== MAIN SITE SCRIPT (NO FAQ LOGIC) ======

// Если на странице есть кнопки переключения языка — подключаем их
const ruBtn = document.getElementById("ru-btn");
const enBtn = document.getElementById("en-btn");

if (ruBtn && enBtn) {
    ruBtn.addEventListener("click", () => {
        document.documentElement.classList.remove("en");
        document.documentElement.classList.add("ru");
    });

    enBtn.addEventListener("click", () => {
        document.documentElement.classList.remove("ru");
        document.documentElement.classList.add("en");
    });
}