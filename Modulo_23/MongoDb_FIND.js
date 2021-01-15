
// { <campo>: { <operador_de_comparação>: <valor> } } sintaxe de comparação.

db.collection.find() // Retorna todos os documentos da coleção

db.collection.findOne(
  { "title" : "Forrest Gump" },  // QUERY/ FILTRO
  { "title" : 1, "imdb_rating" : 1 } // PROJECTION/ Define quais CAMPOS serão RETORNADOS
)

db.collection.find({}, { name: 1 }) // Omitiu o 1º parâmetro filtro, logo retornará todas os documentos com a chave name.

db.collection.find( { chave: { $gt: 4 } } ) // procura chave que seja greater than 4

db.collection.find( { _id: 5 } ) // Retorna todos os campos que possuam id = a 5

db.collection.find( { "name.last": "Hopper" } ) // Retorna todos os documentos da coleção bios em que o campo last do subdocumento name é igual a "Hopper" (subdocumentos são como se fossem objetos dentro de objetos)