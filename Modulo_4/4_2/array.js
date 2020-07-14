// Aula sobre Array
// Objeto array é um objeto de alto nível semelhante as listas.

// {estrutura: "objeto"} -> estrutura de um objeto
// Arrays são acessados pelo índice e começam em Index 0

let array = ['lucas', 27, 'Belo Horizonte', {nome: 'BH'}];


console.log(array.length) // .length quantos elementos temos em um array
console.log(array[3]) // Seleção de elemento via index
console.log(array[array.length - 1]) // Acesso ao último elemento de um array


//Array dentro de array
//Podemos declarar variáveis para representar um índice, deve ser declarada em caixa alta. (camelCase não tem erro.)
//Também é possível acessar cada caractere de um array adicionando mais um index [x] referente a letra.

let PRONTUARIO = 1;

let array2 = [
  'Lucas',
  ['dados', ['teste'] ]
];

console.log(array2[PRONTUARIO][1][0])

let frutas = ["Maçã", "Banana"];

// Desta forma utilizando forEach podemos retornar com o item e o índice de um array.

frutas.forEach(function(item, indice, array) {
  console.log(item, indice);
})

// Adicionar um item ao final de um array

let addItem = frutas.push('Laranja');
console.log(frutas)

// Remover um item do final do array

let removeLast = frutas.pop();
console.log(frutas)

// Remover um item do final do array

let removeFirst = frutas.shift();
console.log(frutas)

// Adicionar no começo do array

let addFirst = frutas.unshift('Morango');
console.log(frutas)

// Procurar índice de um item no Array

frutas.push('Manga');

let searchIndex = frutas.indexOf('Manga');
console.log(searchIndex)

// Remover pela posição do índice .splice(pos -> onde começa a remover, num (numero de itens a remover em direção ao fim do array))

let removeItem = frutas.splice();
console.log(frutas)

// Remover itens de uma posição de índice:

let vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
console.log(vegetais)

let pos = 1, n = 2;

let removedItens = vegetais.splice(pos, n)
console.log(vegetais)
console.log(removedItens)

//Copiando um array 

let copyArray = vegetais.slice(); 

console.log(copyArray)
console.log(vegetais)
