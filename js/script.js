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


function criarMenuCadastroTarefa(){
    let conteudoModalHTML = document.getElementById("modal-content")
    let divModalHTML = document.createElement("div")
    conteudoModalHTML.style.display = "flex"
    conteudoModalHTML.style.flexDirection = "column-reverse"

    divModalHTML.innerHTML = `
        <h1>Cadastrar Tarefa</h1>
        <input id = "inptTarefa" type = "text" placeholder = "Qual o nome da Tarefa?">
        <input id = "inptPrazo" type="date" id="data" name="data" min="2025-01-01" max="3945-12-31">
        <button onclick = "finalizarCadastro()" id="abrirModalSecundarioBtn">Cadastrar</button>
    `
    conteudoModalHTML.innerHTML = " "
    conteudoModalHTML.appendChild(divModalHTML)
    // alert( "A tarefa: " + tarefa.tarefa + " com prazo até " + tarefa.prazo.toLocaleTimeString() + " Foi CADASTRADA!")
    
}

// function cadastrarTarefa(){
    
// }

function criarLista(){
    let ulHTML = document.getElementById("listaTarefas")
    ulHTML.innerHTML = ""
    
    listaDeTarefas.forEach(tarefa => {
        let liHTML = document.createElement("li")
        
        liHTML.innerHTML = `
        ${tarefa.tarefa} - Prazo: ${tarefa.prazo.toLocaleDateString()} 
        <input type="checkbox" class="check">
        `;
        ulHTML.appendChild(liHTML)
    });
    
}

function finalizarCadastro() {
    let inputTarefaHTML = document.getElementById("inptTarefa").value
    let inputPrazoHTML = document.getElementById("inptPrazo").value
    let prazoConvertido = new Date(inputPrazoHTML)
   let novaTarefa = {
    tarefa: inputTarefaHTML,
    prazo: prazoConvertido
   }

   listaDeTarefas.push(novaTarefa)
    modalSecundario.style.display = "block";
    
    // Fechar o modal secundário automaticamente após 3 segundos
    setTimeout(function() {
        modalSecundario.style.display = "none";
        modalPrincipal.style.display = "none";
    }, 5000); // 3000 milissegundos = 3 segundos

    criarLista()
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
    criarMenuCadastroTarefa()
}

// Fechar o modal principal
btnFecharModalPrincipal[0].onclick = function() {
    modalPrincipal.style.display = "none";
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
