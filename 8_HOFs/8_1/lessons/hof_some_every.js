//As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição.

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// Every para verificar se o estudante passou em todas as matérias:

const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

// Observe que foi usado Object.values junto com o every. Como o Object.values retorna um array, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!

console.log(verifyNotes(notes));