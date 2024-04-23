let userMove = "";
let computerMove = "";
let result = "";
let game = JSON.parse(localStorage.getItem('game')) || {
    wins: 0,
    loses: 0,
    Ties: 0
}

let gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];

function generateComputerMove() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) computerMove = 'Rock';
    else if (randNum == 1) computerMove = 'Paper';
    else computerMove = 'Scissors';
}

console.log(computerMove)

function evaluateMoves(userMove, computerMove) {
    if (userMove === computerMove) {
        result = "Tie";
    }
    else if (userMove === "Rock" && computerMove === "Paper") {
        result = "Lose";
    }
    else if (userMove === "Rock" && computerMove === "Scissors") {
        result = "Win";
    }
    else if (userMove === "Paper" && computerMove === "Rock") {
        result = "Win";
    }
    else if (userMove === "Paper" && computerMove === "Scissors") {
        result = "Lose";
    }
    else if (userMove === "Scissors" && computerMove === "Rock") {
        result = "Lose";
    }
    else if (userMove === "Scissors" && computerMove === "Paper") {
        result = "Win";
    }
}

function resetGame() {
    game = {
        wins: 0,
    loses: 0,
    Ties: 0
    }
    gameHistory = [];
    localStorage.setItem();
    localStorage.setItem('game', JSON.stringify(game));
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
    renderGameSummary();
    renderGameHistory();
}