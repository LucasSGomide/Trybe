// $set -> Define o update / Adiciona um novo campo caso não exista.

// Exemplo de aplicação.

db.products.insertOne({
  _id: 100,
  sku: "abc123",
  quantity: 250,
  instock: true,
  reorder: false,
  details: { model: "14Q2", make: "xyz" },
  tags: [ "apparel", "clothing" ],
  ratings: [ { by: "ijk", rating: 4 } ]
});

// Realizando update em elementos de primeiro nível

db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);

// Realizando update em elementos "embedados" ou em segundo nível.

db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);

// Realizando update em Array

db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear", // Atualiza o item de índice 1 do array "tags"
      "ratings.0.rating": 2 // Atualiza o item de índice 0 do array de objetos "ratings: [ { by: "ijk", rating: 4 } ]""
    }
  }
);

