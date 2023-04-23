/* Desenvolva uma sistema que através de uma função apresente a conversão do real para dólar,
euro e libra, utilizando o switch case. */

const prompt = require("prompt-sync")();

function currencyConverter(valor, moeda) {
  switch (moeda) {
    case "usd":
      return valor * 0.16;
      break;
    case "eur":
      return valor * 0.13;
      break;
    case "gbp":
      return valor * 0.11;
      break;
    default:
      return "Moeda não suportada.";
  }
}

console.log(currencyConverter(100, "usd")); // resultado esperado: 16
console.log(currencyConverter(100, "eur")); // resultado esperado: 13
console.log(currencyConverter(100, "gbp")); // resultado esperado: 11
console.log(currencyConverter(100, "jpy")); // resultado esperado: "Moeda não suportada."
