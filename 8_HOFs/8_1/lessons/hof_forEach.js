const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}

/*let i;
for (i = 0; i < students.length; i += 1) {
  verifyNote(students[i]);
}*/

// Usando forEach, é assim que você faria a mesma coisa:

students.forEach(verifyNote); // Mesma coisa de fazer o for comum, porém extremamente mais simples.

console.log(students);

// forEach recebendo mais de 1 parametro na função (elemento, indiceNoArray, arrayCompleto)

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

const printValues = arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});


// Possível gerar uma função que fará o comportamento do forEach e chama-lo na sintaxe como exemplificado abaixo:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2); // Mesma coisa que o 'test' abaixo.

/* const test = numbers.forEach((element) => {
  console.log(`${element} * 2: ${element * 2}`);
}); */

