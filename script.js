const questionBlocks = document.querySelectorAll(".question-block")
const answers = document.querySelectorAll(".answer")
const arrowKeys = document.querySelectorAll(".arrow-image")

questionBlocks.forEach((questionBlock) => {
  questionBlock.addEventListener("click", () => {
    // hiding all other answers
    answers.forEach((answer, index) => {
      if (
        index != Number(questionBlock.dataset.index) &&
        answer.classList.contains("active")
      ) {
        answer.classList.replace("active", "inactive")
        questionBlocks[index].style.fontWeight = "unset"
        arrowKeys[index].style.rotate = "0deg"
      }
    })

    // showing answer for  clicked element
    if (
      answers[Number(questionBlock.dataset.index)].classList.contains(
        "inactive"
      )
    ) {
      answers[Number(questionBlock.dataset.index)].classList.replace(
        "inactive",
        "active"
      )

      questionBlock.style.fontWeight = "700"
      arrowKeys[Number(questionBlock.dataset.index)].style.rotate = "180deg"
    } else {
      answers[Number(questionBlock.dataset.index)].classList.replace(
        "active",
        "inactive"
      )
      questionBlock.style.fontWeight = "unset"
      arrowKeys[Number(questionBlock.dataset.index)].style.rotate = "0deg"
    }
  })
})
