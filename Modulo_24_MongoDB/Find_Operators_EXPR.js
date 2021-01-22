// O operador $expr permite que você utilize expressões de agregação e construa queries que comparem campos no mesmo documento.

// $expr
// Deve-se sempre utilizar $chave na query. Isto indica que a string entre aspas referencia um campo.

// Exemplo:

// { _id: 1, category: "food", budget: 400, spent: 450 },
// { _id: 2, category: "drinks", budget: 100, spent: 150 },
// { _id: 3, category: "clothes", budget: 100, spent: 50 },
// { _id: 4, category: "misc", budget: 500, spent: 300 },
// { _id: 5, category: "travel", budget: 200, spent: 650 }

db.monthlyBudget.find(
  {
expr: { $gt: [ "$spent", "$budget" ] } // Retorna elementos onde $spent > $budget.
  }
);
// Retorna drinks , food, travel.
