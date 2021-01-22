// O $$elemMatch seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados.

// $$elemMatch
// Diferente do $all ele permite adicionar mais critérios de seleção.

// Exemplo: 

db.collection.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);
// Como resultado, apenas o documento com o _id igual a 1 será retornado.

// Exemplo: 2

db.survey.find(
  { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
);
// Será retornado apenas o documento com o _id igual a 3.
