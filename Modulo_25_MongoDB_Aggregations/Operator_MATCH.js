// O operador $match filtra documentos assim como o $find

// $match

// Exemplo:

// { _id: ObjectId("512bc95fe835e68f199c8686"), author: "dave", score: 80, views: 100 },
// { _id: ObjectId("512bc962e835e68f199c8687"), author: "dave", score: 85, views: 521 },
// { _id: ObjectId("55f5a192d4bede9ac365b257"), author: "ahn", score: 60, views: 1000 },
// { _id: ObjectId("55f5a192d4bede9ac365b258"), author: "li", score: 55, views: 5000 },
// { _id: ObjectId("55f5a1d3d4bede9ac365b259"), author: "annT", score: 60, views: 50 },
// { _id: ObjectId("55f5a1d3d4bede9ac365b25a"), author: "li", score: 94, views: 999 },
// { _id: ObjectId("55f5a1d3d4bede9ac365b25b"), author: "ty", score: 95, views: 1000 }

// Igualdade
db.articles.aggregate(
  [{ $match : { author : "dave" } }] // Filtra itens odne autor é "dave".
);

// OR
db.articles.aggregate(
  [
    {
match: {
or: [
          { score: { $gt: 70, $lt: 90 } }, // Retorna itens em que score seja > 70 e < 90
          { views: { $gte: 1000 } } // Retorna itens em que as views são >= 1000.
        ]
      }
    }
  ]
);