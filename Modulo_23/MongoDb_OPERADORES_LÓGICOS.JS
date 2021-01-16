// OPERADORES LÓGICOS

// NOT
// $not operador de negação
// Sintaxe: { campo: { $not: { <operador ou expressão> } } }

db.inventory.find({ price: { $not: { $gt: 1.99 } } }) // Essa query seleciona todos os documentos na coleção em que o valor do campo price é menor ou igual a 1.99, ou em que o campo price não exista.

// OR
// $or
// Sintaxe: { $or: [{ <expression1> }, { <expression2> }, ... , { <expressionN> }] }

db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] }) // Essa query seleciona todos os documentos da coleção em que o valor do campo qty é menor do que 20 ou o valor do campo price é igual a 10 .


// OR
// $nor -> seleciona os documentos em que todas as expressões desse array sejam falsas.
// Sintaxe: { $nor: [ { <expressão1> }, { <expressão2> }, ...  { <expressãoN> } ] }

db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })
// Retorno
// Contêm o campo price com valor diferente de 1.99 e o campo sale com valor diferente de true ;
// Ou contêm o campo price com valor diferente de 1.99 e não contêm o campo sale ;
// Ou não contêm o campo price e contêm o campo sale com valor diferente de true ;
// Ou não contêm o campo price e nem o campo sale .


// AND 
// $and -> seleciona os documentos que satisfaçam todas as expressões no array
// Sintaxe: { $and: [{ <expressão1> }, { <expressão2> } , ... , { <expressãoN> }] }

db.inventory.find({
  $and: [
    { price: { $ne: 1.99 } },
    { price: { $exists: true } }
  ]
})
// Essa query seleciona todos os documentos da coleção inventory em que o valor do campo price é diferente de 1.99 e o campo price existe.

db.inventory.find({
  $and: [
    {
      $or: [
        { price: { $gt: 0.99, $lt: 1.99 } }
      ]
    },
    {
      $or: [
        { sale : true },
        { qty : { $lt : 20 } }
      ]
    }
  ]
})