function verificar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    
    if (!isNaN(numero)) {
        resultado.textContent = `O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}.`;
    } else {
        resultado.textContent = "Por favor, insira um número válido.";
    }
}
