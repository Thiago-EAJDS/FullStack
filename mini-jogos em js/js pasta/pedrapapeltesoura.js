function jogarPedraPapelTesoura(escolhaUsuario) {

    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    let mensagem = document.getElementById("mensagem");
    let resultado = "";
    
    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";

    } else if (
        (escolhaUsuario === 1 && escolhaComputador === 2) ||
        (escolhaUsuario === 2 && escolhaComputador === 3) ||
        (escolhaUsuario === 3 && escolhaComputador === 1) ) {
        resultado = "Você venceu!";

    } else {
        resultado = "Você perdeu!";
    }
    
    let opcoes = ["", "Pedra", "Tesoura", "Papel"];
    mensagem.textContent = `Você escolheu ${opcoes[escolhaUsuario]}, o computador escolheu ${opcoes[escolhaComputador]}. ${resultado}`;
}