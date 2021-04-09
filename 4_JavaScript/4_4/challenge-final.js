let romanAlgarisms = {I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000,}

// for (let index in romanAlgarisms) {
//  console.log(index + " = " + romanAlgarisms[index])
// }

let wordTest = "XCIV"

let vetorRomano = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV',
'XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII',
'XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV','XXXV','XXXVI','XXXVII','XXXVIII','XXXIX','XL',
'XLI','XLII','XLIII','XLIV','XLV','XLVI','XLVII','XLVIII','XLIX','L','LI','LII','LIII','LIV',
'LV','LVI','LVII','LVIII','LIX','LX','LXI','LXII','LXIII','LXIV','LXV','LXVI','LXVII','LXVIII',
'LXIX','LXX','LXXI','LXXII','LXXIII','LXXIV','LXXV','LXXVI','LXXVII','LXXVIII','LXXIX','LXXX',
'LXXXI','LXXXII','LXXXIII','LXXXIV','LXXXV','LXXXVI','LXXXVII','LXXXVIII','LXXXIX','XC','XCI',
'XCII','XCIII','XCIV','XCV','XCVI','XCVII','XCVIII','XCIX','C'];

for (const key in vetorRomano) { 
  console.log(romanAlgarismsConverter(vetorRomano[key]));
}

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
      // console.log("Esquerda : " + numberKeeper[cont + 1] + " Direita : " + numberKeeper[cont])
      valueTwo = (numberKeeper[cont + 1] + numberKeeper[cont])
      sum += valueTwo
    }
  }
  if (numberKeeper.length % 2 != 0 && numberKeeper[lastNumber -1] > numberKeeper[lastNumber]) {
    sum -= numberKeeper[lastNumber]
  } else if (numberKeeper.length % 2 != 0 && numberKeeper[lastNumber -1] <= numberKeeper[lastNumber]) {
    sum += numberKeeper[lastNumber]
  } else if (numberKeeper.length == 1) {
    sum += numberKeeper[0]
  }

  return ("Algarismos : " + numberKeeper + " | Soma : " + sum)
}
// console.log(romanAlgarismsConverter(wordTest))