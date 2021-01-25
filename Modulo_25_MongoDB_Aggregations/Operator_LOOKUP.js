// O operador $lookup possibilita fazer a junção de documentos de otra DB. Similar ao "JOIN"

// $lookup

// Retorna um novo array com elementos que contém o match do filtro.

// ----------------------------------------------------------------------------------------------------------

// Sintaxe:

// from : Uma coleção no mesmo database para executar o join ;
// localField : Campo onde está sendo executado o aggregation
// foreingField : Campo da coleção especificada no parâmetro FROM
// as: ALIAS

// ----------------------------------------------------------------------------------------------------------
// Exemplo:

// orders
// { _id: 1, item: "almonds", price: 12, quantity: 2 },
// { _id: 2, item: "pecans", price: 20, quantity: 1 },
// { _id: 3 }

// inventory
// { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
// { _id: 2, sku: "bread", description: "product 2", instock: 80 },
// { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
// { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
// { _id: 5, sku: null, description: "Incomplete" },
// { _id: 6 }

db.orders.aggregate([
  {
lookup: {
      from: "inventory", // Coleção atual
      localField: "item", // Campo da coleção atual
      foreignField: "sku", // Campo da coleção "externa" que tem match com a "interna"
      as: "inventory_docs" // ALIAS
    }
  }
]); // Retorna um array inventory_docs com as matches para cada item que for comum.