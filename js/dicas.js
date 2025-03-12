dicas = [
    {
        situacao: "Estresse",
        dicas:["Meditação","Respiração diafragmática","Relaxamento muscular progressivo", "Treino autógeno de Schultz",
        "Busque apoio","Mantenha contato físico positivo","Crie ambientes calmos","Use aromas relaxantes","Tenha um animal de estimação",
            "Alimente- se corretamente"
        ]
    },
    {
        situacao: "Irritação",
        dicas:["Meditar","Praticar yoga","Fazer acupuntura", "Fazer massagem",
        "Respirar profundamente","Contar até 10","Escrever sobre o problema"]
    }
]

function criarListaDeDicas(){
    let testeDicasHTML = document.getElementById("testeDicas")
    let divOlHtml = document.createElement("ol")
    let dicasSalvas = ""
    dicas.forEach(item => {
        item.dicas.forEach(dica=>{
            dicasSalvas.innerHTML = `
                <li>${dica}</li>
            `
        })
        divOlHtml.innerHTML = `
            <h2>${item.situacao}</h2>
            ${dicasSalvas}
        `
        
    });


}





