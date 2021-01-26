// $addFields-> O $addFields é um estágio que adiciona novos campos aos documentos.

// $addFields

// Exemplo:

// {
//   _id: 1,
//   student: "Maya",
//   homework: [10, 5, 10],
//   quiz: [10, 8],
//   extraCredit: 0
// },
// {
//   _id: 2,
//   student: "Ryan",
//   homework: [5, 6, 5],
//   quiz: [8, 8],
//   extraCredit: 8
// }

db.scores.aggregate([
  {
    $addFields: {
      totalHomework: { $sum: "$homework" } , // Faz a soma (dos itens do array) e atribui ao novo campo 
      totalQuiz: { $sum: "$quiz" } // Faz a soma (dos itens do array) e atribui ao novo campo
    }
  },
  {
    $addFields: {
      totalScore: {
        $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] // Faz a adição e atribui ao novo campo.
      }
    }
  }
]);

// retorno:

// {
//   "_id" : 1,
//   "student" : "Maya",
//   "homework" : [ 10, 5, 10 ],
//   "quiz" : [ 10, 8 ],
//   "extraCredit" : 0,
//   "totalHomework" : 25,
//   "totalQuiz" : 18,
//   "totalScore" : 43
// }
// {
//   "_id" : 2,
//   "student" : "Ryan",
//   "homework" : [ 5, 6, 5 ],
//   "quiz" : [ 8, 8 ],
//   "extraCredit" : 8,
//   "totalHomework" : 16,
//   "totalQuiz" : 16,
//   "totalScore" : 40
// }