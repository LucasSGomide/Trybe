let arrayTest = [2, 4, 6, 7, 10, 0, -3];


function lowestNumberIndex(arrayTest) {
  let lowestNumber = arrayTest[0];
  let lowestIndex = 0;

  for (let chave in arrayTest) {
    if (arrayTest[chave] < lowestNumber) {
      lowestNumber = arrayTest[chave]
      lowestIndex = chave;
    } 
  }
  return ("Menor numero = " + lowestNumber + " Menor índice = " + lowestIndex)
}

console.log(lowestNumberIndex(arrayTest))

