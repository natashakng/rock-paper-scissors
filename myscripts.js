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

function game(){
    let playerScore = 0
    let compScore = 0
    let playerSelection
    let computerSelection
    
    for (let i=0; i<5; i++){
        playerSelection = prompt("Enter rock, paper or scissors");
        computerSelection = computerPlay();
        //console.log(playerSelection+computerSelection)
        switch(playRound(playerSelection,computerSelection)){
            case 'player':
                playerScore++;
                break;
            case 'computer':
                compScore++;
                break;
        }
    }
    //return ("player scored "+playerScore+" computer scored "+compScore); 
    console.log(playerScore)
    console.log(compScore)
    if(compScore===playerScore){
        return'tie game'
    }else if(compScore<playerScore){
        return'player wins'
    }else{
        return 'computer wins'
    }
}


console.log(game())