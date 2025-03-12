dicas = [
    {
        situacao: "Estresse",
        dicas: ["Meditação", "Respiração diafragmática", "Relaxamento muscular progressivo", "Treino autógeno de Schultz",
            "Busque apoio", "Mantenha contato físico positivo", "Crie ambientes calmos", "Use aromas relaxantes", "Tenha um animal de estimação",
            "Alimente- se corretamente"
        ]
    },
    {
        situacao: "Irritação",
        dicas: ["Meditar", "Praticar yoga", "Fazer acupuntura", "Fazer massagem",
            "Respirar profundamente", "Contar até 10", "Escrever sobre o problema"]
    },
    {
        situacao: "Nervosismo",
        dicas: ["Praticar meditação", "Respirar profundamente", "Fazer exercícios físicos", "Reduzir o consumo de cafeína, açúcar e alimentos processados",
            "Praticar ioga", "Ouvir música", "Ler","Ver um filme", "Conversar com amigos","Praticar a auto-estima"]
    },
    {
        situacao: "Pensamentos Intrusivos",
        dicas: ["Prática de aceitação", "Não reaja com medo ou ansiedade", "Observar sem julgamento", "Use uma técnica de 'desafio cognitivo'",
            "Pratique a atenção plena", "Distrair-se com atividades", "Defina um 'tempo para se preocupar'","Pratique a autocompaixão",
             "Fale com alguém de confiança ","Considere procurar ajuda profissional"]
    }
]

let opcaoCheck = ["estresse","irritacao","nervosismo","pensamentosIntrusivos"]

function criarListaDeDicas(listaParaCriar) {

    let testeDicasHTML = document.getElementById("testeDicas")

    dicas.forEach((item, index)=> {
        if(listaParaCriar == opcaoCheck[index]){
            
            let h2Situacao = document.createElement("h2")
            h2Situacao.textContent = item.situacao
            let divOlHtml = document.createElement("ol")
    
            item.dicas.forEach(dica => {
                let li = document.createElement("li")
                li.textContent = dica
                divOlHtml.appendChild(li)
            })
    
            testeDicasHTML.appendChild(h2Situacao)
            testeDicasHTML.appendChild(divOlHtml)

        }
    });


}

// function mostrarDicas() {
//     opcaoDicasHTML.style.display = "none"
//     criarListaDeDicas()
// }
let opcaoDicasHTML = document.getElementById("opcaoDicas")



let mostrarDicasHTML = document.getElementById("mostrarDicas")
mostrarDicasHTML.onclick = function () {
    opcaoDicasHTML.style.display = "none";
    let inpt1 = document.getElementById("input1")
    let inpt2 = document.getElementById("input2")
    let inpt3 = document.getElementById("input3")
    let inpt4 = document.getElementById("input4")
    if (inpt1.checked) {
        criarListaDeDicas(inpt1.value) 
        // console.log(inpt1.value + " foi marcado!")
    }if(inpt2.checked){
        criarListaDeDicas(inpt2.value) 
    }if(inpt3.checked){
        criarListaDeDicas(inpt3.value) 
    }if(inpt4.checked){
        criarListaDeDicas(inpt4.value) 
    }
    if(!inpt1.checked && !inpt2.checked && !inpt3.checked && !inpt4.checked) {
        opcaoDicasHTML.style.display = "flex";
        alert("❌NENHUM CAMPO FOI SELECIONADO!❌ \nSelecione uma ou mais opções para prosseguir.")

    }
}


