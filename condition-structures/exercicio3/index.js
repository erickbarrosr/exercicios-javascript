/* Desenvolva um sistema que leia a velocidade de um veiculo. Usando o operador ternário (? e :),
caso a velocidade seja maior do que 100, imprimia a mensagem: “Carro em alta velocidade",
caso contrário: “Velocidade normal”. */

const prompt = require("prompt-sync")();

let speed = prompt("Digite a velocidade do carro: ");

speed > 100
  ? console.log("Carro em alta velocidade!")
  : console.log("Carro em velocidade permitida!");
