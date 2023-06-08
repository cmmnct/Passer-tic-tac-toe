"use strict";

class Player {  // class definities beginnen altijd met een hoofdletter

    name = '';
    positions = [];
    score = 0;

    constructor(myName) {
        this.name = myName; // met 'this' verwijzen we altijd naar een property van een class
    }

}

function onClickField(evt) {
    alert(evt.target.dataset.index);
}

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]    
]

const playerX = new Player('x'); // instantie van een class
const playerY = new Player('y');

console.log(playerX, playerY)

console.log(Math.random());

let currentPlayer    // hoe kiezen we de currentPlayer?

