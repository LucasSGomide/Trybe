// $subtract -> podemos subtrair dois valores numéricos para retornar a diferença entre eles, ou duas datas para retornar a diferença entre elas em milissegundos

// $subtract

// Exemplo:

// {
//   _id: 1,
//   item: "abc",
//   price: 10,
//   fee: 2,
//   discount: 5,
//   date: ISODate("2014-03-01T08:00:00Z")
// },
// {
//   _id: 2,
//   item: "jkl",
//   price: 20,
//   fee: 1,
//   discount: 2,
//   date: ISODate("2014-03-01T09:00:00Z")
// }

db.sales.aggregate([
  {
    $project: {
      item: 1,
      total: {
        $subtract: [
          { $add: ["$price", "$fee"] }, // Add faz o calculo do total
          "$discount" // Faz um subtract com o valor do discount
        ]
      }
    }
  }
]); // Retornos 7 e 19

// Exemplo2:


db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: ["$$NOW", "$date"] // Retorna a diverença em milisegundos.
      }
    }
  }
]);