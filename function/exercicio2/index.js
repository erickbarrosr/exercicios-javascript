/* Crie um sistema que através de uma função converta a quantidade de horas e minutos (1h = 60 minutos). */

const prompt = require("prompt-sync")();

function hoursConverter(hours) {
  return hours * 60;
}

let hours = Number(prompt("Digite a quantidade de horas: "));

let result = hoursConverter(hours);

console.log("O valor em minutos é: ", result);
