/* Crie uma solução para identificar entre dois alunos, qual teve a nota mais baixa. */

const prompt = require("prompt-sync")();

let grade = Number(prompt("Digite a nota do primeiro aluno: "));
let grade2 = Number(prompt("Digite a nota do segundo aluno: "));

console.log("A nota mais baixa foi do primeiro aluno? ", grade < grade2);
console.log("A nota mais baixa foi do segundo aluno? ", grade2 < grade);
