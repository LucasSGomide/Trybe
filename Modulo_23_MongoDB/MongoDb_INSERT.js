db.createCollection( "minhaColecao4", { collation: { locale: "fr" } } ); // Cria uma collection de forma explicita porém só é usado quando precisamos especificar parâmetros

"use database_name" // Cria uma nova dataBase SEM ASPAS

db.collection_name.insertOne({ chave: "Valor", chave2: "Valor2" }) // Insere elemento criando uma nova collection caso esta não exista.

db.collection_name.insertMany([ { chave: "Valor", chave2: "Valor2" }, { chave: "Valor", chave2: "Valor2" } ], "ordered: false") // Insere vários arquivos em sequencia, só adicionar ao objeto. O ordered: false serve para ignorar erros caso existam ocorrências duplicadas. ORDERED SEM ASPAS

