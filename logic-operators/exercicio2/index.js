/* Para uma criança participar das aulas de natação do colégio, ela deve ter menos de 10 anos e estar na série 5.
Desenvolva um sistema em que o usuário insira a idade da criança e também a respectiva série.
Em seguida, imprima se poderá ou não participar das aulas de natação. */

const prompt = require("prompt-sync")();

let age = Number(prompt("Digite a idade da criança: "));
let series = Number(prompt("Digite a série da criança: "));
let condition = age < 10 && series == 5;

console.log("Pode participar das aulas? ", condition);
