let playerScore = 0;
let computerScore = 0;

function playGame() {
    const choices = ['rock', 'paper', 'scissors'];

    while (playerScore < 5 && computerScore < 5) {
        // Get player's choice through a prompt
        let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

        // Validate the player's input
        if (!choices.includes(playerChoice)) {
            alert("Invalid choice! Please enter rock, paper, or scissors.");
            continue;
        }

        // Computer makes a random choice
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let resultMessage = "";

        // Determine the result
        if (playerChoice === computerChoice) {
            resultMessage = "It's a tie! You both chose " + playerChoice;
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            resultMessage = "You win! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " beats " + computerChoice + "!";
        } else {
            computerScore++;
            resultMessage = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice + "!";
        }

        // Show the result and current scores
        alert(resultMessage + "\n\nScore:\nPlayer: " + playerScore + " | Computer: " + computerScore);
    }

    // Declare the winner after 5 wins
    if (playerScore === 5) {
        alert("Congratulations! You won the game with 5 wins!");
    } else if (computerScore === 5) {
        alert("Game Over! The computer won with 5 wins!");
    }
}

// Start the game
playGame();