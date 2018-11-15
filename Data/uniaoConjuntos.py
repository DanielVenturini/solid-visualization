import json

def contem(projeto, conjunto):

    for projetoConjunto in conjunto:
        if projeto['full_name'].__eq__(projetoConjunto['full_name']):
            return True

    return False

def junta(conj1, conj2):
    conjUniao = json.load(conj1)        # adiciona no novo conjunto todo o primeiro conjunto
    conj2 = json.load(conj2)            # transforma o conjunto2 em json

    for projeto in conj2:
        if contem(projeto, conjUniao):
            print(projeto['full_name'])
        else:
            conjUniao.append(projeto)

    arqUniao = open('Todos.json', 'w')
    json.dump(conjUniao, arqUniao)
    arqUniao.close()


conjunto1 = open('Estrela.json')
conjunto2 = open('Forks.json')

junta(conjunto1, conjunto2)