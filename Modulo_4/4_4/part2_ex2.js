let arrayTest = [2, 3, 6, 7, 10, 1];


function biggestNumberIndex(arrayTest) {
  let biggestNumber = arrayTest[0]

  for (let cont = 0; cont < arrayTest.length; cont += 1) {
    if (arrayTest[cont] > biggestNumber) {
      biggestNumber = arrayTest[cont]
    } 
  }
  return arrayTest[biggestNumber]
}

console.log(biggestNumberIndex(arrayTest))

