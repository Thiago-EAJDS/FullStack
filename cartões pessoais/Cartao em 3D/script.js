document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const cartao = document.getElementById("cartao");
    const body = document.body;
    const info = document.querySelector(".info");
    const icon = document.getElementById("icon");
    let isFlipped = true;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        cartao.classList.toggle("dark-mode");
        info.classList.toggle("dark-mode-text");
        darkModeToggle.classList.toggle("dark-mode-button");
        
        if (body.classList.contains("dark-mode")) {
            icon.textContent = "☀️";
        } else {
            icon.textContent = "🌙";
        }
    });

    cartao.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cartao.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    cartao.addEventListener("mouseleave", () => {
        cartao.style.transform = "rotateY(0deg) rotateX(0deg)";
    });

    cartao.addEventListener("click", () => {
        if (!isFlipped) {
            cartao.style.transform += " rotateY(180deg)";
        } else {
            cartao.style.transform = "rotateY(0deg) rotateX(0deg)";
        }
        isFlipped = !isFlipped;
    });
});