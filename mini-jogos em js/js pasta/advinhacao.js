let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function verificarNumero() {
    let inputNumero = document.getElementById("inputNumero").value;
    let mensagem = document.getElementById("mensagem");
    let numero = parseInt(inputNumero);

    if (isNaN(numero) || numero < 1 || numero > 100) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;

    } if (numero === numeroAleatorio) {
        mensagem.textContent = "Parabéns! Você acertou o número!";

    } else if (numero < numeroAleatorio) {
        mensagem.textContent = "O número é maior!";
        
    } else {
        mensagem.textContent = "O número é menor!";
    }
}
