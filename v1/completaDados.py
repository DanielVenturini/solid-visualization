# An example to get the remaining rate limit using the Github GraphQL API.

import requests
import json

headers = {"Authorization": "token d40388de3f160fc738311b96d8e766c012f2e597"}

def getNumCommits(owner, repo):
    query = 'query{repository(name:"'+repo+'",owner:"'+owner+'"){ref(qualifiedName:"master"){target{...on Commit{history{totalCount}}},repository{pullRequests{totalCount},issues{totalCount}}}}}'

    request = requests.post('https://api.github.com/graphql', json={'query': query}, headers=headers)
    if request.status_code == 200:

        commits = request.json()['data']['repository']['ref']['target']['history']['totalCount']
        pulls = request.json()['data']['repository']['ref']['repository']['pullRequests']['totalCount']
        issues = request.json()['data']['repository']['ref']['repository']['issues']['totalCount']

        return commits, pulls, issues
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(request.status_code, query))

def procura(url, jsonEstrelas):
    for repositorio in jsonEstrelas:
        if repositorio['html_url'].__eq__(url):
            return repositorio['commits'], repositorio['pulls'], repositorio['issues']

    raise Exception

# recupera da API V4 a quantidade de commits, pulls e issues para completar a base
def addCommitsInJSON(fileName, jsonEstrelas):
    file = open(fileName)
    dados = json.load(file)
    errors = []

    i = 0
    for repositorio in dados:
        i += 1

        repo = repositorio['name']
        owner = repositorio['owner']['login']
        url = repositorio['html_url']

        try:
            commits, pulls, issues = procura(url, jsonEstrelas)
            repositorio['commits'] = commits
            repositorio['pulls'] = pulls
            repositorio['issues'] = issues
            print('{0}: {1} - {2} - {3} - {4}'.format(i, repo, commits, pulls, issues))
            continue
        except Exception:
            pass

        try:
            commits, pulls, issues = getNumCommits(owner, repo)
            repositorio['commits'] = commits
            repositorio['pulls'] = pulls
            repositorio['issues'] = issues
            print('{0}: {1} - {2} - {3} - {4}'.format(i, repo, commits, pulls, issues))
        except TypeError:
            errors.append(repositorio['html_url'])

    json.dump(dados, open(fileName, 'w'), indent=4)
    print('Repositorios com erros:')
    for err in errors:
        print(err)

getMinorYear('../Data/Estrela.json')
#addCommitsInJSON('../Data/Forks.json', json.load(open('../Data/Estrela.json')))