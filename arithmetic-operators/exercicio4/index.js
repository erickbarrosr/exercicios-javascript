/* Desenvolva um programa que leia um número.
Em seguida, usando os operadores de decremento, imprima o número anterior. */

const prompt = require("prompt-sync")();

let number = Number(prompt("Digite um número: "));

console.log("O decremento desse número é: ", --number);
