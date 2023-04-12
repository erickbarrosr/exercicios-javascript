/* 6. Considerando que a distância entre a terra e a lua é de 384.400km,
escreva um programa que o usuário irá inserir a velocidade de uma nave espacial.
Com esse dado, calcule em quanto tempo (horas) a aeronave chegaria até a lua.
(Formula = 384.400/velocidade) */

const prompt = require("prompt-sync")();

let speed = Number(prompt("Digite a velocidade de trajeto: "));
let hours = 384400 / speed;

console.log("O tempo de trajeto seria de: ", hours + " horas");
