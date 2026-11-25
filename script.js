
const btnChange = document.getElementById("btnChange");
const sarlavha = document.getElementById("Sarlavha");

const texts = [
    "Salom, Dunyo!",
    "Zo'r dizayn!",
    

];

let textIndex = 0;

btnChange.addEventListener("click", function () {
    textIndex = (textIndex + 1) % texts.length;
    sarlavha.textContent = texts[textIndex];
});


const darkModeBtn = document.getElementById("darkModeBtn");

try {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode-active");
    }
} catch (error) {}

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode-active");

    try {
        const mode = document.body.classList.contains("dark-mode-active")
            ? "enabled"
            : "disabled";

        localStorage.setItem("darkMode", mode);
    } catch (error) {}
});

const passwordInput = document.getElementById("passwordInput");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Yashirish";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Ko'rsatish";
    }
});


let son = 0;

const numberSpan = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("resetCounter");

function updateCounter() {
    numberSpan.textContent = son;

    numberSpan.classList.remove("pulse");
    void numberSpan.offsetWidth;
    numberSpan.classList.add("pulse");
}

plusBtn.addEventListener("click", function () {
    son++;
    updateCounter();
});

minusBtn.addEventListener("click", function () {
    son--;
    updateCounter();
});

resetBtn.addEventListener("click", function () {
    son = 0;
    updateCounter();
});