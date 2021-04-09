const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    reject(number);
  }
  resolve(number); // envia o number para o primeiro then
})
.then(number => `Que sucesso =) nosso número foi ${number}`) // esta saída vai para o segunda then (text + number)
.then(msg => console.log(msg)) // da o log ta concatenação
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));