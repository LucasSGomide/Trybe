// Operador EXISTS

// $exists
// Sintaxe: { campo: { $exists: <boolean> } }
/// Retorno: quando boolean verdadeiro retorna documentos que contém o campo falso é contrário.

db.inventory.find({ qty: { $exists: true } }) // Essa query retorna todos os documentos da coleção inventory em que o campo qty existe.

db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } }) // Essa query seleciona todos os documentos da coleção inventory em que o campo qty existe e seu valor é diferente de 5 e 15 .