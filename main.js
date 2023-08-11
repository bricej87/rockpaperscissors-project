let getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    }
    else {
        console.log('Please enter a valid choice.');
    }
}

let getComputerChoice = function () {
    let computerNumber = (Math.floor(Math.random() * 3));
    if (computerNumber == 0) {
        return 'rock';
    }
    else if (computerNumber == 1) {
        return 'paper';
    }
    else if (computerNumber == 2) {
        return 'scissors';
    }
}

const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        console.log('BOOM! You win!');
    }
    else if (userChoice === computerChoice) {
        console.log('It is a tie');
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('Sorry, the computer won.');
        }
        else {
            console.log('Congrats, you won!');
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('So close.');
        }
        else {
            console.log('More like Human Intelligence, am I right?');
        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('Better luck next time.');
        }
        else {
            console.log('Got em!');
        }
    }

}

let playGame = function () {
    let userChoice = getUserChoice();
    console.log(`You chose ${userChoice}.`);
    let computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}.`);
    determineWinner(userChoice, computerChoice);
}

playGame();
