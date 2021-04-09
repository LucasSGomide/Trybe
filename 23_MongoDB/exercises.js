// 1 -Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.

// 2 - Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.

db.superheroes.find({ "aspects.height": { $lt: 180 } })

// 3 - Retorne o total de super-heróis menores que 1.80m.

db.superheroes.find({ "aspects.height": { $lt: 180 } }).count()
// 421

// 4 - Retorne o total de super-heróis com até 1.80m.

db.superheroes.find({ "aspects.height": { $lte: 180 } }).count()
// 459 

// 5 - Selecione um super-herói com 2.00m ou mais de altura.

db.superheroes.findOne({ "aspects.height": { $gte: 200 } })

// 6 - Retorne o total de super-heróis com 2.00m ou mais.

db.superheroes.find({ "aspects.height": { $gte: 200 } }).count()
// 59

// 7 - Selecione todos os super-heróis que têm olhos verdes.

db.superheroes.find({ "aspects.eyeColor": "green" })

// 8 - Retorne o total de super-heróis com olhos azuis.

db.superheroes.find({ "aspects.eyeColor": "blue" }).count()
// 225

// 9 - Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).

db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair"] } })

// 10 - Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).

db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair"] } }).count()
// 233

// 11 - Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

db.superheroes.find({ "aspects.hairColor": { $nin: [ "Black", "No Hair"] } }).count()
// 501

// 12 - Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.

db.superheroes.find({ "aspects.height": { $not: { $gt: 180} } }).count()
// 459

// 13 - Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m.

db.superheroes.find({ "aspects.height": { $lte: 180 } })

db.superheroes.find({
  $and: [
    { "race": { $ne: "Human" } },
    { "aspects.height": { $lte: 180 } }
  ]
})
