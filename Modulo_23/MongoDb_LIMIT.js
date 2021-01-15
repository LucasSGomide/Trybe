db.collection.find("<query>").limit("<número>") // Retornará o <número> definido de itens que se encaixam na <query> definida. Se a query for vazia retorna <numero> de itens da coleção.

db.collection.find().limit(5).pretty() // Adiciona indetação no retorno da solicitação ficando mais organizado.

db.collection.find().skip(2) // Skip permite definir a partir de qual ponto os resultados começaram a ser retornados.

db.collection.find().limit(10).skip(5) // Começa a partir do 5 e retorna somente 10 resultados