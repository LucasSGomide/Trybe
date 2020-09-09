const {
  obj1,
  obj2,
  obj3,
} = require('./exercise_5')

const { testResult } = require('@jest/types');

describe ('Testing if..', () => {
  it('Should return..', () => {
    expect(obj1).toEqual(obj2)
    expect(obj1).toEqual(obj3)
    expect(obj2).toEqual(obj3);
  })
})
