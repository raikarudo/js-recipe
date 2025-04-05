const timer = document.getElementById("display")
const button = document.getElementById("button")
const reset = document.getElementById("reset")

let count = 0

const countup = function () {
  count += 1
  timer.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id == null) {
    id = setInterval(countup, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

reset.onclick = function () {
  if (id == null) {
    count = 0
    timer.textContent = 0
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
