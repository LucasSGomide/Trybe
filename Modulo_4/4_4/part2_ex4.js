let arrayTest = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];


function biggestWordCheck(arrayTest) {
  let biggestWord = arrayTest[0];
  let numOfCharacters = 0;

  for (name in arrayTest) {
    let wordCheck = arrayTest[name].length
    if (biggestWord.length <= wordCheck) {
      biggestWord = arrayTest[name]
      numOfCharacters = biggestWord.length
    }
  }
  return ("Biggest name: " + biggestWord + " Number of characters: " + numOfCharacters) 
}


console.log(biggestWordCheck(arrayTest))