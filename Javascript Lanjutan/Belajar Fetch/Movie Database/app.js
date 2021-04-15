// dom declaration
const movieContainer = document.querySelector(".row.movie-container")
const detailContainer = document.querySelector(".modal-body")
const inputSearch = document.querySelector(".input-search")
const btnSearch = document.querySelector(".btn-search")
const closeBtnDetail = document.querySelector("button.btn.btn-secondary")
const closeBgDetail = document.querySelector(".modal.fade")
const inputSection = document.querySelector(".input-section")

const div = document.createElement("div")

// showMovies Function
const showMovies = (m) => {
	return `<div class="col-md-4 my-5">
  <div class="card" >
    <img src="${m.Poster}" class="card-img-top detail" data-imdbid="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#movieDetailModal">
    <div class="card-body">
      <h5 class="card-title detail underline" data-imdbid="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#movieDetailModal">${m.Title}</h5>
      <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
      <a href="#" class="btn btn-primary detail" data-bs-toggle="modal" data-imdbid="${m.imdbID}"
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

// alertFucntion
const showAlert = (res) => {
	// error handle
	let x = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
	div.classList.add(
		"col-md-8",
		"alert",
		"alert-warning",
		"alert-dismissible",
		"fade",
		"show",
		"mt-3"
	)
	div.innerHTML = `${res}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
	inputSection.appendChild(div)
}

// renderAPI Function
const renderAPI = async (input) => {
	const movies = await getMovies(input.value)
	
	if (movies) renderUIMovies(movies)

}

// render UI Movies
const renderUIMovies = (movies) => {
	let card = ""
	movies.forEach((m) => {
		card += showMovies(m)
	})
	// update UI movies
	movieContainer.innerHTML = card
}

// render UI detail
const renderUIDetail = (m) => {
	// create component
	let detail = showDetails(m)

	// append component detail
	detailContainer.innerHTML = detail
}

// fetch detail movie
const getDetailMovie = (target) => {
	return fetch(`http://www.omdbapi.com/?apikey=41eec44f&i=${target}`)
		.then((r) => r.json())
		.then((m) => {

			return m
		})
}

// fetch movies
const getMovies = (target) => {
	return fetch(`http://www.omdbapi.com/?apikey=41eec44f&s=${target}`)
	.then((response) => {
		if (!response.ok) {
			console.error(response.status, response.statusText);
			// console.log(Promise.reject(response));
			return Promise.reject(response)
		}
		return response.json()
	})
	.then((res) => {
		if (res.Response != "True") {
			return Promise.reject(res)
		}
		return res
	})
	.then((data) => {
		if (inputSection.childElementCount == 2) {
			inputSection.lastChild.classList.remove("show")
			setTimeout(() => {
				inputSection.lastChild.style.display = "none"
			}, 350)
		}
		
		return data.Search
	})
	.catch((err) => {
		if (err.Error) {
			showAlert(err.Error)
		} else {
			showAlert(`Error ${err.status} ${err.statusText}`)
		}
		// console.error(error.Error)
	})
}

// checking the input search in not empty
if (inputSearch.value != "") {
	renderAPI(inputSearch)
}

// event button detail
movieContainer.addEventListener('click', async function(e) {
	if (e.target.classList.contains('detail')) {
		const detailMovie = await getDetailMovie(e.target.dataset.imdbid)
		renderUIDetail(detailMovie)
	}

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

	e.stopImmediatePropagation()
})

// event input search
inputSearch.addEventListener("keyup", function (e) {
	// checking keyup == 'Enter
	if (e.key == "Enter") {
		renderAPI(this)
	}

	e.stopPropagation()
})

// event button search
btnSearch.addEventListener("click", (e) => {
	renderAPI(inputSearch)

	e.stopPropagation()
})
