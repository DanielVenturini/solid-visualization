import json

# recupera a quantidade de projetos com cada linguagem
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
		score = hashmap.get(str(linguagem))
		print('{0} - {1}'.format(score, linguagem))

# recupera a quantidade de projetos com cada licença
def getQtdLicencas(file):
	dados = json.load(file)
	hashmap = {}

	for repositorio in dados:
		license = repositorio['license']
		try:
			qtd = hashmap[str(license)]
			qtd += 1
			hashmap[str(license)] = qtd
		except KeyError:
			hashmap[str(license)] = 1

	for license in hashmap.keys():
		print("{0}:{1}".format(license, hashmap.get(license)))

getLinguagens(open('Data/Estrela.json'))
# getQtdLicencas(open('Data/Estrela.json'))

#geraDadosVisualizacao(open('Star1000.json'))