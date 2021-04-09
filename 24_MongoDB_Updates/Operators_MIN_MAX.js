//

// $min -> altera o valor do campo para o valor especificado se esse valor especificado é menor do que o atual valor do campo;

// $max -> altera o valor do campo se o valor especificado é maior do que o atual valor do campo.


// Exemplo:

db.scores.insertOne(
  { _id: 1, highScore: 800, lowScore: 200 }
);

db.scores.update({ _id: 1 }, { $min: { lowScore: 150 } }); // Muda o valor de lowScore para 150 (150 < 200)
db.scores.update({ _id: 1 }, { $min: { lowScore: 250 } }) // Nada acontece pois 250 é > 200.

db.scores.update({ _id: 1 }, { $max: { highScore: 950 } }); // Muda o valor de HIGHSCORE para 950 (950 > 800)

// Exemplo2 (DATAS):

db.tags.insertOne(
  {
    _id: 1,
    desc: "crafts",
    dateEntered: ISODate("2019-10-01T05:00:00Z"),
    dateExpired: ISODate("2019-10-01T16:38:16Z")
  }
);

db.tags.update(
  { _id: 1 },
  {
    min: { dateEntered: new Date("2019-09-25") }, // Altera a data pois é ANTERIOR ao valor atual ($min)
    max: { dateExpired: new Date("2019-10-02") } // Altera a data pois é POSTERIOR ao valor atual ($max)
  }
);