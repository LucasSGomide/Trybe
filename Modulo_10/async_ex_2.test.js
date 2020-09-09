const {
  findUserById,
  getUserName
} = require('./async_ex_2')
const { testResult } = require('@jest/types');

// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

test('check if existing user is found by function', () => {
  expect.assertions(1);
  return expect(getUserName(4)).resolves.toBe('Mark');
})

test('check if error message returns after unexisting ID input', () => {
  return expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' });
})