const baseURL = 'https://todos-production-34e1.up.railway.app'

async function pegarTarefas() {
    try {
        const resposta = await fetch(`${baseURL}/tarefas`);
        if (!resposta.ok) alert(resposta.status);
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error(error);
    }
}

async function criarTarefas(nomeTarefa) {
    try {
        const resposta = await fetch(`${baseURL}/tarefas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                titulo: nomeTarefa,
                concluido: false
            })
        });
        if (!resposta.ok) alert(resposta.status);
    } catch (error) {
        console.error(error);
    }
}

async function deletarTarefas(id) {
    try {
        const resposta = await fetch(`${baseURL}/tarefas/${id}`, {
            method: 'DELETE'
        });
        if (!resposta.ok) alert(resposta.status);
    } catch (error) {
        console.error(error);
    }
}

async function atualizarTarefa(id, novoTitulo) {
    try {
        const resposta = await fetch(`${baseURL}/tarefas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                titulo: novoTitulo,
                concluido: false
            })
        });
        if (!resposta.ok) alert(resposta.status);
    } catch (error) {
        console.error(error);
    }
}

async function mostrarTarefas() {
    const lista = document.querySelector('ul');
    lista.innerHTML = '';
    const dados = await pegarTarefas();

    dados.forEach((tarefa) => {
        const li = document.createElement('li');
        li.textContent = tarefa.titulo;

        const btnDeletar = document.createElement('button');
        btnDeletar.textContent = '❌';
        btnDeletar.addEventListener('click', async () => {
            await deletarTarefas(tarefa.id);
            mostrarTarefas();
        });

        const btnEditar = document.createElement('button');
        btnEditar.textContent = '✏️';
        btnEditar.addEventListener('click', async () => {
            const novoTitulo = prompt('Novo título:', tarefa.titulo);
            if (novoTitulo) {
                await atualizarTarefa(tarefa.id, novoTitulo);
                mostrarTarefas();
            }
        });

        li.appendChild(btnEditar);
        li.appendChild(btnDeletar);
        lista.appendChild(li);
    });
}

document.querySelector('button').addEventListener('click', async () => {
    const input = document.querySelector('input');
    const nomeTarefa = input.value;
    if (nomeTarefa.trim() !== "") {
        await criarTarefas(nomeTarefa);
        input.value = "";
        mostrarTarefas();
    }
});

mostrarTarefas();
