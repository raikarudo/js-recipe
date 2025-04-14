const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")


inputElement.onkeydown = function(e){
    if(e.key === "Enter"){
        const card = createcard(inputElement.value)
        console.log(inputElement)
        container.append(card)
        inputElement.value = ""
    }
}

const createcard = function(text){

    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    card.append(todo)

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    deleteButton.onclick = function(){
        card.remove()
    }

    card.append(deleteButton)

    return card
}
