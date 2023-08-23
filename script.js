const questionBlock = document.querySelectorAll(".question-block")
const answers = document.querySelectorAll(".answer")
const arrowKeys = document.querySelectorAll(".arrow-image")

for (let count = 0; count < questionBlock.length; count++) {
  questionBlock[count].addEventListener("click", () => {
    console.log("hey iam inside listerner")
    answers.forEach((answer, index) => {
      if (answer.classList.contains("active") && index != count) {
        answer.classList.replace("active", "inactive")
      }
      questionBlock[index].style.fontWeight = "unset"
      arrowKeys[index].style.rotate = "0deg"
    })
    let update = ""
    if (answers[count].classList.contains("inactive")) {
      console.log("in active")
      update = "active"
      //   answers[count].classList.replace("inactive", "active")
    } else if (answers[count].classList.contains("active")) {
      let update = "inactive"
      //   answers[count].classList.replace("active", "inactive")
    }
    if (update == "active") {
      answers[count].classList.replace("inactive", "active")
      console.log("gonna active")
    } else {
      answers[count].classList.replace("active", "inactive")
    }
    questionBlock[count].style.fontWeight = "700"
    arrowKeys[count].style.rotate = "180deg"
  })
}

// questionBlock[1].onclick = hi
// function hi() {
//   console.log("hi...")
// }
