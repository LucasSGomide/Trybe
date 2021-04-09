// Utilizado para remover um ou mais campos de um documento.

// $unset

// Exemplo:

db.fruits.insertOne(
  { _id: 100, productName: "Banana", quantity: 100, inStock: true }
);

db.fruits.updateMany(
  { productName: "Banana" }, // Filtro por nome.
  { $unset: { quantity: "" } } // Remove a chave QUANTITY.
);
