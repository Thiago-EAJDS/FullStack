const produtos = [
    { nome: 'Fone de ouvido', categoria: 'Perifericos', preco: 20 },
    { nome: 'Teclado', categoria: 'Perifericos', preco: 150 },
    { nome: 'Monitor', categoria: 'Perifericos', preco: 250 },
    { nome: 'Fios gerais', categoria: 'Perifericos', preco: 15 },
    { nome: 'Mouse', categoria: 'Perifericos', preco: 10 },
    { nome: 'Carregador', categoria: 'Perifericos', preco: 16 },
    { nome: 'Mousepad', categoria: 'Perifericos', preco: 5 },

    { nome: 'Grand Theft Auto I', categoria: 'Jogos', preco: 20 },
    { nome: 'Grand Theft Auto II', categoria: 'Jogos', preco: 30 },
    { nome: 'Grand Theft Auto III', categoria: 'Jogos', preco: 40 },
    { nome: 'Grand Theft Auto IV', categoria: 'Jogos', preco: 50 },
    { nome: 'Grand Theft Auto V', categoria: 'Jogos', preco: 70 },
    { nome: 'Grand Theft Auto VI', categoria: 'Jogos', preco: 400 },

    { nome: 'Celular', categoria: 'Eletronicos', preco: 900 },
    { nome: 'Smartwatch', categoria: 'Eletronicos', preco: 350 },
    { nome: 'Caixa de Som', categoria: 'Eletronicos', preco: 200 },
    { nome: 'TV Smart', categoria: 'Eletronicos', preco: 1500 },
    { nome: 'Notebook', categoria: 'Eletronicos', preco: 2500 }
]

function filtrarProdutos() {
    const textoBusca = document.getElementById('campoBusca').value.toLowerCase();
    const categoria = document.getElementById('categoriaFiltro').value;
    const resultado = document.getElementById('resultado');
    const infoExtras = document.getElementById('infoExtras');

    let filtrados = produtos.filter(produto => {
        const nomeOk = produto.nome.toLowerCase().includes(textoBusca);
        const categoriaOk = categoria === '' || produto.categoria === categoria;
        return nomeOk && categoriaOk;
    });

    resultado.innerHTML = '';

    if (filtrados.length === 0) {
        resultado.innerHTML = '<p>Nenhum produto encontrado.</p>';
        infoExtras.innerHTML = '';
        return;
    }

    filtrados.forEach(produto => {
        resultado.innerHTML += `<p>${produto.nome} | ${produto.categoria} | R$${produto.preco}</p>`;
    });

    const totalProdutos = filtrados.length;
    const totalPreco = filtrados.reduce((soma, p) => soma + p.preco, 0);

    infoExtras.innerHTML = `Produtos encontrados: ${totalProdutos} | Valor total: R$${totalPreco}`;
}
