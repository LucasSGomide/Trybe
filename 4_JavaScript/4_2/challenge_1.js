// Bubble Sort

// Linha 1 -> seleciona o segundo[1] número do array
// Linha 2 -> seleciona o primeiro[0] numero do array
// Linha 3 -> SE o primeiro[0] for maior que o segundo[1]
// Linha 4 -> atribua o valor do segundo[1] a variável position
// Linha 5 -> Atribui-se o segundo[1] no lugar do primeiro[0]
// Linha 6 -> Atribui-se o primeiro[0] no lugar do segundo[1]
// Repete.

// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < numbers.length; index += 1) {
  for (let indexZero = 0; indexZero < index; indexZero += 1) {
    if (numbers[indexZero] > numbers[index]) {
      let position = numbers[index]

      numbers[index] = numbers[indexZero];
      numbers[indexZero] = position
    }
  }
} 

console.log("Estes são os números em ordem crescente: " + numbers)

