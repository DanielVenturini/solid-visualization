var linguagens = []
var estrela = []
var fork = []

fetch('https://raw.githubusercontent.com/DanielVenturini/solid-visualization/master/Data/Estrela.json')
    .then(response => response.json())
    .then(estrelas => {
        estrela = estrelas
        resp = []
        estrela.map(proj => {
            if (resp.find(proj.language)){
                console.log(proj.language)
            }
            else{
                resp = obj = {
                    'nome': proj.language,
                    'qtd': 1
                }
            }
            console.log(proj.language)
        })
    })
    
// fetch('https://raw.githubusercontent.com/DanielVenturini/solid-visualization/master/Data/Forks.json')
//     .then(response => response.json())
//     .then(forks => {
//         fork = forks
//     })
