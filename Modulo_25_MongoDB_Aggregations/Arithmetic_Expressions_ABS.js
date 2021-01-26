// $abs -> Valor absoluto

// $abs

// Exemplo:

// { _id: 1, start: 5, end: 8 },
// { _id: 2, start: 4, end: 4 },
// { _id: 3, start: 9, end: 7 },
// { _id: 4, start: 6, end: 7 }

db.ratings.aggregate([
  {
project: {
      delta: {
abs: { $subtract: ["$start", "$end"] }
      }
    }
  }
]);

// retorno:

// { "_id" : 1, "delta" : 3 }
// { "_id" : 2, "delta" : 0 }
// { "_id" : 3, "delta" : 2 }
// { "_id" : 4, "delta" : 1 }