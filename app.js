'use strict';

/*
    8kyu. Rock Paper Scissors!

Let's play! You have to return which player won! In case of a draw return Draw!.
Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

const rps = (p1, p2) => {
    switch (true) {
        case p1 == p2:
            return 'Draw!';
        case p1 == 'scissors' && p2 == 'paper':
            return 'Player 1 won!';
        case p1 == 'paper' && p2 == 'scissors':
            return 'Player 2 won!';
        case p1 == 'paper' && p2 == 'rock':
            return 'Player 1 won!';
        case p1 == 'rock' && p2 == 'paper':
            return 'Player 2 won!';
        case p1 == 'scissors' && p2 == 'rock':
            return 'Player 2 won!';
        case p1 == 'rock' && p2 == 'scissors':
            return 'Player 1 won!';
    }
};
console.log(rps('paper', 'paper'));


/*

or: 
const rps1 = (p1, p2) => {
    const rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    if (p1 === p2) return 'Draw!';
    if (p2 === rules[p1]) {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
};

console.log(rps1('rock', 'scissors'));

*/