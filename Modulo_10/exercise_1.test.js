const sum = require('./exercise_1')
const { testResult } = require('@jest/types');

describe ('Testing if sum returns the correct value', () => {
  it('Should return 9', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0)
  })
})

describe ('Testing if sum only accept numbers', () => {
  it('Should throw new Error', () => {
    expect(() => {
      sum(5, '5').toThrow();
    });
  })
})

describe ('Checking error message', () => {
  it('Should return parameters must be numbers', () => {
    expect(sum(5, '5')).toEqual('parameters must be numbers')
  })
})
