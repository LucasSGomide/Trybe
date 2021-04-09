// Selecione todas as transações feitas pelo cliente chamado "Dave America";

db.transactions.aggregate(
  [{ $match: { from: "Dave America" } }]
);

// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";

db.transactions.aggregate(
  [{ $match: { value: { $gt: 700, $lt: 6000 } }}]
);

// Selecione três transações com o valor acima de 1000.
// A ordem importa, deve-se entender o que se pede para posicionar $limit e $match

db.transactions.aggregate(
  [
    { $match: { value: { $gt: 1000 } } }, // Filtra os values > 1000
    { $limit: 3 } // Retorna somente 3
  ]
);