/* Escreva um programa que irá cadastrar um aluno em um sistema escolar.
Para isso, peça o usuário que insira: Nome Completo, Idade, Número da Matricula.
Em seguida, imprima as informações na tela. */

const prompt = require("prompt-sync")();

let fullName = prompt("Digite seu nome completo: ");
let age = prompt("Digite a sua idade: ");
let registrationNumber = prompt("Digite a sua matrícula: ");

console.log("NOME: ", fullName);
console.log("IDADE: ", age);
console.log("MATRÍCULA: ", registrationNumber);
