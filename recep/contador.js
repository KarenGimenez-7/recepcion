// CONTADOR REGRESIVO
const targetDate = new Date("December 11, 2026 21:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ---- ELEMENTOS INFORMÁTICOS FLOTANTES EN FONDO ---- //
document.addEventListener("DOMContentLoaded", () => {
    const techSymbols = [
        "</>", "{ }", "01", "10", "CPU", "[ ]", "++", "==;", "int", "sys", "db", "0", "1", "404"
    ];

    const totalSymbols = 20;

    for (let i = 0; i < totalSymbols; i++) {
        createTechElement();
    }

    function createTechElement() {
        const el = document.createElement("div");
        el.classList.add("tech-float");
        
        el.innerText = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        el.style.left = Math.random() * 100 + "vw";
        el.style.fontSize = Math.random() * 8 + 12 + "px";
        
        const duration = Math.random() * 10 + 10;
        el.style.animationDuration = duration + "s";
        
        const delay = Math.random() * 10;
        el.style.animationDelay = delay + "s";

        document.body.appendChild(el);

        el.addEventListener("animationiteration", () => {
            el.style.left = Math.random() * 100 + "vw";
        });
    }
});

// ---- Carrusel manual simple ---- //
const fotos = document.querySelector(".fotos");
if (fotos) {
    const slides = fotos.querySelectorAll("img");
    let index = 0;
    const delay = 4000; 

    setInterval(() => {
        index++;
        if (index >= slides.length / 2) {
            index = 0;
            fotos.style.transition = "none";
            fotos.style.transform = `translateX(0)`;
            setTimeout(() => {
                fotos.style.transition = "transform 0.6s ease-in-out";
            }, 50);
        } else {
            fotos.style.transition = "transform 0.6s ease-in-out";
            fotos.style.transform = `translateX(-${index * 100}%)`;
        }
    }, delay);
}
