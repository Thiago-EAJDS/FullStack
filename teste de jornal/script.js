const imagensPopup = [
    '/imagens/teste.png',
    '/imagens/teste.png',
    '/imagens/teste.png',
    '/imagens/teste.png'
];

const linkComum = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1'; 

function gerarImagemAleatoria() {
    const indice = Math.floor(Math.random() * imagensPopup.length);
    return imagensPopup[indice];
}

function exibirPopup() {
    const popup = document.getElementById('popup');
    const imgPopup = document.getElementById('popup-img');
    const imgLink = document.getElementById('popup-img-link');
    
    imgPopup.src = gerarImagemAleatoria(); 
    imgLink.href = linkComum; 
    
    popup.style.display = 'flex';
}

function fecharPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; 
}

window.onload = function() {
    exibirPopup(); 
};

