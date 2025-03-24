document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("input-text");
    const totalVogais = document.getElementById("total-vogais");
    const contarA = document.getElementById("contarA");
    const contarB = document.getElementById("contarE");
    const contarI = document.getElementById("contarI");
    const contarO = document.getElementById("contarO");
    const contarU = document.getElementById("contarU");

    inputText.addEventListener("input", function () {
        const text = inputText.value.toLowerCase();
        const vogais = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
        let total = 0;

        for (let char of text) {
            if (vogais.hasOwnProperty(char)) {
                vogais[char]++;
                total++;
            }
        }

        totalVogais.textContent = total;
        contarA.textContent = vogais['a'];
        contarB.textContent = vogais['e'];
        contarI.textContent = vogais['i'];
        contarO.textContent = vogais['o'];
        contarU.textContent = vogais['u'];
    });
});
