// O $all seleciona todos os documentos em que o valor do campo é um array que contenha todos os elementos especificados.

// $all
// Retorna arrays onde todos os itens especificados na query estejam inclusos.

// Exemplo: 

db.inventory.find({ tags: ["red", "blank"] }); // Traz arrays que sejam strict equal

db.inventory.find({ tags: { $all: ["red", "blank"] } }); // Traz arrays que contem estes itens.

