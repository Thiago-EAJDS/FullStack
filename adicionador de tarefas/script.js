document.querySelector("button").addEventListener("click", ()=>{
    const nomeTarefa = document.querySelector("input");

    if(nomeTarefa.value === ""){
        alert("O campo de nome da tarefa está vazio."); return; }

    if(nomeTarefa.value.length < 4){
        alert("O campo de nome da tarefa está muito curto."); return; }

    const item = document.createElement("li");
    item.textContent = nomeTarefa.value;

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", ()=>{
        item.remove();
    })

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.addEventListener("click", ()=>{
        item.classList.toggle("concluido");
    })

    const btnDesconcluir = document.createElement("button");
    btnConcluir.textContent = "Desconcluir";
    btnConcluir.addEventListener("click", ()=>{
        item.classList.toggle("concluido");
        item.classList.toggle("desconcluido");
    })

    item.appendChild(btnDesconcluir);
    item.appendChild(btnConcluir);
    item.appendChild(btnExcluir);

    document.getElementById("minhas-tarefas").appendChild(item);

    nomeTarefa.value = "";





})