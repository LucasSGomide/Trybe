const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;

let myObj = {nome : 'Lucas', idade : '27', sexo : 'Masculino',}

const appendObject = (obj, objKey, objValue) => {
  obj[objKey] = objValue
  return obj
}


// Exercise 2

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const studentSkills = student => {
  for (keys in student) {
    console.log(`${keys}, Nível: ${student[keys]}`)
  }
}

studentSkillsKeys = student => Object.keys(student); // Acessando KEYS


// Exercise 3

const listSkillsWithFor = (student) => { // Acessando Values
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student); // Acessando Values

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

// Obj. Entries 
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};

//Obj. Assign:

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family, {teste : 'Teste'})
console.log(person)
