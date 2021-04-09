const getRepos = require('./async_ex_4')
const { testResult } = require('@jest/types');

// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

describe('Checking if the array returned from the API contain specific items', () => {
  it('Should check if array contains project-todo-list', async () => {
    expect.assertions(1);
    await expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.toContain('sd-01-week4-5-project-todo-list');
  })

  it('Should check if array contains project-meme-generator', async () => {
    expect.assertions(1);
    await expect(getRepos('https://api.github.com/users/tryber/repos')).resolves.not.toContain('sd-01-week4-5-project-meme-generator');
  })
})