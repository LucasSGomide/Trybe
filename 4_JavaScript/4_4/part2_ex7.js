let word = "joaofernando";
let wordEnding = "fernan";

function suffixChecker(word, wordEnding) {
  let counter = 0;
  let limitWord = word.length;
  let limitWordSuffix = wordEnding.length;
  let sameSuffix = false;

  for (let cont = 1; cont <= 2; cont += 1) {
    if (word[limitWord - cont] === wordEnding[limitWordSuffix - cont]) {
      counter += 1;
      console.log(counter)
    }
  } if (counter === 2) {
    sameSuffix = true;
  } else {
    sameSuffix = false;
  }
  return(sameSuffix)
}

console.log(suffixChecker(word, wordEnding))
