document.getElementById('callButton').addEventListener('click', function() {
	fetch('https://swapi.dev/api/people/1/')
		.then(response => response.json())
		.then(data => {
			const resultDiv = document.getElementById('result')
			resultDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>Height: ${data.height}</p>
                <p>Mass: ${data.mass}</p>
                <p>Hair Color: ${data.hair_color}</p>
                <p>Skin Color: ${data.skin_color}</p>
                <p>Eye Color: ${data.eye_color}</p>
                <p>Birth Year: ${data.birth_year}</p>
                <p>Gender: ${data.gender}</p>
            `
		})
		.catch(error => {
			console.error('Error:', error)
			const resultDiv = document.getElementById('result')
			resultDiv.innerHTML = `<p>Произошла ошибка при загрузке данных.</p>`
		})
})
