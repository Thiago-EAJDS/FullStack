async function pegarDados(url){
    const resposta = await fetch("tps://jsonplaceholder.typicode.com/todos")
    const dados = await resposta.json(url);
    return dados;
}

async function pegarDados(){
    const resposta = await fetch("tps://jsonplaceholder.typicode.com/todos")
    const dados = await resposta.json();
    return dados;
}

document.querySelector('button').addEventListener('click', async ()=>{
    const ul = document.querySelector('ul');

    const dados = await pegarDados();

    dados.map((item) =>{ 
        const li = document.createElement('li');
        li.textContent = item.title;
        ul.appendChild(li);
    })
})