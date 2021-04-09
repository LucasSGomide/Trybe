const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

// Realizando o map de forma tradicional com o FOR.

const fullNames = [];
for(let i = 0; i < persons.length; i += 1){
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);


// Utilzando HOF array.map

const fullNames2 = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2);


// Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

// ? -> Quer dizer que se o numero for > 0 retorne numero * -1 (if number > 0) numero maior que 0 ?
// : -> Quer dizer ELSE , caso contrário, retorne number.

console.log(negativeNumbers);
console.log(numbers); 

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newObj = [];
let item;
products.map((number, index) => newObj.push({[number] : prices[index]})) 

console.log(newObj)
