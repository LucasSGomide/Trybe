let arrayTest = [2, 3, 2, 5, 8, 2, 3]

function mostRepeatedNumber(arrayTest) {
  let repeatCounter = 0;
  let repeatChecker = 1;
  let mostRepeated = 0;

  for (index in arrayTest) {
    for (insideIndex in arrayTest) {
      if (arrayTest[index] === arrayTest[insideIndex]) {
        repeatCounter = repeatCounter += 1;
      } else if (repeatCounter > repeatChecker) {
          repeatChecker = repeatCounter;
          mostRepeated = arrayTest[index];
      }
    }
    repeatCounter = 0
  }
  return("O numero " + mostRepeated + " repetiu " + repeatChecker + " vezes !") 
}

console.log(mostRepeatedNumber(arrayTest))