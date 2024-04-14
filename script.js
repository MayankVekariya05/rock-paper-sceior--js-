let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg_box = document.querySelector("#para");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

const getCompChoice = () => {
  let option = ["rock", "paper", "scissor"];
  let idx = Math.floor(Math.random() * 3);
  return option[idx];
};

function drawgame() {
  console.log("game is Draw");
  msg_box.innerText = "game is draw";
  msg_box.style.backgroundColor = "rgb(5, 5, 35)";
}

const playgame = (userChoice) => {
//   console.log("your choice is : ", userChoice);
  const compChoice = getCompChoice();
//   console.log("computer choice is : ", compChoice);
  
  if (compChoice === userChoice) {
    drawgame();
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    console.log("you Win");
    userScore++;
    user_score.innerText = userScore;
    msg_box.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg_box.style.backgroundColor = "green";
  } else {
    console.log("you lose");
    compScore++;
    comp_score.innerText = compScore;
    msg_box.innerText =
    msg_box.innerText = `you lose.  ${compChoice} beats ${userChoice}`;
    msg_box.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playgame(userChoice);
  });
});
