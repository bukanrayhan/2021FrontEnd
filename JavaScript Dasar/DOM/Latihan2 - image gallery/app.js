const container = document.querySelector(".container");
const thumbnail = document.querySelector(".jumbo");

container.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    thumbnail.src = e.target.src;
    thumbnail.classList.add("fade");

    setTimeout(() => {
      thumbnail.classList.remove("fade");
    }, 500);
  }
});
