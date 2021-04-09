// A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. Então, a função que deverá ser passada precisa retornar true ou false.

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// Método mais rudimentar de se executar a função de encontrar o primeiro número multiplo de 5.

/*let firstMultipleOf5;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}*/

// Array.find() -> HOF para encontrar algo dentro do array que depende de uma condição.

const firstMultipleOf5 = numbers.find(number => number % 5 === 0);

console.log(firstMultipleOf5);

// Outros exemplos da função Find.

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2);
