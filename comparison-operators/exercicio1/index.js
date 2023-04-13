/* Desenvolva um código para identificar se os dois números inseridos são iguais. */

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));

console.log("Os números são iguais? ", n1 == n2);
