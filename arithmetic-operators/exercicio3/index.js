/* Desenvolva um programa que leia um número.
Em seguida, usando os operadores de incremento, imprima o número seguinte. */

const prompt = require("prompt-sync")();

let number = Number(prompt("Digite um número: "));

console.log("O número seguinte é: ", ++number);
