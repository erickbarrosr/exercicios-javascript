/* Desenvolva um programa que converta uma quantidade de horas 
inseridas pelo usuário em minutos e, em seguida, em segundos. */

const prompt = require("prompt-sync")();

let hours = Number(prompt("Digite a quantidade de horas a ser convertida: "));
let minutes = hours * 60;
let seconds = minutes * 60;

console.log("Convertido para minutos é: ", minutes);
console.log("Convertido para segundos é: ", seconds);
