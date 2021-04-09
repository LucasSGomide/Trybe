// Declarar variáveis

let numA = 4;
let numB = 7;
let numC = 10;
let maiorN = 0;

// Programa que retorne o maior de três numeros:

function maiorDeTres(numA, numB, numC) {
  if (numA > numB && numA > numC) {
    return (maiorN = numA)
  } else if (numB > numA && numB > numC) {
    return (maiorN = numB)
  } else {
    return (maiorN = numC)
  }
}

console.log(maiorDeTres(numC, numB, numC))