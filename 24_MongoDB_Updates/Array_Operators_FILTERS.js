// Utilizado quando precisamos acessar algum elemento específico que está dentro de um array em um ou mais itens da coleção.

db.recipes.updateMany(
  {}, // Filtro omitido
  { $set : { // Seta valores ou atualiza
    "ingredients.$[elemento].unit": "xícara", // Adiciona a CHAVE:unit com VALOR: xícara
    "ingredients.$[elemento].name": "Farinha Integral"// Modifica o name para "Farinha Integral".
    }
  }, 
  { arrayFilters: [ { "elemento.name": "Farinha" } ]} // Filtra os arrays presentes na coleção em que o valor da chave name seja "Farinha".
);