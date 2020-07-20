let romanAlgarisms = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000,}

// for (let index in romanAlgarisms) {
//  console.log(index + " = " + romanAlgarisms[index])
// }

let wordTest = "XCIV"

function romanAlgarismsConverter(wordTest) {
  let numberKeeper = [];
  let sum = 0;
  let valueOne;
  let valueTwo;
  let lastNumber = wordTest.length - 1

  for (letra in wordTest) {
    for (index in romanAlgarisms) {
      if (wordTest[letra] == index) {
        numberKeeper.unshift(romanAlgarisms[index])
      }
    }
  }
  for (cont = 0; cont < numberKeeper.length; cont += 2) {
    if (numberKeeper[cont + 1] < numberKeeper[cont]){
      valueOne = (numberKeeper[cont] - numberKeeper[cont + 1])
      sum += valueOne
    } else if (numberKeeper[cont + 1] >= numberKeeper[cont]) {
      console.log("Esquerda : " + numberKeeper[cont + 1] + " Direita : " + numberKeeper[cont])
      valueTwo = (numberKeeper[cont + 1] + numberKeeper[cont])
      sum += valueTwo
    }
  }
  if (numberKeeper.length % 2 != 0 && numberKeeper[lastNumber -1] > numberKeeper[lastNumber]) {
    sum -= numberKeeper[lastNumber]
  } else if (numberKeeper.length % 2 != 0 && numberKeeper[lastNumber -1] <= numberKeeper[lastNumber]) {
    sum += numberKeeper[lastNumber]
  }
  return ("lista : " + numberKeeper + " soma : " + sum)
}
console.log(romanAlgarismsConverter(wordTest))