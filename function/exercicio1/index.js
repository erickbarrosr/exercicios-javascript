/* Desenvolva um sistema que execute uma função para calcular a média de 4 números. */

// importação da biblioteca

const prompt = require("prompt-sync")();

// declaração da função

function average(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}

// entrada de dados

let number1 = Number(prompt("Digite um número: "));
let number2 = Number(prompt("Digite um número: "));
let number3 = Number(prompt("Digite um número: "));
let number4 = Number(prompt("Digite um número: "));

// execução da função na variável result

let result = average(number1, number2, number3, number4);

// impressão para o usuário

console.log("A média dos 4 números é: ", result);
