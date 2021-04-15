const movieContainer = document.querySelector(".row.movie-container")
const detailContainer = document.querySelector(".modal-body")

fetch("http://www.omdbapi.com/?apikey=41eec44f&s=harry-potter")
	// success
	.then((response) => response.json())
	.then((response) => {
		const movies = response.Search

		let card = ""
		movies.forEach((m) => {
			card += `<div class="col-md-4 my-5">
      <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-imdbid="${m.imdbID}"
          data-bs-target="#movieDetailModal">Show Detail</a>
        </div>
      </div>
    </div>`
		})

		// insert data movies from api
		movieContainer.innerHTML = card

		// event untuk tombol detail
		const btnList = document.querySelectorAll("a.btn.btn-primary")
		btnList.forEach((btn) => {
			btn.addEventListener("click", function () {
				// get movie id
				const imdbID = this.dataset.imdbid

				// fetch movie id
				fetch(`http://www.omdbapi.com/?apikey=41eec44f&i=${imdbID}`)
					.then((r) => r.json())
					.then((r) => {
						// create component
						let detail = `<!-- data from api -->
            <div class="container-fluid">
              <div class="row">
                <!-- img section -->
                <div class="col-md-3">
                  <img src="${r.Poster}" class="img-fluid">
                </div>
                <!-- text detail section -->
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${r.Title}</h4></li>
                    <li class="list-group-item"><Strong>Director(s) : </Strong>${r.Director}</li>
                    <li class="list-group-item"><Strong>Actor(s) : </Strong>${r.Actors}</li>
                    <li class="list-group-item"><Strong>Writer(s) : </Strong>${r.Writer}</li>
                    <li class="list-group-item"><Strong>Plot : </Strong>${r.Plot}</li>
                  </ul>
                </div>
              </div>
            </div>`

						// append component detail
						detailContainer.innerHTML = detail
					})
			})
		})
	})
