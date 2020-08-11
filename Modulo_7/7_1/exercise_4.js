// Return biggest word

const getLongestWord = phrase => {
  let longestWord = 'a';
  let words = phrase.split(' ');
  for (let word in words) {
    if (words[word].length > longestWord.length) {
      longestWord = words[word];
    }
  }
  return longestWord;
}

console.log(getLongestWord('qual a maior palavra desta frase aqui?'));
