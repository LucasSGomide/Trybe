// Utilizado para renomear um determinado atributo de um ou mais documentos.

// $rename


// Exemplo:

db.fruits.insertOne(
  { _id: 100, name: "Banana", quantity: 100, inStock: true }
);

db.fruits.updateOne(
  { name: "Banana" }, // Filtro de seleção
  { $rename: {
      "name": "productName" // Modificação do name para productName (mudança de chave e não de valor).
    }
  }
);