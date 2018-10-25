import json

def geraDadosVisualizacao(file):
    dados = json.load(file)
    print("[")
    print("['Nome', 'Estrela', 'Forks', 'Grupo', 'Tamanho'],")
    for repositorio in dados:
        print("['{0}', '{1}', '{2}', '{3}', '{4}'],".format(repositorio['name'], repositorio['stargazers_count'], repositorio['forks_count'], 'Estrelas', repositorio['size']))
    print("]")

geraDadosVisualizacao(open('Star1000.json'))