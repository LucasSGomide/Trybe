// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

    
const assert = require('assert');
const { captureRejectionSymbol } = require('events');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

/* 
function gradesAverage () {
  return notas.reduce((acc, curr, index, array) => (array[index]))
} */

//console.log(gradesAverage())

function studentAverage() {
  let newArray = alunos
  .map((aluno, index) => {
    let object = {nome: aluno, nota: notas[index].reduce((acc, curr) => (acc += curr), 0) / notas[index].length}
    return object;
  })
  return newArray;
}

console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// assert.deepEqual(studentAverage(), expected);