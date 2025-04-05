const figure = document.getElementById("figure")

figure.onmouseover = function () {
  figure.classList.add("rounded")
}

figure.onmouseleave = function () {
  figure.classList.remove("rounded")
}
