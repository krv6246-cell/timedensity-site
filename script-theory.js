// ====== LANGUAGE SWITCHER FOR THEORY PAGE ======

document.getElementById("ru-btn").addEventListener("click", () => {
    document.documentElement.classList.remove("en");
    document.documentElement.classList.add("ru");
});

document.getElementById("en-btn").addEventListener("click", () => {
    document.documentElement.classList.remove("ru");
    document.documentElement.classList.add("en");
});