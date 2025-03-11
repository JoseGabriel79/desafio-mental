var listaDeTarefas = [
    {
        tarefa: "Dormir",
        prazo: new Date(2025, 2, 11),
    },
    {
        tarefa: "Correr",
        prazo: new Date(2025, 2, 11),
    },
]


function cadastrarTarefa(){
    
    let conteudoModalHTML = document.getElementById("modal-content")
    let divModalHTML = document.createElement("div")
    conteudoModalHTML.style.display = "flex"
    conteudoModalHTML.style.flexDirection = "column-reverse"

    divModalHTML.innerHTML = `
        <h2>Cadastrar Tarefa</h2>
        <input type = "text" placeholder = "Qual o nome da Tarefa?">
        <input type="date" id="data" name="data" min="2025-01-01" max="3945-12-31">

    `
    conteudoModalHTML.appendChild(divModalHTML)
    
    // alert( "A tarefa: " + tarefa.tarefa + " com prazo até " + tarefa.prazo.toLocaleTimeString() + " Foi CADASTRADA!")
    
}

function criarLista(){
    let ulHTML = document.getElementById("listaTarefas")

    listaDeTarefas.forEach(tarefa => {
        let liHTML = document.createElement("li")

        liHTML.innerHTML = `
            ${tarefa.tarefa} - Prazo: ${tarefa.prazo.toLocaleDateString()} 
            <input type="checkbox" class="check">
        `;
    ulHTML.appendChild(liHTML)
    });

}
criarLista()



// Obtendo os elementos
var modalPrincipal = document.getElementById("modalPrincipal");
var modalSecundario = document.getElementById("modalSecundario");
var btnAbrirModalPrincipal = document.getElementById("abrirModalPrincipalBtn");
var btnAbrirModalSecundario = document.getElementById("abrirModalSecundarioBtn");
var btnFecharModalSecundario = document.getElementById("fecharSecundarioBtn");
var btnFecharModalPrincipal = document.getElementsByClassName("fechar-modal");

// Abrir o modal principal
btnAbrirModalPrincipal.onclick = function() {
    modalPrincipal.style.display = "block";
    cadastrarTarefa()
}

// Fechar o modal principal
btnFecharModalPrincipal[0].onclick = function() {
    modalPrincipal.style.display = "none";
}

// Abrir o modal secundário dentro do modal principal
btnAbrirModalSecundario.onclick = function() {
    modalSecundario.style.display = "block";
}

// Fechar o modal secundário
btnFecharModalSecundario.onclick = function() {
    modalSecundario.style.display = "none";
}

// Fechar o modal principal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == modalPrincipal) {
        modalPrincipal.style.display = "none";
    }
    if (event.target == modalSecundario) {
        modalSecundario.style.display = "none";
    }
}
