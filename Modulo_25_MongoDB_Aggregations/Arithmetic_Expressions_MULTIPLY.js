// $multiply -> A expressão $multiply multiplica dois valores numéricos. Esses valores devem ser passados num array , como nas outras expressões anteriores.

// $multiply

// Exemplo:

// { _id: 1, item: "abc", price: 10, quantity: 2, date: ISODate("2014-03-01T08:00:00Z") },
// { _id: 2, item: "jkl", price: 20, quantity: 1, date: ISODate("2014-03-01T09:00:00Z") },
// { _id: 3, item: "xyz", price: 5, quantity: 10, date: ISODate("2014-03-15T09:00:00Z") }


db.sales.aggregate([
  {
project: {
      date: 1,
      item: 1,
      total: {
multiply: ["$price", "$quantity"]
      }
    }
  }
]);

// retorno:

// { "_id" : 1, "item" : "abc", "date" : ISODate("2014-03-01T08:00:00Z"), "total" : 20 }
// { "_id" : 2, "item" : "jkl", "date" : ISODate("2014-03-01T09:00:00Z"), "total" : 20 }
// { "_id" : 3, "item" : "xyz", "date" : ISODate("2014-03-15T09:00:00Z"), "total" : 50 }