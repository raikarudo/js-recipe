const container = document.querySelectorAll(".cards-container")
const plusmessage = document.querySelectorAll(".plus-message")
const todo_geek = ["Trelloを作る", "ゼミ参加"]
const todolists_univ = ["これをやる", "それをやる"]
const todolist_home = ["あれをやる", "どれをやる"]

// 初期カード追加（最後の要素のみイベント設定）
for (let i = 0; i < todo_geek.length; i++) {
  let card_0 = createcard(todo_geek[i])
  container[0].append(card_0)
  if (i === todo_geek.length - 1) addevent(card_0, container[0])
}

for (let i = 0; i < todolists_univ.length; i++) {
  let card_1 = createcard(todolists_univ[i])
  container[1].append(card_1)
  if (i === todolists_univ.length - 1) addevent(card_1, container[1])
}

for (let i = 0; i < todolist_home.length; i++) {
  let card_2 = createcard(todolist_home[i])
  container[2].append(card_2)
  if (i === todolist_home.length - 1) addevent(card_2, container[2])
}

// ＋ボタンクリック時の処理
for (let i = 0; i < plusmessage.length; i++) {
  plusmessage[i].onclick = function () {
    let blank = createcard("")
    container[i].append(blank)
    // 既存の最後のカードのイベントを解除
    const prevLast = container[i].lastElementChild.previousElementSibling
    if (prevLast) prevLast.onkeydown = null
    // 新しいカードにイベント設定
    addevent(blank, container[i])
  }
}

function createcard(text) {
  const card = document.createElement("div")
  card.className = "card input-container"

  const todo = document.createElement("input")
  todo.className = "input-todo"
  todo.value = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  return card
}

function addevent(old_card, container) {
  const isLast = old_card === container.lastElementChild

  if (isLast) {
    old_card.onkeydown = function (e) {
      if (e.key === "Enter") {
        const new_card = createcard("")
        container.append(new_card)
        old_card.onkeydown = () => addevent(old_card, container) // 新しいカードに設定
        addevent(new_card, container) // 新しいカードに設定
      }
    }
  } else {
    old_card.onkeydown = null
  }
}
