const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let validatedInput = false;

    while (validatedInput === false) {
        const choice = prompt("Rock, paper or scissors", options[Math.floor(Math.random() * 3)]);

        if (choice == null) {
            continue;
        }

        const validatedChoice = choice.trim().toLowerCase();
        if (options.includes(validatedChoice)) {
            validatedInput = true;
            return validatedChoice;
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie. ${humanChoice} ties ${computerChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        return `You win. ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore += 1;
        return `You lose. ${computerChoice} beats ${humanChoice}`;
    }
}