
const url = 'https://api.themoviedb.org/3/movie/550?api_key=85a5fc8bbb74f8090b40918baf86bf98'

fetch(url)
	.then(resp = resp.json())
	.then(data = data())
	