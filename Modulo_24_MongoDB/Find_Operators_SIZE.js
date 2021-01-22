// O operador $size seleciona documentos em que um array contenha um número de elementos especificado.

// $size
// É importante saber que o operador $size não aceita ranges de valores.

// Exemplo:

// { _id: 1, tags: ["red", "green"] },
// { _id: 2, tags: ["apple", "lime"] },
// { _id: 3, tags: "fruit" },
// { _id: 4, tags: ["orange", "lemon", "grapefruit"] }

db.products.find(
  { tags: { $size: 2 } }
);
// Retorna os elementos de _id 1 e 2. 
