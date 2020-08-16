let squares = document.querySelectorAll(".square")
let squreCount = 2
// EASY
document.querySelector("#easy").addEventListener("click", () => {
    if (document.querySelector("#easy").checked) {
        document.querySelector("#labelHard").classList.remove("active")
        document.querySelector("#labelEasy").classList.add("active")
        squreCount = 2;
        newGame()
        squares[3].style.display = "none"
        squares[4].style.display = "none"
        squares[5].style.display = "none"
    }
})
// HARD
document.querySelector("#hard").addEventListener("click", () => {
    if (document.querySelector("#hard").checked) {
        document.querySelector("#labelEasy").classList.remove("active")
        document.querySelector("#labelHard").classList.add("active")
        squreCount = 5;
        newGame()
        squares[3].style.display = "inline-block"
        squares[4].style.display = "inline-block"
        squares[5].style.display = "inline-block"
    }
})
let correctSquare
// NEW GAME
function newGame() {
    correctSquare = squares[Math.round(Math.random() * squreCount)]
    document.querySelector("#correct").style.backgroundColor = "cornflowerblue"
    document.querySelector("#comment").style.visibility = "hidden"
    squares.forEach(square => {
        square.classList.remove("wrong")
        let red = Math.round(Math.random() * 255)
        let green = Math.round(Math.random() * 255)
        let blue = Math.round(Math.random() * 255)
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        square.addEventListener("click", () => isCorrect(square))
    });
    
    document.querySelector("h1").textContent = `Guess the color: \n ${correctSquare.style.backgroundColor}`
}
// CHECK SQUARE
function isCorrect(square) {
    document.querySelector("#comment").style.visibility = "visible"
    if (square.style.backgroundColor !== correctSquare.style.backgroundColor) {
        square.classList.add("wrong")
        document.querySelector("#comment").textContent = `Try again!`
    } else {
        squares.forEach(square => {
            square.style.backgroundColor = correctSquare.style.backgroundColor
            square.classList.remove("wrong")
            document.querySelector("#comment").textContent = `Correct!`
        })
        document.querySelector("#correct").style.backgroundColor = correctSquare.style.backgroundColor
        $("#correctModal").modal('show');
    }
}
newGame()
document.querySelector("#newGame").addEventListener("click", newGame)
document.querySelector("#modalNewGame").addEventListener("click", ()=>{
    $("#correctModal").modal('hide');
    newGame()
})