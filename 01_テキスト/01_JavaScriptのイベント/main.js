const alertmessage = function () {
  alert("クリックしやがったな")
}

alertmessage()

const button = document.getElementById("button")

button.onclick = alertmessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function () {
  console.log("hello")
}

const logValue = function (e) {
  console.log(e)
}

document.onkeydown = function (e) {
  console.log(e.key)
}

inputText.oninput = logValue
inputDate.oninput = logValue
