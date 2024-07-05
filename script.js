let result = "";
let userChoice;
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

scoreUpdater();

function scoreUpdater() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerChoice() {
  const randNumber = Math.random();
  let computerChoice;

  if (randNumber < 1 / 3) {
    computerChoice = "rock";
  } else if (randNumber < 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  return computerChoice;
}

function checkResult(userChoice) {
  let computerChoice = pickComputerChoice();
  if (userChoice === "rock") {
    if (computerChoice === "scissor") {
      result = "You win.";
    } else if (computerChoice === "rock") {
      result = "Tie.";
    } else {
      result = "You lose.";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      result = "You win.";
    } else if (computerChoice === "paper") {
      result = "Tie.";
    } else {
      result = "You lose.";
    }
  } else if (userChoice === "scissor") {
    if (computerChoice === "paper") {
      result = "You win.";
    } else if (computerChoice === "scissor") {
      result = "Tie.";
    } else {
      result = "You lose.";
    }
  } else {
    console.log("Please select a valid choice.");
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  scoreUpdater();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".choice-display"
  ).innerHTML = `(You) ${userChoice} -- ${computerChoice} (computer)`;
}
