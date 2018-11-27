var data2008 = []
var data2018 = []

var tableNovos = document.getElementById('tableNovos')
var tableAntigos = document.getElementById('tableAntigos')

function range(array, start, end) {
    if(end - start <= 0)
        return ''

    arrayResult = ''
    for(let i = 0; i < end; i ++) {
        arrayResult += array[i]
    }

    return arrayResult
}

function adicionaTabela(name, star, forks, created_at, table) {

    // cria a linha e as quatro colunas
    var row = document.createElement('tr')
    var column1 = document.createElement('td')
    var column2 = document.createElement('td')
    var column3 = document.createElement('td')
    var column4 = document.createElement('td')

    // cria o texto das colunas
    var textName = document.createTextNode(name)
    var textStar = document.createTextNode(star)
    var textForks = document.createTextNode(forks)
    var textCreate = document.createTextNode(range(created_at, 0, 10))

    // adiciona o texto as colunas
    column1.appendChild(textCreate)
    column2.appendChild(textStar)
    column3.appendChild(textForks)
    column4.appendChild(textName)

    // adiciona as colunas a linha e a linha a tabela
    row.appendChild(column1)
    row.appendChild(column2)
    row.appendChild(column3)
    row.appendChild(column4)
    table.appendChild(row)
}

function getData(url) {
    fetch(url).then( function(response) {       // recuperando a requisição
        return response.json()                  // recuperando como json
    })
    .then( function(response) {

        response.forEach(element => {     // para cada elemento - projeto.
            var name = element['full_name']
            var start = element['stargazers_count']
            var forks = element['forks']
            var created_at = element['created_at']

            if(created_at < '2010-04-11' || (created_at > '2015-11-20' && created_at < '2017-11-21')) {

                if(created_at < '2010-04-11') {
                    data2008.push(name)
                    table = tableAntigos
                } else {
                    data2018.push(name)
                    table = tableNovos
                }

                adicionaTabela(name, start, forks, created_at, table)
            }
        });

    })
}

getData('https://raw.githubusercontent.com/DanielVenturini/solid-visualization/master/Data/ambosJson.json')