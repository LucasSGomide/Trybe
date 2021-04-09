// O operador $group permite agrupar valores de diversas formas, desde um "distinct" simples até cálculos mais elaborados com a ajuda de outros operadores.

// $group : _id (principal operador, contém os campos que serão utilizados no agrupamento)
// pode-se omitir o _id: null (seleciona todos os documentos)
// pode-se espevificar um item no _id: $item (deve-se utilizar $ no nome do campo)

// ----------------------------------------------------------------------------------------------------------

// Operadores de Acumulação

// $addToSet : retorna um array com os valores únicos da expressão para cada grupo;
// $avg : retorna a média de valores numéricos. Valores não numéricos são ignorados;
// $first : retorna um valor do primeiro documento de cada grupo;
// $last : retorna um valor do último documento de cada grupo;
// $max : retorna o maior valor de cada grupo;
// $sum : retorna a soma de valores numéricos. Valores não numéricos são ignorados.

// ----------------------------------------------------------------------------------------------------------

// Exemplos:

// {
//   _id: 1,
//   item: "abc",
//   price: NumberDecimal("10"),
//   quantity: NumberInt("2"),
//   date: ISODate("2014-03-01T08:00:00Z")
// },
// {
//   _id: 2,
//   item: "jkl",
//   price: NumberDecimal("20"),
//   quantity: NumberInt("1"),
//   date: ISODate("2014-03-01T09:00:00Z")
// },
// {
//   _id: 3,
//   item: "xyz",
//   price: NumberDecimal("5"),
//   quantity: NumberInt( "10"),
//   date: ISODate("2014-03-15T09:00:00Z")
// },
// {
//   _id: 4,
//   item: "xyz",
//   price: NumberDecimal("5"),
//   quantity:  NumberInt("20"),
//   date: ISODate("2014-04-04T11:21:39.736Z")
// },
// {
//   _id: 5,
//   item: "abc",
//   price: NumberDecimal("10"),
//   quantity: NumberInt("10"),
//   date: ISODate("2014-04-04T21:23:13.331Z")
// },
// {
//   _id: 6,
//   item:"def",
//   price: NumberDecimal("7.5"),
//   quantity: NumberInt("5" ),
//   date: ISODate("2015-06-04T05:08:13Z")
// },
// {
//   _id: 7,
//   item: "def",
//   price: NumberDecimal("7.5"),
//   quantity: NumberInt("10"),
//   date: ISODate("2015-09-10T08:43:00Z")
// },
// {
//   _id: 8,
//   item: "abc",
//   price: NumberDecimal("10"),
//   quantity: NumberInt("5" ),
//   date: ISODate("2016-02-06T20:20:13Z")
// }

db.sales.aggregate([ // Saida equivalente a db.sales.count();
  {
group: {
      _id: null, // Omite o ID seleciona todos os documentos
      count: { $sum: 1 } // Utilizado para contar documentos ($sum: 1)
    }
  }
]);

// Retornando valores distintos

db.sales.aggregate([
  {
    $group : {
      _id : "$item", // Campo item
      count: { $sum: 1} // Contagem dos valores distintos no campo $ITEM
    }
  }
]);


// somando valores

db.sales.aggregate([
  {
group : {
      _id : "$item",
      totalSaleAmount: {
sum: { // Operador sum aceita outros modificadores
multiply: ["$price", "$quantity"] // Multiplica price por quantity
        }
      }
    }
  }
]);

// Utilizando having

db.sales.aggregate([
  // Primeiro Estágio
  {
group: {
      _id : "$item",
      totalSaleAmount: {
sum: {
multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  // Segundo Estágio
  {
match: { "totalSaleAmount": { $gte: 100 } } // Faz a filtragem final e somente permite retornar valores que sejam maiores que 100
  }
]);

// Operações em todos os documentos

db.sales.aggregate([
  {
group : {
      _id : null,
      totalSaleAmount: {
sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);