function countup(num) {
  counter += num
  count.textContent = counter
}
const count = document.getElementById("count")
const button_decrease = document.getElementById("decreace")
const button_increase = document.getElementById("increace")
const button_twice = document.getElementById("twice")

let counter = 0

button_decrease.onclick = () => countup(-1)
button_increase.onclick = () => countup(1)
button_twice.onclick = () => countup(counter)
