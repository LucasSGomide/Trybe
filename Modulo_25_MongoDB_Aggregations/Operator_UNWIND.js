// O  operador $unwind "desconstrói" um campo array do documento de entrada e gera como saída um documento para cada elemento do array.

// $unwind

// Exemplo:

db.inventory.insertOne({ _id: 7, item: "ABC1", sizes: ["S", "M", "L"] });

db.inventory.aggregate([{ $unwind : "$sizes" }]);

// Retorno:

// { "_id" : 7, "item" : "ABC1", "sizes" : "S" }
// { "_id" : 7, "item" : "ABC1", "sizes" : "M" }
// { "_id" : 7, "item" : "ABC1", "sizes" : "L" }