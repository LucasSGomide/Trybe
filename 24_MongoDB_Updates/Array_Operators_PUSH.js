// O operador $push adiciona um valor a um array . Se o campo não existir no documento, um novo array com o valor em um elemento será adicionado.

// Sintaxe: { $push: { <campo1>: <valor1>, ... } }

// MODIFICADORES: 

// $each : Adiciona múltiplos valores a um array ;
// $slice : Limita o número de elementos do array . Requer o uso do modificador $each ;
// $sort : Ordena os elementos do array . Requer o uso do modificador $each ;
// $position : Especifica a posição do elemento que está sendo inserido no array . Também requer o modificador $each. Sem o modificador $position, o operador $push adiciona o elemento no final do array .

// Exemplo:

db.supplies.updateOne(
  {_id: 1 }, // Filtro
  { $push:  // Adiciona 1 elemento específico no array items (items: [...])
    { 
      items: {
        "name": "notepad",
        "price":  35.29,
        "quantity": 2
      },
    } 
  },
  { upsert: true }
);


// Exemplo2:

db.supplies.updateOne(
  {}, // Filtro omitido, adiciona em todos
  { $push: {
      items: // Nome do array
      { $each: [ // Modificador (p/ adicionar multiplos elementos)
         {
          "name": "pens",
          "price": 56.12, // Item do array
          "quantity": 5 
        },
        {
          "name": "envelopes",
          "price": 19.95, // Item do array
          "quantity": 8
        }
      ] }
    }
  },
  { upsert: false } // Atualiza ou insere os dados caso não existam
);

// Exemplo3:

db.supplies.updateOne(
  { _id: 1}, // Filtro
  { $push: {
      items: { 
each: [ // Adicionar múltiplos elementos em um array
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5
          }
      ],
sort: { quantity: -1 }, // Ordenar pelo campo quantity em ordem decrescente
slice: 2 // Mantém somente os 2 primeiros itens do array, o resto é excluido.
    }
    }
  },
  { upsert: true }
);