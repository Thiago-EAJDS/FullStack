const data = [
    { nome: "Ana Souza", idade: 28, cargo: "Desenvolvedora Frontend", salario: 4500, experiencia: 4 },
    { nome: "Carlos Mendes", idade: 35, cargo: "Gerente de Projetos", salario: 8500, experiencia: 10 },
    { nome: "Fernanda Lima", idade: 30, cargo: "UX Designer", salario: 6000, experiencia: 6 },
    { nome: "João Silva", idade: 40, cargo: "Engenheiro de Software", salario: 10000, experiencia: 15 },
    { nome: "Mariana Costa", idade: 27, cargo: "Analista de Dados", salario: 5000, experiencia: 5 },
    { nome: "Roberto Alves", idade: 50, cargo: "CTO", salario: 15000, experiencia: 25 },
    { nome: "Tatiane Rocha", idade: 32, cargo: "Cientista de Dados", salario: 11000, experiencia: 8 },
    { nome: "Pedro Henrique", idade: 24, cargo: "Desenvolvedor Backend", salario: 4000, experiencia: 3 },
    { nome: "Luana Martins", idade: 29, cargo: "Especialista em Segurança", salario: 9000, experiencia: 7 },
    { nome: "Eduardo Pereira", idade: 38, cargo: "Administrador de Banco de Dados", salario: 7500, experiencia: 12 },
    { nome: "Beatriz Nunes", idade: 26, cargo: "Analista de Marketing Digital", salario: 4800, experiencia: 4 },
    { nome: "Ricardo Santos", idade: 33, cargo: "Desenvolvedor Full Stack", salario: 8500, experiencia: 9 },
    { nome: "Paula Fernandes", idade: 31, cargo: "Gerente de Produto", salario: 9200, experiencia: 7 },
    { nome: "Guilherme Moraes", idade: 36, cargo: "DevOps Engineer", salario: 9800, experiencia: 11 },
    { nome: "Juliana Ribeiro", idade: 29, cargo: "Desenvolvedora Mobile", salario: 7000, experiencia: 6 },
    { nome: "Samuel Oliveira", idade: 45, cargo: "Arquiteto de Software", salario: 14000, experiencia: 20 },
    { nome: "Vanessa Luz", idade: 28, cargo: "Redatora Técnica", salario: 5200, experiencia: 5 },
    { nome: "Lucas Amaral", idade: 34, cargo: "Administrador de Redes", salario: 7200, experiencia: 9 },
    { nome: "Clara Batista", idade: 23, cargo: "Estagiária em TI", salario: 2500, experiencia: 1 },
    { nome: "Rafael Souza", idade: 37, cargo: "Engenheiro de Machine Learning", salario: 13000, experiencia: 12 },
    { nome: "Bruna Sales", idade: 41, cargo: "Analista de Qualidade", salario: 7800, experiencia: 14 },
    { nome: "Daniel Castro", idade: 26, cargo: "Desenvolvedor Frontend", salario: 5300, experiencia: 4 },
    { nome: "Isabela Duarte", idade: 39, cargo: "Líder Técnico", salario: 11000, experiencia: 13 },
    { nome: "Felipe Gomes", idade: 30, cargo: "Analista de Suporte", salario: 4900, experiencia: 5 },
    { nome: "Tatiana Borges", idade: 35, cargo: "Gestora de TI", salario: 12500, experiencia: 11 },
    { nome: "Alexandre Moreira", idade: 42, cargo: "CIO", salario: 18000, experiencia: 18 },
    { nome: "Débora Nascimento", idade: 29, cargo: "Engenheira de Software", salario: 9500, experiencia: 7 },
    { nome: "Wellington Prado", idade: 27, cargo: "Administrador de Sistemas", salario: 6800, experiencia: 6 },
    { nome: "Letícia Moura", idade: 33, cargo: "Especialista em Cloud", salario: 10800, experiencia: 9 },
    { nome: "Adriano Ferreira", idade: 31, cargo: "Analista de Infraestrutura", salario: 7600, experiencia: 7 },
    { nome: "Nathalia Rezende", idade: 40, cargo: "Pesquisadora em IA", salario: 13500, experiencia: 16 },
    { nome: "Rodrigo Sampaio", idade: 36, cargo: "Engenheiro de Dados", salario: 9900, experiencia: 10 },
    { nome: "Carolina Xavier", idade: 28, cargo: "Especialista em SEO", salario: 6200, experiencia: 5 },
    { nome: "Fernando Lopes", idade: 39, cargo: "Gerente de Segurança da Informação", salario: 12800, experiencia: 14 },
    { nome: "Andressa Bezerra", idade: 26, cargo: "Consultora de TI", salario: 5700, experiencia: 4 },
    { nome: "Henrique Barros", idade: 45, cargo: "Engenheiro de Software Sênior", salario: 15000, experiencia: 20 },
    { nome: "Luciana Campos", idade: 32, cargo: "Analista de BI", salario: 8600, experiencia: 8 },
    { nome: "Thiago Mendes", idade: 34, cargo: "Desenvolvedor de Jogos", salario: 9100, experiencia: 10 },
    { nome: "Amanda Farias", idade: 30, cargo: "Designer Gráfico", salario: 5800, experiencia: 6 }
];

document.querySelector("button").addEventListener("click", ()=>{
    const lista = document.getElementById("meus-func");
    const inputNome = document.querySelector
    const tagLI = document.createElement("li");
        tagLI.textContent = `Nome: ${funcionario.nome} - Salario: ${funcionario.salario}`;
    lista.appendChild(tagLI);
    
})

document.getElementById("filter").addEventListener("click", filtrarFuncionarios)

function filtrarFuncionarios(lista){
    data.map((funcionario)=>{
        if (funcionario.experiencia >= 10){
        const tagLI = document.createElement("li");
        tagLI.textContent = `Nome: ${funcionario.nome} - Salario: ${funcionario.salario}`;
        const texto =
        lista.appendChild(tagLI);
        }
    })
}