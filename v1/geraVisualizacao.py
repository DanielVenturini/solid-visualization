import json

def getLinguagem(linguagem):
	if linguagem.__eq__('JavaScript') or \
		linguagem.__eq__('Java') or \
		linguagem.__eq__('Python') or \
		linguagem.__eq__('Go') or \
		linguagem.__eq__('C++') or \
		linguagem.__eq__('HTML') or \
		linguagem.__eq__('Ruby') or \
		linguagem.__eq__('Objective-C') or \
		linguagem.__eq__('CSS') or \
		linguagem.__eq__('C') or \
		linguagem.__eq__('PHP'):
		return linguagem
	else:
		return 'Other'

def getLicenca(licenca):
	if licenca.__eq__('MIT License') or \
		licenca.__eq__('Other') or \
		licenca.__eq__('Apache License 2.0') or \
		licenca.__eq__('copyright') or \
		licenca.__eq__('GNU General Public License v3.0') or \
		licenca.__eq__('BSD 3-Clause "New" or "Revised" License') or \
		licenca.__eq__('GNU General Public License v2.0') or \
		licenca.__eq__('Creative Commons Zero v1.0 Universal') or \
		licenca.__eq__('BSD 2-Clause "Simplified" License') or \
		licenca.__eq__('Mozilla Public License 2.0') or \
		licenca.__eq__('Creative Commons Attribution 4.0 International'):
		return licenca.replace('"', "'")
	else:
		return 'None'

def geraDados(fileName, data, permissao):
    file = open(fileName)
    repositorios = json.load(file)

    fileWriter = open('data.js', permissao)

    fileWriter.write('const data{0} = [\n'.format(data))
    i = 0
    max = len(repositorios)

    for repositorio in repositorios:
    	stars = repositorio['stargazers_count']
    	forks = repositorio['forks_count']
    	commits = repositorio['commits']
    	issues = repositorio['issues']
    	open_issues = repositorio['open_issues']
    	pulls_requests = repositorio['pulls']
    	licenca = getLicenca(repositorio['license'])
    	size = repositorio['size']
    	linguagem = getLinguagem(repositorio['language'])
    	ano = repositorio['created_at'][:4]

    	fileWriter.write('["{0}", {1}, "{2}", {3}, {4}, {5}, {6}, {7}, "{8}"]'.format(ano, stars, linguagem, forks, commits, issues, open_issues, pulls_requests, licenca))

    	if i == max-1:
    		fileWriter.write('\n')
    	else:
    		fileWriter.write(',\n')

    	i += 1

    fileWriter.write(']\n')
    fileWriter.close()

geraDados('../Data/Estrela.json', 'Estrelas', 'w')
geraDados('../Data/Forks.json', 'Forks', 'a')