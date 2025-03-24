document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const cartao = document.getElementById("cartao");
    const body = document.body;
    const icon = document.getElementById("icon");

    let rotateX = 0;
    let rotateY = 0;
    let rotateZ = 0;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        cartao.classList.toggle("dark-mode");
        darkModeToggle.classList.toggle("dark-mode-button");

        if (body.classList.contains("dark-mode")) {
            icon.textContent = "☀️";
        } else {
            icon.textContent = "🌙";
        }
    });

    cartao.addEventListener("mousemove", (e) => {
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;

        rotateY = (e.pageX - centerX) / 1;
        
        rotateX = (e.pageY - centerY) / 1;

        cartao.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    });

    cartao.addEventListener("mouseleave", () => {
        cartao.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    });

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        cartao.classList.toggle("dark-mode");
        darkModeToggle.classList.toggle("dark-mode-button");

        if (body.classList.contains("dark-mode")) {
            icon.textContent = "☀️";
        } else {
            icon.textContent = "🌙";
        }
    });
});
