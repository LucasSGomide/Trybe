// O operador $mul multiplica o valor de um campo por um número especificado, persistindo o resultado dessa operação sem a necessidade do operador $set

// $mul - Multiplica e atualiza um campo.
// Pode ser usado para criar um novo campo, ele inicirá em 0 e com tipo definido pelo multiplicador (Ex: NumberDecimal)
// Pode multiplicar campos com tipos de Number diferentes( Ex: NumberLong(10) * NumberInt(5) = NumberLong(50) )

// Exemplo

db.products.insertOne(
  { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
);

db.products.update(
  { _id: 1 }, // Filtra elemento de id 1
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } } // Multiplica e atualiza PRICE por 1.25 e QTY por 2.
);

