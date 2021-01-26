// $floor -> Arredondamento pra baixo

// $floor

// Exemplo:

// { _id: 1, value: 9.25 },
// { _id: 2, value: 8.73 },
// { _id: 3, value: 4.32 },
// { _id: 4, value: -5.34 }

db.samples.aggregate([
  { $project: { value: 1, floorValue: { $floor: "$value" } } }
]);
// retorno:

// { "_id" : 1, "value" : 9.25, "floorValue" : 9 }
// { "_id" : 2, "value" : 8.73, "floorValue" : 8 }
// { "_id" : 3, "value" : 4.32, "floorValue" : 4 }
// { "_id" : 4, "value" : -5.34, "floorValue" : -6 }