/* Para um número ser ímpar, o resultado do módulo (%) tem que ser diferente de zero.
Desenvolva um programa que identifique se o número inserido pelo usuário é impar. */

const prompt = require("prompt-sync")();

let number = Number(prompt("Digite um número: "));
let condition = number % 2 !== 0;

console.log("O número é ímpar? ", condition);
