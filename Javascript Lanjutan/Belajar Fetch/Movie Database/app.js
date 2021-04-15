// dom declaration
const movieContainer = document.querySelector(".row.movie-container")
const detailContainer = document.querySelector(".modal-body")
const inputSearch = document.querySelector(".input-search")
const btnSearch = document.querySelector(".btn-search")
const closeBtnDetail = document.querySelector("button.btn.btn-secondary")
const closeBgDetail = document.querySelector(".modal.fade")

// function declaration
// showMovies Function
const showMovies = (m) => {
	return `<div class="col-md-4 my-5">
  <div class="card">
    <img src="${m.Poster}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
      <a href="#" class="btn btn-primary btn-detail" data-bs-toggle="modal" data-imdbid="${m.imdbID}"
      data-bs-target="#movieDetailModal">Show Detail</a>
    </div>
  </div>
</div>`
}

// showDetails Function
const showDetails = (m) => {
	return `<!-- data from api -->
  <div class="container-fluid">
    <div class="row">
      <!-- img section -->
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid">
      </div>
      <!-- text detail section -->
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title}</h4></li>
          <li class="list-group-item"><Strong>Director(s) : </Strong>${m.Director}</li>
          <li class="list-group-item"><Strong>Actor(s) : </Strong>${m.Actors}</li>
          <li class="list-group-item"><Strong>Writer(s) : </Strong>${m.Writer}</li>
          <li class="list-group-item"><Strong>Plot : </Strong>${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`
}

// rendering data from api
const renderAPI = (input) => {
	fetch(`http://www.omdbapi.com/?apikey=41eec44f&s=${input.value}`)
		// success
		.then((response) => response.json())
		.then((data) => {
			const movies = data.Search

			let card = ""
			movies.forEach((m) => {
				card += showMovies(m)
			})

			// insert data movies from api
			movieContainer.innerHTML = card

			// event untuk tombol detail
			const btnList = document.querySelectorAll(".btn.btn-primary.btn-detail")
			btnList.forEach((btn) => {
				btn.addEventListener("click", function () {
					// get movie id
					const imdbID = this.dataset.imdbid

					// fetch movie id
					fetch(`http://www.omdbapi.com/?apikey=41eec44f&i=${imdbID}`)
						.then((r) => r.json())
						.then((m) => {
							// create component
							let detail = showDetails(m)

							// append component detail
							detailContainer.innerHTML = detail

							// close detail
							closeBtnDetail.addEventListener("click", (e) => {
								setTimeout(() => {
									detailContainer.innerHTML = ""
								}, 250)
								e.stopPropagation()
							})
							closeBgDetail.addEventListener("click", (e) => {
								setTimeout(() => {
									detailContainer.innerHTML = ""
								}, 250)
								e.stopPropagation
							})
						})
				})
			})
		})
		.catch((error) => {
			console.error("Erorr:", error)
		})
}

// checking the input search in not empty
if (inputSearch.value != "") {
	renderAPI(inputSearch)
}

// realtime search

// from input search
inputSearch.addEventListener("keyup", function (e) {
	// checking keyup == 'Enter
	if (e.key == "Enter") {
		renderAPI(this)
	}

	e.stopPropagation()
})

// from button search
btnSearch.addEventListener("click", (e) => {
	renderAPI(inputSearch)

	e.stopPropagation
})
