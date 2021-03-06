db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure"
    ],
    imdbRating: 7.7,
    budget: 35
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi"
    ],
    imdbRating: 6.6,
    budget: 10
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy"
    ],
    imdbRating: 7.4
  }
]);

// 1 - Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category.

db.movies.find(
  { category: { $all: ["action", "adventure"] } }
);

// 2 - Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7.

db.movies.find(
  { imdbRating: { $gt: 7 }, category: { $all: ["action"] } }
);

// 3 - Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.

db.movies.updateOne({
  title: "Batman"
}, {
  $push: {
    ratings:
    { $each: [
      85, 100, 102, 105,
    ]}
  }
}, { upsert: true });

// 4 - Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102].

db.movies.updateOne({
  title: "Godzilla"
}, {
  $push: {
    ratings:
    { $each: [
      78, 52, 95, 102,
    ]}
  }
}, { upsert: true });