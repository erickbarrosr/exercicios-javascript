/* Para um clube europeu ter chances de se classificar para Champions League, ele deverá ter feito mais de 60 pontos
durante o campeonato. Caso tenha feito mais de 75, as chances são maiores. Desenvolva uma solução que leia o nome e pontuação
do time. Em seguida, usando as estruturas condicionais, caso a pontuação seja maior do que 75,
imprima “Excelentes chances de classificação”. Caso entre 60 e 75, imprima “Boas chances de se classificar".
Caso contrário: “Chances baixas de se classificar”. */

// Importação da biblioteca

const prompt = require("prompt-sync")();

// Declaração de variáveis

let name = prompt("Digite o nome do time: ");
let score = prompt("Digite a pontuação do time: ");

// Estrutura de condição

if (score > 75) {
  console.log("Excelentes chances de classificação!");
} else if (score >= 60 && score <= 75) {
  console.log("Boas chances de se classificar!");
} else {
  console.log("Chances baixas de se classificar!");
}
