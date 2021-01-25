// Aggregation Pipeline -> Funciona como um funil. Faz um "filtro" e retorna os resultados agrupados/agregados.

// 1º Parâmetro = array de documentos (estágios do pipeline -> podem ter quantos estágios eu quiser)

// Exemplo:

db.orders.aggregate([
  { $match: { status: "A" } }, // Filtra os documentos pelo campo Status = A (Estágio 1)
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } } // Agrupa documentos pelo campo cust_id para agrupar a soma do campo "amount" em um campo "total". (Estágio 2)
]);