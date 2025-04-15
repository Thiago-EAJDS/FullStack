const baseURL = 'https://todos-production-34e1.up.railway.app'

async function pegarTarefas() {
    try {
    const resposta = await fetch(`${baseURL}/tarefas`);
    
        if(!resposta.ok){
            alert(resposta.status);
        }

        const dados = await resposta.json();
        return dados;

        console(dados);

    } catch (error) {
        console.error(error);
    }
}


async function criarTarefas(nomeTarefa){
    try {
    const resposta = await fetch(`${baseURL}/tarefas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: nomeTarefa,
            concluido: false
        })
    })

    if(!resposta.ok){
        alert(resposta.status);
    }

} catch (error) {
    console.error(error)
    }
}

async function deletarTarefas(id) {
    const resposta = await fetch(`${baseURL}/tarefas/${ID}`, ({
        method: "DELETE"
    })
}

async function mostrarTarefas(){
    const lista = document.querySelector('ul');
    lista.innerHTML = "";
    const dados = await pegarTarefas();

    dados.map((tarefa) =>{
        const li = document.createElement('li');
        li.textContent = tarefa.titulo;
        const button = document.createElement('button')
        button.addEventListener('click', ()=> {
            await deletarTarefas(tarefa.id);
        })
        lista.appendChild(li);
    })
}

mostrarTarefas();

document.querySelector('button').addEventListener('click', async ()=>{
    const input = document.querySelector('input');
    const nomeTarefa = input.value;

    await criarTarefas(nomeTarefa);
    mostrarTarefas();

    input.value = "";
})