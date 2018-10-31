import json

def geraDadosVisualizacao(file):
    dados = json.load(file)
    print("[")
    print("['Nome', 'Estrela', 'Forks', 'Grupo', 'Tamanho'],")
    for i, repositorio in enumerate(dados):
        print("['{0}', {1}, {2}, '{3}', {4}]".format(repositorio['name'], repositorio['stargazers_count'], repositorio['forks_count'], 'Estrelas', repositorio['size']))
        if not i == len(dados)-1:       # não é o último repositório
            print(",")                  # printa a vírgula
    print("]")

def getLinguagens(file):
	dados = json.load(file)
	hashmap = {}

	for repositorio in dados:
		linguagem = repositorio['language']
		try:
			qtd = hashmap[str(linguagem)]
			qtd += 1
			hashmap[str(linguagem)] = qtd
		except KeyError:
			hashmap[str(linguagem)] = 1

	for linguagem in hashmap.keys():
		print('{value:' + str(hashmap.get(str(linguagem))) + ', name:"'+linguagem+'"},')

getLinguagens(open('Star1000.json'))

#geraDadosVisualizacao(open('Star1000.json'))