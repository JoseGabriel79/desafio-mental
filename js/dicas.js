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
    }
]

function criarListaDeDicas() {
    let testeDicasHTML = document.getElementById("testeDicas")

    dicas.forEach(item => {

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
    criarListaDeDicas()
}


