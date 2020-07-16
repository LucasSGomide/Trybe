let arrayTest = [2, 3, 6, 7, 10, 1];


function biggestNumberIndex(arrayTest) {
  let biggestNumber = arrayTest[0];
  let biggestIndex = 0;

  for (let chave in arrayTest) {
    if (arrayTest[chave] > biggestNumber) {
      biggestNumber = arrayTest[chave]
      biggestIndex = chave;
    } 
  }
  return biggestIndex
}

console.log(biggestNumberIndex(arrayTest))

