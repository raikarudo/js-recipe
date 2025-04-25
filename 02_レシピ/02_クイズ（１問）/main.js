const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

const quiz = {
    text : "この星の名前は何でしょう？",
    image : "Ganymede.jpg",
    choices : [
        {
            text : "ゴリアテ",
            feedback : "残念！ゴリアテは旧約聖書に登場するダビデに石で殺される巨人だよ",
        },
        {
            text : "ガニメデ",
            feedback : "正解！ガニメデは木星の衛星で、太陽系で一番大きい衛星だよ",
        },
        {
            text : "ゼニガメ",
            feedback : "残念!ゼニガメはクサガメまたはニホンイシガメの幼体だよ",
        },
        {
            text : "ガノンドロフ",
            feedback : "残念！ガノンドロフはゼルダの伝説に登場する悪役だよ",
        }
        
    ],
}

const relodeQuiz = function(){
    quizText.textContent = "Q" + quiz.text
    quizImage.src = "./images/" + quiz.image
    choice1.textContent = quiz.choices[0].text
    choice2.textContent =  quiz.choices[1].text
    choice3.textContent =  quiz.choices[2].text
    choice4.textContent =  quiz.choices[3].text

}

const choose = function(choiceNumber){
    feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function(){
    choose(0)
}

choice2.onclick = function(){
    choose(1)

}

choice3.onclick = function(){
    choose(2)
}

choice4.onclick = function(){
    choose(3)
}

relodeQuiz()