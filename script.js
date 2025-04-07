console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):");
  while (choice === null || !["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    choice = prompt("Enter your choice (rock, paper, or scissors):");
  }
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice;
    let roundResult = "";

    if (human === computer) {
      roundResult = `It's a tie! Both chose ${human}.`;
    } else if (
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
    ) {
      roundResult = `You win! ${human} beats ${computer}.`;
      humanScore++;
    } else {
      roundResult = `You lose! ${computer} beats ${human}.`;
      computerScore++;
    }

    const scoreUpdate = `Current Score - You: ${humanScore}, Computer: ${computerScore}`;
    console.log(roundResult);
    console.log(scoreUpdate);
    alert(`${roundResult}\n${scoreUpdate}`);
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  const finalScore = `Final Score - You: ${humanScore}, Computer: ${computerScore}`;
  console.log(finalScore);
  let finalMessage = "";
  if (humanScore > computerScore) {
    finalMessage = "You win the game!";
  } else if (computerScore > humanScore) {
    finalMessage = "Computer wins the game!";
  } else {
    finalMessage = "The game is a tie!";
  }
  console.log(finalMessage);
  alert(`${finalScore}\n${finalMessage}`);
}

playGame();

