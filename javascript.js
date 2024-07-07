function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let result = getRandomInt(3);

    if (result === 0) {
        console.log('The computer chooses rock');
    } else if (result === 1) {
        console.log('The computer chooses paper');
    } else {
        console.log('The computer chooses scissors');
    }

    return result; // Return the computer's choice as a number
} 
 
function getHumanChoice(){
    let userChoice = prompt("Rock, Paper or Scissors?");
    userChoice = userChoice.toLowerCase();
    function getChoiceNumber(userChoice) {
        let value;

        if (userChoice === "rock") {
            value = 0;
        } else if (userChoice === "paper") {
            value = 1;
        } else if (userChoice === "scissors") { // Correct `else if`
            value = 2;
        } else {
            console.log("Invalid choice"); // Optionally handle invalid input
            return null; // Optionally return a special value for invalid input
        }
        return value;
    }
    let choiceNumber = getChoiceNumber(userChoice)
    console.log("You picked", userChoice)
    return(choiceNumber)
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === 1 && computerChoice === 0) {
        humanScore += 1
        console.log('Paper envelopes rock, you win one point')
    } else if (humanChoice === 2 && computerChoice === 1){
        humanScore += 1
        console.log('Scissors cut paper, you win one point')
    } else if (humanChoice === 0 && computerChoice === 2) {
        humanScore += 1
        console.log('Rocks smashes scissors, you win one point')
    } else if (humanChoice === computerChoice){
        console.log('Its a tie!!!')
    } else {
        computerScore += 1 
        console.log('The computer has bested you and won a point.' + ' Computer Score:',computerScore + ' Your Score:', humanScore);
    }
    console.log('The current score is, Computer score:',computerScore + ' Your Score:', humanScore, ': Lets play again');
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) { // Corrected loop condition
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }   if (humanScore === 5 ) {
        console.log('Congratulations you win!')
    }   else (computerScore === 5 );{
        console.log('The robot has bested you, try again')
    }
}

playGame()