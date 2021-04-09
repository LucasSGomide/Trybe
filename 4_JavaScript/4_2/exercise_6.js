// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    oddNumbers += 1
  }
}

if (oddNumbers > 0) {
  console.log("I've found " + oddNumbers + " odd numbers")
} else {
  console.log("No odd numbers in this array")
}

