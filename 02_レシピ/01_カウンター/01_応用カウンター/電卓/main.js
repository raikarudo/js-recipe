const answer = document.getElementById("answer")
const inputs = document.getElementById("input")
const equal = document.getElementById("=")

let counter = 0

equal.onclick = function () {
  counter = 0
  for (let i = 0; i < inputs.children.length; i++) {
    counter += Number(inputs.children[i].value)
  }
  answer.textContent = counter
}
