const myRemoveWithoutCopy = require('./exercise_2')
const { testResult } = require('@jest/types');

describe ('Testing if..', () => {
  it('Should return..', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain([3]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

// Verifique se o array passado por parâmetro não sofreu alterações ??
