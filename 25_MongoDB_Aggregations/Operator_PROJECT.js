// O  operador $project permite fazer uma "projeção" da saida do pipeline. Permitindo que novos campos sejam criados.
 
// $project 



// Exemplo:

// {
//   _id: 1,
//   title: "abc123",
//   isbn: "0001122223334",
//   author: { last: "zzz", first: "aaa" },
//   copies: 5
// }

db.books.aggregate(
  [
    {
project : {
        title : 1, // Saida title (true)
        author : 1 // Saida author (true)
      } 
    }
  ]
); // Saida com _id pois não foi negado.

db.books.aggregate([
  {
project : {
      _id: 0, // Negado (false)
      title : 1, // Saida title (true)
      author : 1 // Saida author (true)
    }
  }
]);

// Omitindo campos

db.books.aggregate([
  {
project : {
      copies: 0 // Copies (false)
    }
  }
]);

// Excluindo campos em subdocumentos

db.books.aggregate([
  {
project : {
      "author.first": 0, // Acesso a elementos embedados (false) / 1 (true)
      copies: 0
    }
  }
]);

// Adicionando novos campos

db.books.aggregate([
  {
project: {
      title: 1,
      isbn: {
        prefix: { $substr: ["$isbn", 0, 3] },
        group: { $substr: ["$isbn", 3, 2] },
        publisher: { $substr: ["$isbn", 5, 4] },
        title: { $substr: ["$isbn", 9, 3] },
        checkDigit: { $substr: ["$isbn", 12, 1] }
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);