const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '687575473dmshf93ce8692bb11cep1dec44jsn45613d6339c8',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D?info=mini_info&limit=10&page=1&titleType=movie', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));