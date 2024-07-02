const options = ["rock", "paper", "scissors"];

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