function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    switch(x){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let winner
    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    winner='tie'; 
                    break;
                case 'paper':
                    winner='computer';
                    break;
                case 'scissors':
                    winner='player';
                    break;
            }
            break;
        
        case 'paper':
            switch(computerSelection){
                case 'rock':
                    winner='player'; 
                    break;
                case 'paper':
                    winner='tie';
                    break;
                case 'scissors':
                    winner='computer';
                    break;
            }
            break;

        case 'scissors':
            switch(computerSelection){
                case 'rock':
                    winner='computer';
                    break;
                case 'paper':
                    winner='player';
                    break;
                case 'scissors':
                    winner='tie';
                    break;
            }
            break;
        default:
            winner='invalid entry from player'
    }
    return winner;
}

const computerSelection = computerPlay();
const playerSelection = prompt("Enter rock, paper or scissors");

console.log(computerSelection+playRound(playerSelection,computerSelection))