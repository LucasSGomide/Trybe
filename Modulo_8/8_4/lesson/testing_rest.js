const personObj = {
  pessoa1: {nome: 'lucas', idade: 28},
  pessoa2: {nome: 'andré', idade: 22},
}


const {nome, idade} = personObj

console.log(personObj.pessoa2)


const test = {
  jobs: ['engraxate', 'marinheiro', 'x', 'y', 'z']
};

const newArr = Object.values(jobs)

//console.log(Object.values(jobs))
function organizeJob(x, y, z) {
  console.log(`Ele foi ${x} também ${y} e ${z}`) 
}

organizeJob(...newArr)