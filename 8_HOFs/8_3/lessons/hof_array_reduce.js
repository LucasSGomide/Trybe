// A função soma todos os valores de um array:

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

// Apenas com o for:

for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
// console.log(sumNumbers);


// Com .reduce:

const sumNumbers1 = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers1);

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers2 = numbers.reduce(getSum);
// console.log(sumNumbers2);