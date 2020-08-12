const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 

const morningTurn = (obj, objKey, objValue) => {
  obj[objKey] = objValue
}

morningTurn(lesson2, 'turno', 'Manhã')

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjsKeys = obj => Object.keys(obj);

/* console.log(listObjsKeys(lesson1));
console.log((`As keys do objeto são: ${listObjsKeys(lesson1)}`)); */

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const objSize = obj => Object.entries(obj).length

// console.log(objSize(lesson1))

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objValues = obj => Object.values(obj)

// console.log(objValues(lesson2))

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {'lesson1' : lesson1, 'lesson2' : lesson2, 'lesson3' : lesson3})

//console.log(allLessons)

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberOfStudents = obj => {
  let sum = 0;
  const objKeys = Object.keys(obj)
  const studentNumber = 'numeroEstudantes'
  for (key in objKeys) {
    let accessKey = objKeys[key]
    console.log(`${accessKey} = ${obj[accessKey].numeroEstudantes} Alunos.`)
    sum += obj[accessKey].numeroEstudantes;
  }
  return sum;
}

// console.log(numberOfStudents(allLessons))

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (obj, number) => {
  const valuesArr = Object.values(obj)
  return valuesArr[number];
}

// console.log(getValueByNumber(lesson1, 3))

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, objKey, objValue) => {
  const keysArr = Object.keys(obj);
  const valuesArr = Object.values(obj);
  if (keysArr.includes(objKey) && valuesArr.includes(objValue)) {
    return true
  } else {
    return false
  }
}

// Bonus1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const studentsInMath = (obj, subject) => {
  let sum = 0;
  const objKeys = Object.keys(obj)
  for (key in objKeys) {
    let accessKey = objKeys[key]
    let dinamicArr = Object.values(obj[accessKey])
    if (dinamicArr.includes(subject)) {
      sum += obj[objKeys[key]].numeroEstudantes;
    }
  }
  return sum
}

// console.log(studentsInMath(allLessons, 'Históra'))

// Bonus2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (obj, professor) => {
  const keyArr = Object.keys(obj);
  let subjArr = []
  let sum = 0

  for (index in keyArr) {
    let accessKey = keyArr[index]
    let dinamicArr = Object.values(obj[accessKey])
    if (dinamicArr.includes(professor)) {
      subjArr.push(obj[accessKey].materia);
      sum += obj[accessKey].numeroEstudantes;
    }
  }
  return `Professor: ${professor} 
  Aulas: ${subjArr} 
  Estudantes: ${sum}`
}

console.log(createReport(allLessons, 'Carlos'))