/* Desenvolva uma programa que irá salvar o dado de 2 jogadores de futebol.
Peça o usuário que digite o nome dos jogares e seus respectivos clubes.
Em seguida, imprima as informações na tela. */

const prompt = require("prompt-sync")();

const player1 = prompt("Nome do jogador 1 é? ");
const player2 = prompt("Nome do jogador 2 é? ");
const team1 = prompt("Time do jogador 1 é? ");
const team2 = prompt("Time do jogador 2 é? ");

console.log("Jogador 1: ", player1);
console.log("Jogador 2: ", player2);
console.log("Time do ", player1 + " é ", team1);
console.log("Time do ", player2 + " é ", team2);
