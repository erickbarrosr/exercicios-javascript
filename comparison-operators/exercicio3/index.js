/* Desenvolva um sistema para receber duas velocidades de dois pilotos de fórmula 1.
Em seguida, apresente o que teve maior velocidade. */

const prompt = require("prompt-sync")();

let speed1 = Number(prompt("Digite a velocidade do primeiro piloto: "));
let speed2 = Number(prompt("Digite a velocidade do segundo piloto: "));

console.log(
  "O piloto que teve a maior velocidade foi o primeiro? ",
  speed1 > speed2
);
console.log(
  "O piloto que teve a maior velocidade foi o segundo? ",
  speed2 > speed1
);
