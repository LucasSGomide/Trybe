// const { questionFloat } = require('readline-sync');
const { prompt, validate } = require('inquirer');
const { calculateImc } = require('./functions');

const validateAnswer = (input) => {
  if (isNaN(input)) {
    return false;
  } else {
    return true;
  }
};

const questions = [
  {
    type: 'number',
    name: 'peso',
    message: "Qual o seu peso?",
    validate: validateAnswer,
  },
  {
    type: 'number',
    name: 'altura',
    message: "Qual o seu altura?",
    validate: function(input) {
      if (typeof input === 'number') {
        return true;
      } else {
        return false;
      }
    }
  },
];

prompt(questions).then((answers) => {
  const peso = answers.peso;
  const altura = answers.altura;
  console.log(calculateImc(peso, altura));
});
