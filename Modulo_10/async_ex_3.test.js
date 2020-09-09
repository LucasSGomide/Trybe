const {
  findUserById,
  getUserName
} = require('./async_ex_2')
const { testResult } = require('@jest/types');

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.

test('check if existing user is found by function', async () => {
  expect.assertions(1);
  await expect(getUserName(4)).resolves.toBe('Mark');
})

test('check if error message returns after unexisting ID input', async () => {
  expect.assertions(1);
  try {
    await getUserName(3)
  } catch (err) {
    expect(err).toEqual({
      error: 'User with 3 not found.',
    });
  }
})