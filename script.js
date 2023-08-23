const questionBlock = document.querySelectorAll(".question-block")
const answers = document.querySelectorAll(".answer")
const arrowKeys = document.querySelectorAll(".arrow-image")

for (let count = 0; count < questionBlock.length; count++) {
  questionBlock[count].addEventListener("click", () => {
    answers.forEach((answer, index) => {
      if (answer.classList.contains("active")) {
        answer.classList.replace("active", "inactive")
      }
      questionBlock[index].style.fontWeight = "unset"
      arrowKeys[index].style.rotate = "0deg"
    })

    if (answers[count].classList.contains("inactive")) {
      answers[count].classList.replace("inactive", "active")
    } else {
      answers[count].classList.replace("active", "inactive")
    }

    questionBlock[count].style.fontWeight = "700"
    arrowKeys[count].style.rotate = "180deg"
  })
}
