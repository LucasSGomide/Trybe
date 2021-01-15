// db.colecao.deleteOne() -> remove apenas um documento, que deve satisfazer o critério de seleção

db.inventory.deleteOne({ status: "D" })


// db.colecao.deleteMany() -> remove todos os documentos que satisfaçam o critério de seleção.

db.inventory.deleteMany({ status : "A" }) // O exemplo abaixo remove todos os documentos da coleção inventory em que o campo status é igual a A 

db.inventory.deleteMany( {} ) // Remove TODOS os elementos da coleção