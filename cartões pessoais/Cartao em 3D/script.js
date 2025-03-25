document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const cartao = document.getElementById("cartao");
    const body = document.body;
    const icon = document.getElementById("icon");
    let isFlipped = false;

    // Alternar Modo Escuro
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        cartao.classList.toggle("dark-mode");

        icon.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Alternar rotação do cartão (frente e verso)
    cartao.addEventListener("click", () => {
        isFlipped = !isFlipped;
        cartao.classList.toggle("flipped", isFlipped);
    });

    // Efeito 3D ao mover o mouse
    cartao.addEventListener("mousemove", (e) => {
        let centerX = cartao.offsetWidth / 2;
        let centerY = cartao.offsetHeight / 2;
        let offsetX = e.offsetX - centerX;
        let offsetY = e.offsetY - centerY;

        let rotateX = -(offsetY / 5);
        let rotateY = offsetX / 5;

        if (isFlipped) {
            rotateX = -rotateX;
            rotateY = 180 - rotateY;
        }

        cartao.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    // Resetar rotação ao sair do cartão
    cartao.addEventListener("mouseleave", () => {
        cartao.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
    });
});
