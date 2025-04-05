const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let counter = 0

plusButton.onclick = function () {
  counter++
  display.textContent = counter
}
