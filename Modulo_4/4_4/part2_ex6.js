let testNumber = 7;

function sumNumbersInRange(testNumber) {
  let sum = 0

  for (numbers = 1; numbers <= testNumber; numbers += 1) {
    sum += numbers
  }
  return sum
}

console.log(sumNumbersInRange(testNumber))