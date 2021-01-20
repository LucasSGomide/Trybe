// O operador $addToSet é utilizado quando você precisa garantir que os valores de um array não sejam duplicados.

// Se utilizar em um campo que não existe, será criado um novo campo.
// Se utilizar em um campo já existente mas não for array a operação quebra.
// 

// Se o valor passado for um documento, o MongoDB o considerará como duplicado se um documento existente no array for exatamente igual ao documento a ser adicionado, ou seja, possui os mesmos campos com os mesmos valores, e esses campos estão na mesma ordem. (NÃO ENTENDI)

// Exemplo:

db.inventory.updateOne(
  { _id: 1 }, // Filtro
  { $addToSet: { tags: "accessories" } } // Adiciona accessories ao array tags se não tiver accessories no array
);

// Exemplo2:

db.inventory.updateOne(
  { _id: 2 }, // Filtro
  {
addToSet: { // Adiciona se não existir registros iguais
      tags: {
each: ["camera", "electronics", "accessories"] // Adiciona multiplos elementos. Os que existem no array são ignorados.
      }
    }
  }
);
