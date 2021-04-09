// Declaração de variáveis

let numA = 8;
let numB = 10;
let numC = 2;



// Software that returns true if any of the variables is an even number.
function isEven(numA, numB, numC) {
  let isPair = false

  if ((numA % 2 === 0) || (numB % 2 === 0) || (numC % 2 === 0)) {
    return isPair = true
  } else {
    return isPair
  }
}

console.log(isEven(numA,numB,numC))