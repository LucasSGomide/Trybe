const myFizzBuzz = require('./exercise_4')
const { testResult } = require('@jest/types');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe ('Testing if..', () => {
  it('Should return..', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz')
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('a')).toBe(false)
  })
})

// Verifique se o array passado por parâmetro não sofreu alterações ??
