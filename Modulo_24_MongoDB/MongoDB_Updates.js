// UpdateOne
// $set -> Define o update / Adiciona um novo campo caso não exista.

db.collection.updateOne(
  { item: "paper" }, // Filtro de seleção
  { $set: { "size.uom": "cm", status: "P" } } // Atualização
);


// UpdateMany
// $set -> Define o update / Adiciona um novo campo caso não exista.

db.inventory.updateMany(
  { "qty": { $lt: 50 } }, // Filtro de seleção
  { $set: { "size.uom": "in", status: "P" } } // Atualização
);