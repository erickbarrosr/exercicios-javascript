/* Crie um código que solicite ao usuário digitar três números.
Em seguida, apresente o resultado da soma, subtração, multiplicação dos três. */

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));
let n3 = Number(prompt("Digite mais um número: "));

console.log("A soma entre os três números é: ", n1 + n2 + n3);
console.log("A subtração entre eles é: ", n1 - n2 - n3);
console.log("A multiplicação é: ", n1 * n2 * n3);
