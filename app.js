const rockButton = document.getElementById('user-rock'); 
const paperButton = document.getElementById('user-paper'); 
const scissorsButton = document.getElementById('user-scissors');
const outcomeBanner = document.getElementById('outcome');
const opponentChoice = document.getElementById('opponent-choice');

rockButton.addEventListener("click", function () {
    console.log('You clicked Rock!');
    // Generate Computer Choice
    const computerChoice = generateComputerChoice();
    console.log(computerChoice)
    // Compare User and Computer to see who won
    if (computerChoice === "ROCK") {
        console.log("It's a draw!");
        outcomeBanner.innerHTML = "It's a draw!";
    }
    else if (computerChoice === "PAPER") {
        console.log("You we're defeated!");
        outcomeBanner.innerHTML = "You we're defeated!";
    }
    else if (computerChoice === "SCISSORS") {
        console.log("You're Victorious!");
        outcomeBanner.innerHTML = "You're Victorious!";
    }
    opponentChoice.innerHTML = computerChoice;
    // Show User Who Won

    // Start new game
}); 
paperButton.addEventListener("click", function () {
    console.log('You clicked Paper!');
    const computerChoice = generateComputerChoice();
    opponentChoice.innerHTML = computerChoice;
    // Generate Computer Choice

    // Compare User and Computer to see who won

    // Show User Who Won

    // Start new game
}); 
scissorsButton.addEventListener("click", function () {
    console.log('You clicked Scissors!');
    const computerChoice = generateComputerChoice();
    opponentChoice.innerHTML = computerChoice;
    // Generate Computer Choice

    // Compare User and Computer to see who won

    // Show User Who Won

    // Start new game
}); 

function generateComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    if (choice === 0) {
        return "ROCK";
    }
    else if (choice === 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}



