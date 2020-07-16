// Declaração de variáveis

let numA = 8;
let numB = 10;
let numC = 2;



// Software that returns true if any of the variables is an odd number.
function isOdd(numA, numB, numC) {
  let isOdd = false

  if ((numA % 2 != 0) || (numB % 2 != 0) || (numC % 2 != 0)) {
    return isOdd = true
  } else {
    return isOdd
  }
}

console.log(isOdd(numA, numB, numC))
 