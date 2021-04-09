// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

    
const assert = require('assert');
const { strict } = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const wordCounter = names
    .reduce((acc, current) => (`${acc.match(/a/gi)}${current.match(/a/gi)}`).replace(/,/g, ''))  
  return wordCounter.length;
}

// Resposta laís , sem regex. 

/* function containsA() {
  return names.reduce((result, word) => (
    console.log(word.toUpperCase().split('A').length, word.toUpperCase().split('A'))
  ), 0)
} */


console.log(containsA())


// assert.deepEqual(containsA(), 20);