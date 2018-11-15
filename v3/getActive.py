import requests

def getActive(owner, project):
	requests.get('https://api.github.com/repos/{0}/{1}/stats/commit_activity'.format(owner, project)).json()