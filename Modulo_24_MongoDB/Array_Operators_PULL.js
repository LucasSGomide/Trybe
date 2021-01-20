// O operador $pull remove de um array existente todos os elementos com um ou mais valores que atendam à condição especificada.

// $pull

// Exemplo:

db.supplies.updateMany(
  {}, // Filtro de seleção omitido (retorna todos)
  {
pull: { // Modificador para remover
      "items": { // Array
        "name": { $in: ["pens", "envelopes"] } // Remove os itens que possuem name "pens" e "envelopes".
      },
    }
  }
);

// Exemplo2:

db.profiles.updateOne(
  { _id: 1 }, // Filtro de seleção
  {
pull: { // Modificador para remover
      votes: { $gte: 6 } // Remove do array VOTES todos os itens que são maiores ou iguais a 6
    }
  }
);

// Exemplo 3

db.survey.updateMany(
  {}, // Filtro de seleção omitido (retorna todos)
  {
pull: { // Modificador para remover
      results: { score: 8 , item: "B" } // Remove itens com score = a 8 e tipo de item "B"
    }
  }
);