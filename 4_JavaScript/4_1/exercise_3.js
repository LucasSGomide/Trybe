// Declarar variáveis

let numA = 4;
let numB = 7;
let numC = 10;
let maiorN = 0

// Programa que retorne o maior de três numeros:

if (numA > numB && numA > numC) {
  maiorN = numA
} else if (numB > numA && numB > numC) {
  maiorN = numB
} else {
  maiorN = numC
}

console.log(maiorN)