let romanAlgarisms = {I : 1, IV : 4, V : 5, IX: 9, X : 10, XL : 40, L : 50, XC : 90, C : 100, CD : 400, D : 500, CM : 900, M : 1000,}

// for (let index in romanAlgarisms) {
//  console.log(index + " = " + romanAlgarisms[index])
// }

let wordTest = "VI"

function romanAlgarismsConverter(wordTest) {
   let firstAlgarism ;
   let secondAlgarism;
   let sum = 0

  for (let index in romanAlgarisms) {
    for (let cont = 0; cont < wordTest.length; cont += 1) {
      if (wordTest[cont] == index && cont == 0) {
        firstAlgarism = romanAlgarisms[index];
      } else if (wordTest[cont] == index && cont == 1) {
        secondAlgarism = romanAlgarisms[index]
      }
    }
  }
  if (firstAlgarism > secondAlgarism) {
    sum += firstAlgarism + secondAlgarism
  } else if (firstAlgarism < secondAlgarism || secondAlgarism){
    sum += secondAlgarism - firstAlgarism
  } else if (firstAlgarism) {
    sum += firstAlgarism
  } else if (secondAlgarism) {
    sum += secondAlgarism
  }
  return ("Primeiro algarismo: " + firstAlgarism + " segundo algarismo : " + secondAlgarism + " operação : " + sum)
}
console.log(romanAlgarismsConverter(wordTest))