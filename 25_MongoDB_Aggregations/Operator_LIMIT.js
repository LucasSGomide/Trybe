// O operador $limit limita o número de documentos que seguem para o próximo estágio da pipeline.

// $limit : 5 (sempre recebe inteiro positivo)

db.articles.aggregate(
  [
    { $limit : 5 } // Limita em 5 os documentos a serem retornados.
  ]
);

