//Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

//Dica: use array destructuring.

const assert = require('assert')

const myList = [1, 2, 3]

//const [x, y, z] = myList
// escreva swap abaixo

//const swap = (arr => arr.reverse())

const swap = (([x, y, z]) => [z, y, x])

const swappedList = swap(myList)

console.log(swappedList)

/* assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1) */