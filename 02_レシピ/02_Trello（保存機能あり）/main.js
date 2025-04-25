const containers = document.querySelectorAll(".cards-container")
const plusMessages = document.querySelectorAll(".plus-message")
let todolist = JSON.parse(localStorage.getItem("todolist") || "[[],[],[]]")

// カード生成
function createCard(text, list, container, index) {
  const card = document.createElement("div")
  card.className = "card input-container"

  const todo = document.createElement("input")
  todo.className = "input-todo"
  todo.value = text
  card.append(todo)

  // 入力内容をlistに反映
  todo.oninput = function () {
    list[index] = todo.value
    localStorage.setItem("todolist", JSON.stringify(todolist))
  }

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    // 最新のindexを取得
    const cards = Array.from(container.children)
    const currentIndex = cards.indexOf(card)

    if (currentIndex > -1) {
      list.splice(currentIndex, 1) // 配列からも削除
      localStorage.setItem("todolist", JSON.stringify(todolist))
    }
    card.remove() // DOMから削除
  }

  card.append(deleteButton)

  return card
}

// カードにイベントを追加
function addEvent(card, list, container) {
  card.onkeydown = function (e) {
    if (e.key === "Enter") {
      // 新しいカードを追加
      const newCard = createCard("", list, container)
      container.append(newCard)
      list.push("") // 空のタスクを追加
      localStorage.setItem("todolist", JSON.stringify(todolist))
      addEvent(newCard, list, container)

      // 前のカードのイベントを解除
      card.onkeydown = null
    }
  }
}

// 初期カード描画（各リストごと）
for (let i = 0; i < todolist.length; i++) {
  const fragment = document.createDocumentFragment()
  for (let j = 0; j < todolist[i].length; j++) {
    const card = createCard(todolist[i][j], todolist[i], containers[i], j)
    fragment.append(card)
    if (j === todolist[i].length - 1) {
      addEvent(card, todolist[i], containers[i])
    }
  }
  containers[i].append(fragment)
}

// ＋ボタンのクリックイベント
for (let i = 0; i < plusMessages.length; i++) {
  plusMessages[i].onclick = function () {
    todolist[i].push("") // 先に空要素を追加
    const blankCard = createCard(
      "",
      todolist[i],
      containers[i],
      todolist[i].length - 1,
    )
    containers[i].append(blankCard)
    localStorage.setItem("todolist", JSON.stringify(todolist))

    const prevLast = containers[i].children[containers[i].children.length - 2]
    if (prevLast) prevLast.onkeydown = null
    addEvent(blankCard, todolist[i], containers[i])
  }
}
