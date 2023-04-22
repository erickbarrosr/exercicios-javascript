/* Desenvolva um sistema que leia a idade do usuário. Caso a idade seja maior que 70 anos, imprima a mensagem “Idoso”,
caso entre 30 e 70: “Adulto”, entre 20 e 30: “Jovem Adulto”, entre 15 e 20: “Jovem”, menor do que 15: “Criança ou adolescente” */

const prompt = require("prompt-sync")();

let age = Number(prompt("Digite a idade: "));

if (age > 70) {
  console.log("Idoso!");
} else if (age >= 30 && age <= 70) {
  console.log("Adulto!");
} else if (age >= 20 && age <= 30) {
  console.log("Jovem Adulto!");
} else if (age >= 15 && age <= 20) {
  console.log("Jovem!");
} else {
  console.log("Criança ou Adolescente!");
}
