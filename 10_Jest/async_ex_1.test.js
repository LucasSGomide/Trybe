const uppercase = require('./async_ex_1')
const { testResult } = require('@jest/types');

// Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

test('function should return all uppercase', () => {
  uppercase('oi', (callback) => {
    expect(callback).toBe('OI')
  });
})