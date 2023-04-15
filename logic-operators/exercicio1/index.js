/* Desenvolva um sistema para identificar se uma pessoa tem preferência em um embarque.
Para isso, o usuário precisará inserir duas informações: idade e tipo de bilhete.
Se a idade for maior do que 60 anos ou tipo de bilhete for “premium”, o usuário poderá passar a frente.
Imprima a mensagem: “Embarque preferencial: [true ou false]” */

const prompt = require("prompt-sync")();

let age = Number(prompt("Insira a sua idade: "));
let typeTicket = prompt("Insira o seu tipo de passagem: ");
let preference = age > 60 || typeTicket == "premium";

console.log("Embarque preferencial: ", preference);
