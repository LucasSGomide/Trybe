// OPERADORES DE COMPARAÇÃO

// $lt -> Menor que (<)

db.collection.find({ qty: { $lt: 20 } })

// $lte -> menor ou igual (<=) 

db.inventory.find({ qty: { $lte: 20 } })

// $gt -> maior do que (>)

db.inventory.find({ qty: { $gt: 20 } })

// $gte -> maior ou igual (>=)

db.inventory.find({ qty: { $gte: 20 } })

// $eq -> igual -> 

db.inventory.find({ qty: { $eq: 20 } }) // operador explicito
db.inventory.find({ qty: 20 }) // operador implicito

// $ne não é igual / diferente.

db.inventory.find({ qty: { $ne: 20 } })

// $in -> operador de igualdade com mais de 1 valor  (contem estes valores)

db.inventory.find({ qty: { $in: [ 5, 15 ] } }) // Retorna itens com qty = 5 ou 15

// $nin -> diferente com mais de um valor (não contem estes valores)

db.inventory.find( { qty: { $nin: [ 5, 15 ] } } ) // Retorna itens com qty !== 5 ou 15
