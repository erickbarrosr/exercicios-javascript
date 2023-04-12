/* Desenvolva um sistema que solicite ao usuário dois números.
Em seguida, calcule a média dos dois números. */

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));

console.log("A média dos dois números é: ", (n1 + n2) / 2);
