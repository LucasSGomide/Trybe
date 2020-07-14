// Aula sobre laço FOR em JS Estruturas de Repetição
// Declaração de um contador , adicionando um teste para valor de contador e adicionando valor 1 ao contador.

let numA = 6

for (let contador = 1; contador <= 9; contador += 1) {
  console.log(numA * contador)
}

// Declaração de um array, declaração de um contador de índice, se o comprimento do array for menor que o número de itens,
// fazemos a adição de + 1 ao indice do array. Daí printamos a mensagem.

let nameList = ["Lucas", "Rafael", "Maria Alice"]

for (let index = 0; index < nameList.length; index += 1) {
  let message = "Welcome " + nameList[index] + " !";
  console.log(message)
}
