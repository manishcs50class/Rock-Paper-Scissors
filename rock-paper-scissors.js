function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"];
    var randomOption = options[(Math.floor(Math.random() * options.length))];
    return randomOption;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result = "You lose.";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        result = "You win.";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        result = "You lose.";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        result = "You win.";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result = "You win.";
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        result = "You lose.";
    } else if (playerSelection === computerSelection) {
        result = "Its a draw.";
    }
    return result
}

function game() {
    let computerScores = 0
    let playerScores = 0
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const compSelection = getComputerChoice();
            const playerSelection = button.innerHTML;
            const roundResult = playRound(playerSelection, compSelection);

            // div to show round result
            const resultDiv = document.createElement('div');

            const resultDivTextNode = document.createTextNode(roundResult);
            resultDiv.appendChild(resultDivTextNode);


            // append the newly created div element to the body
            document.body.appendChild(resultDiv);

            // add corresponding scores
            if (roundResult === 'You win.') {
                playerScores += 1;
            } else if (roundResult === 'You lose.') {
                computerScores += 1;
            }

            console.log(playerScores);
            console.log(computerScores);


            // compute and display game results
            if (Number(computerScores) === 5 || Number(playerScores) === 5) {
                // div to show game result
                const gameResultDiv = document.createElement('div');
                let textNode;
                if (Number(computerScores) > Number(playerScores)) {
                    textNode = document.createTextNode("The Winner of this game is Computer.")
                } else if (Number(computerScores) == Number(playerScores)) {
                    textNode = document.createTextNode("Its a draw.")
                } else {
                    textNode = document.createTextNode("The Winner of this game is Human.")
                }

                // append the newly created div element to the body
                gameResultDiv.appendChild(textNode);
                document.body.appendChild(gameResultDiv);

                // resetting scores after displaying game results
                computerScores = 0;
                playerScores = 0;
                function empty(element) {
                    element.textContent = '';
                }

                let parent = document.getElementById('container');
                empty(parent);

            }

        });
    });
}

game();
// function empty(element) {
//     while (element.firstElementChild) {
//         element.firstElementChild.remove();
//     }
// }

// let parent = document.getElementById("parent");
// empty(parent);


