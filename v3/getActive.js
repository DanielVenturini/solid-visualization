var data2008 = []
var data2018 = []

var table = document.getElementById('table')

function range(array, start, end) {
    if(end - start <= 0)
        return ''

    arrayResult = ''
    for(let i = 0; i < end; i ++) {
        arrayResult += array[i]
    }

    return arrayResult
}

function adicionaTabela(name, created_at) {

    // cria a linha e as duas colunas
    var row = document.createElement('tr')
    var column1 = document.createElement('td')
    var column2 = document.createElement('td')

    // cria o texto das colunas
    var textName = document.createTextNode(name);
    var textCreate = document.createTextNode(range(created_at, 0, 4))

    // adiciona o texto as colunas
    column1.appendChild(textCreate)
    column2.appendChild(textName)

    // adiciona as colunas a linha e a linha a tabela
    row.appendChild(column1)
    row.appendChild(column2)
    table.appendChild(row)
}

function getData(url) {
    fetch(url).then( function(response) {       // recuperando a requisição
        return response.json()                  // recuperando como json
    })
    .then( function(response) {

        response.forEach(element => {     // para cada elemento - projeto.
            var name = element['full_name']
            var created_at = element['created_at']

            if(created_at < '2011-10-11' || created_at > '2015-09-30') {

                if(created_at < '2011-10-11')
                    data2008.push(name)
                else
                    data2018.push(name)

                adicionaTabela(name, created_at)
            }
        });

    })
}

getData('https://raw.githubusercontent.com/DanielVenturini/solid-visualization/master/Data/Todos.json')