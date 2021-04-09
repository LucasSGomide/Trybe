const numberManager = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (isNaN(a) === false && isNaN(b) === false && isNaN(c) === false) {
      const sumAB = a + b;
      const result = sumAB * c;
      if (result > 50) {
        resolve(result);
      } else if (result <= 50) {
        reject(new Error('Valor muito baixo'));
      }
    } else {
      reject(new Error('Digite apenas números'));
    };
  })
};

numberManager(3, 3, 10)
.then((result) => console.log(`Result: ${result}`))
.catch((err) => console.log(`Error: ${err.message}`));
