const buttons = document.querySelectorAll(".btn");
const scoreboard = document.querySelector(".scoreboard");
const resultText = document.querySelector(".resultText");
const gameoverText = document.querySelector(".gameover-text");
const restartBtn = document.querySelector("#restart");

let playerHealth = 5;
let computerHealth = 5;

// return computers selection
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

// main logic of the game
function checkWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

buttons.forEach(item => {
    item.addEventListener("click", (e) => {
        // base case to stop counting
        if (isGameOver()) {
            return;
        }

        let humanSelection = e.target.id;
        let computerSelection = getComputerChoice();

        let result = checkWinner(humanSelection, computerSelection);

        switch (result) {
            case "player":
                resultText.textContent = `Impressive attack! The enemy lost one life, because the great power of your ${humanSelection} crushed his ${computerSelection}!`;
                computerHealth -= 1;
                break;
            case "computer":
                resultText.innerText = `Unfortunate defeat.. You lost one life, because your ${humanSelection} lacks of power against enemy's ${computerSelection}!`;
                playerHealth -= 1;
                break;
            default:
                resultText.textContent = `Hmm.. Two ${humanSelection}s means a draw, so no lives were lost. Let's try again.`;
                break;
        }

        scoreboard.textContent = `Player: ${playerHealth} | Computer: ${computerHealth}`;

        if (isGameOver() && (playerHealth > computerHealth)) {
            console.log("player won the game");
        } else if (isGameOver() && (playerHealth < computerHealth)) {
            console.log("computer won the game");
        }
    });
});

// checks if any of the score is 0
function isGameOver() {
    if (playerHealth === 0 || computerHealth === 0) {
        return true;
    }
    return false;
}

// restart the game
restartBtn.addEventListener("click", () => {
    window.location.reload();
})