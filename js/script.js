var listaDeTarefas = [
    {
        tarefa: "Dormir",
        prazo: new Date(2025, 2, 11, 11, 0, 0),
    },
    {
        tarefa: "Correr",
        prazo: new Date(2025, 2, 11, 13, 30, 0),
    },
]


function cadastrarTarefa(){
    let novaTarefa = prompt("Qual o nome da Tarefa? ")
    let novoAno = prompt("Qual ano?)")
    let novoMes = prompt("Qual mes?)")
    let novoDia = prompt("Qual dia?)")
    let novoHora = prompt("Qual hora?)")
    
}
listaDeTarefas.forEach(tarefa => {
    alert( "A tarefa: " + tarefa.tarefa + " com prazo até " + tarefa.prazo.toLocaleTimeString() + " Foi CADASTRADA!")
});


