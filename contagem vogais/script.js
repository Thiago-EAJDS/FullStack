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
        const vogais = {
            'a': 0, 'á': 0, 'à': 0, 'â': 0, 'ã': 0,
            'e': 0, 'é': 0, 'è': 0, 'ê': 0,
            'i': 0, 'í': 0, 'ì': 0, 'î': 0,
            'o': 0, 'ó': 0, 'ò': 0, 'ô': 0, 'õ': 0,
            'u': 0, 'ú': 0, 'ù': 0, 'û': 0
        }; let total = 0;

        for (let char of text) {
            if (vogais.hasOwnProperty(char)) {
                vogais[char]++;
                total++;
            }
        }

        totalVogais.textContent = total;
        contarA.textContent = vogais['a'] + vogais['á'] + vogais['à'] + vogais['â'] + vogais['ã'];
        contarE.textContent = vogais['e'] + vogais['é'] + vogais['è'] + vogais['ê'];
        contarI.textContent = vogais['i'] + vogais['í'] + vogais['ì'] + vogais['î'];
        contarO.textContent = vogais['o'] + vogais['ó'] + vogais['ò'] + vogais['ô'] + vogais['õ'];
        contarU.textContent = vogais['u'] + vogais['ú'] + vogais['ù'] + vogais['û'];
    });
});
