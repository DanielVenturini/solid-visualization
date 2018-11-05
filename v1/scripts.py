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
		print("{0} {1}".format(hashmap.get(license), license))

def separaRepositorios(file1='../Data/Estrela.json', file2='../Data/Forks.json'):
	jsonEstrela = json.load(open(file1))
	jsonForks = json.load(open(file2))

	fileSEstrela = open('../Data/SomenteEstrela.json', 'w')
	fileSForks = open('../Data/SomenteForks.json', 'w')

	jsonE = json.load(file1)
	jsonF = json.load(file2)

	for i, repositorioEstrela in enumerate(jsonEstrela):
		for i, repositorioForks in enumerate(jsonForks):
			if repositorioEstrela['full_name'].__eq__(repositorioForks['full_name'])

	fileSEstrela.close()
	fileSForks.close()

# getLinguagens(open('../Data/Estrela.json'))
# getQtdLicencas(open('../Data/Forks.json'))
separaRepositorios()