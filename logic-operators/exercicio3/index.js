/* Para se qualificar para o melhor jogador de vôlei do mundo, o candidato deverá ter marcado durante a temporada
uma pontuação maior ou igual a 50 pontos, ter mais de 3 anos de carreira e também
ter fornecido pelo menos 30 assistências. Desenvolva um programa que leia o nome, pontuação, tempo de carreira e
numero de assistências. Em seguida, imprima uma mensagem se ele se qualifica ou não para ser candidato a melhor do mundo. */

const prompt = require("prompt-sync")();

let name = prompt("Digite o nome do jogador(a): ");
let score = Number(prompt("Digite a pontuação: "));
let career = Number(prompt("Digite o tempo de carreira: "));
let assists = Number(prompt("Digite o número de assistências: "));
let condition = score >= 50 && career > 3 && assists >= 30;

console.log("O jogador ", name + " pode ser o melhor do mundo? ", condition);
