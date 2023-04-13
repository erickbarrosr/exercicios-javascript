/* Escreva um algoritmo para identificar se
o nome inserido pelo usuário é diferente do seu. */

const prompt = require("prompt-sync")();

const myName = "Erick";
let usuaryName = prompt("Digite o seu nome: ");

console.log("O nome é diferente: ", usuaryName !== myName);
