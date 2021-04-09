const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = wordArr => {
  let newArr = []
  for (word in wordArr) {
    newArr.push(wordArr[word].length)
  } 
  return newArr
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);