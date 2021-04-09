const numbers = [50, 85, -30, 3, 15];

const getBiggest = arr => {
  let biggest = arr[0];
  for (number in arr) {
    if (arr[number] > biggest) {
      biggest = arr[number]
    }
  }
  return biggest;
}

console.log(getBiggest(numbers))

const getBiggestReduce = ((result, number) => number < result ? result : number)
const biggestReduce = numbers.reduce(getBiggestReduce, 100)
console.log(biggestReduce)


const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = ((result, number) => number % 2 === 0 ? result + number : result)

const evenSum = numbers2.reduce(sumEvenNumbers, 0)

console.log(evenSum);