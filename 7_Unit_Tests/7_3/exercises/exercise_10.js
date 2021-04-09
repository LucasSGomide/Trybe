const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let newArr = [];

  for (person in people) {
    newArr.push(`${greeting}${people[person]}`);
  }
  return newArr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  
const output = greetPeople(parameter);

assert.deepStrictEqual(output, result , 'Deu Ruim')
