// Com a expressão $add é possível somar valores numéricos ou datas. Se um dos argumentos for do tipo date , o outro argumento será tratado como milissegundos e adicionado à data

// $add

// Exemplo:

// { _id: 1, item: "abc", price: 10, fee: 2, date: ISODate("2014-03-01T08:00:00Z") },
// { _id: 2, item: "jkl", price: 20, fee: 1, date: ISODate("2014-03-01T09:00:00Z") },
// { _id: 3, item: "xyz", price: 5,  fee: 0, date: ISODate("2014-03-15T09:00:00Z") }

db.sales.aggregate([
  { $project: { item: 1, total: { $add: ["$price", "$fee"] } } } // Soma price e fee para cada item.
]);

// Retorna:

// { "_id" : 1, "item" : "abc", "total" : 12 }
// { "_id" : 2, "item" : "jkl", "total" : 21 }
// { "_id" : 3, "item" : "xyz", "total" : 5 }