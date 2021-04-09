// $divide -> A expressão $divide , como o próprio nome sugere, divide dois valores. O primeiro argumento é o dividendo , e o segundo é o divisor .

// $divide

// Exemplo:

// { _id: 1, name: "A", hours: 80, resources: 7 },
// { _id: 2, name: "B", hours: 40, resources: 4 }


db.planning.aggregate([
  {
project: {
      name: 1,
      workdays: {
divide: ["$hours", 8]
      }
    }
  }
]);

// retorno:

// { "_id" : 1, "name" : "A", "workdays" : 10 }
// { "_id" : 2, "name" : "B", "workdays" : 5 }