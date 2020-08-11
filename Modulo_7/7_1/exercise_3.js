// Fatorial de N

let fatorialCalculator = (number) => {
  let sum = number;
  for (let mul = number - 1; mul >= 1; mul -= 1) {
    sum *= mul
  }
  console.log(`${number}! = ${sum}`)
}

fatorialCalculator(6);

// Fatorial recursivo

let recursiveFatorial = number => number > 1 ? number * recursiveFatorial(number - 1) : 1
console.log(recursiveFatorial(6))