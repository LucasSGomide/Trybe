// Função .sort() - Ordena sempre por ordem alfabética. E se o array possui algum elemento que não é uma string, a sort a ordena de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres!

// Ordenando em ordem alfabética.

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

// Não ordena os núemros de forma crescente.

console.log([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].sort())

// Ordenando números de forma crescente

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); 
