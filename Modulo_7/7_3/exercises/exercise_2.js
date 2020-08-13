const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

// 1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ], 'Testando' )

// 2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 3, 4 ], 'Testando' )

// 3 - Verifique se o array passado por parâmetro não sofreu alterações

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 6), [ 1, 2, 3, 4 ], 'Testando' )

// 4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [ 1, 2, 3, 4 ], 'Testando' )