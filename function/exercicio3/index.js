/* Escreva um algoritmo que através de uma função identifique se o nome de uma marca de carros inserida
pelo usuário é de origem alemã (Volkswagen, Audio, BMW, Mercedes). */

const prompt = require("prompt-sync")();

function germanBrands(brand) {
  return (
    brand == "volkswagen" ||
    brand == "audi" ||
    brand == "bmw" ||
    brand == "mercedes"
  );
}

let brand = prompt("Digite o nome de uma montadora: ");

let result = germanBrands(brand);

console.log("A montadora é Alemã? ", result);
