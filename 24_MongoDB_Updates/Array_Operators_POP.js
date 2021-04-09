// Utilizado para remover o primeiro ou o último elemento de um array.

// $pop
// Para remover o 1º elemento utiliza-se -1, o último 1.

// Exemplo:

db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } }); // Remove o primeiro item do array items.

db.supplies.update({ _id: 1 }, { $pop: { items: 1 } }); // Remove o último item do array items.