document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const cartao = document.getElementById("cartao");
    const frente = document.querySelector(".frente");
    const verso = document.querySelector(".verso");
    const body = document.body;
    const icon = document.getElementById("icon");
    let isFlipped = false;

    // Alternar Modo Escuro
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        cartao.classList.toggle("dark-mode");
        darkModeToggle.classList.toggle("dark-mode-button");

        icon.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Alternar rotação do cartão (frente e verso)
    cartao.addEventListener("click", () => {
        isFlipped = !isFlipped;
        cartao.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";

    });

    // Efeito 3D ao mover o mouse
    cartao.addEventListener("mousemove", (e) => {
        let centerX = cartao.offsetWidth / 2;
        let centerY = cartao.offsetHeight / 2;
        let offsetX = e.offsetX - centerX;
        let offsetY = e.offsetY - centerY;

        let rotateX = -(offsetY / 5);
        let rotateY = offsetX / 5;

        cartao.style.transform = `rotateY(${isFlipped ? 180 - rotateY : rotateY}deg) rotateX(${isFlipped ? -rotateX : rotateX}deg)`;
    });

    // Resetar rotação ao sair do cartão
    cartao.addEventListener("mouseleave", () => {
        cartao.style.transform = isFlipped ? "rotateY(180deg) rotateX(0deg)" : "rotateY(0deg) rotateX(0deg)";
    });
});
