// Utilizado para incrementar ou decrementar valores em um campo específico, utilizando tanto valores positivos quanto negativos.

// Exemplo

db.increment.insertOne(
  {
    _id: 1,
    sku: "abc123",
    quantity: 10,
    metrics: {
      orders: 2,
      ratings: 3.5,
    }
  }
);

db.increment.update(
  { sku: "abc123" }, // Filtro
  { $inc: { quantity: -2, "metrics.orders": 1 } } // Adiciona 1 no campo ORDERS Remove 2 do campo QUANTITY
);