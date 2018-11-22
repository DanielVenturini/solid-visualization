import datetime
import requests
import json
import time

def getDate(mili):
	return datetime.datetime.fromtimestamp(mili).strftime('%Y-%m-%d')

def getRequest(current, qtd, owner, project):
	url = 'https://api.github.com/repos/{0}/{1}/stats/commit_activity'.format(owner, project)
	print(str(current) + ' - ' + str(qtd) + ': ' + url)
	return requests.get(url).json()


def getActive(fileName):

	file = json.load(open(fileName))

	owners = list(file.keys())
	result = {}

	qtd = len(owners)
	current = 1
	for user in owners:
		project = file[user]

		resp = getRequest(current, qtd, user, project)
		result[project] = resp

		current += 1
		#time.sleep(3)	# wait three seconds

	json.dump(result, open(fileName + 'RESULT.json', 'w'), indent=True)
	print('FIM')

def somaSemana(semanaTotal, semanaAtual):

	semanaFinal = {'total': 0, 'days': list(range(0, 7))}
	for i in range(0, len(semanaAtual['days'])):
		semanaFinal['days'][i] = semanaTotal['days'][i] + semanaAtual['days'][i]

	semanaFinal['total'] = semanaTotal['total'] + semanaAtual['total']
	return semanaFinal


def getChangedData(fileName, cabecalho, permissao, valmin, valmax):

	file = json.load(open(fileName))
	projects = list(file.keys())

	yearActivity = {}

	qtd = len(projects)
	current = 1
	for project in projects:

		weeks = file[project]
		for week in weeks:
			weekNum = week['week']

			try:
				yearActivity[weekNum] = somaSemana(yearActivity[weekNum], week)
			except KeyError as ex:
				yearActivity[weekNum] = {'total': week['total'], 'days': week['days']}

		print(str(current) + ' - ' + str(qtd) + ': ' + project)
		current += 1

	getDataFinal(yearActivity, cabecalho, permissao, valmin, valmax)


def getDataFinal(yearActivity, cabecalho, permissao, valmin, valmax, file='data.js'):

	weeks = list(yearActivity.keys())
	weeks.sort()

	file = open(file, permissao)
	file.write(cabecalho + '[\n')
	print(cabecalho + '[')

	fim = False
	for i in range(0, len(weeks)):

		weekNum = weeks[i]
		cont = 0
		week = yearActivity[weekNum]

		if i == len(weeks)-1:
			fim = True

		for j in range(0, len(week['days'])):
			day = week['days'][j]

			if day >= valmin and day < valmax:
				file.write('    ["{0}", {1}]'.format(getDate(weekNum + cont), day))
				print('    ["{0}", {1}]'.format(getDate(weekNum + cont), day), end='')

				if fim and j == len(week['days'])-1:
					print()
					file.write('\n')
				else:
					print(',')
					file.write(',\n')

			cont += 86400

	print(']')
	file.write(']\n\n')
	file.close()


fileOlds = 'analise/top50Antigo.json'
fileNew = 'analise/top50Novo.json'

getActive(fileOlds)
getActive(fileNew)

getChangedData(fileOlds + 'RESULT.json', 'const dadosAntigosNormal = ', 'w', 0, 70)
getChangedData(fileOlds + 'RESULT.json', 'const dadosAntigosAltaAtividade = ', 'a', 70, 55550)
getChangedData(fileNew + 'RESULT.json', 'const dadosNovosNormal = ', 'a', 0, 70)
getChangedData(fileNew + 'RESULT.json', 'const dadosNovosAltaAtividade = ', 'a', 70, 55550)