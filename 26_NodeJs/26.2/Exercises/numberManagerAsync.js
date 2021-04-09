// const util = require("util");

// const numberManager = (a, b, c) => {
//   if (isNaN(a) === false && isNaN(b) === false && isNaN(c) === false) {
//     const sumAB = a + b;
//     const result = sumAB * c;
//     if (result > 50) {
//       return (result);
//     } else if (result <= 50) {
//       return (new Error('Valor muito baixo'));
//     } else if (isNaN(a) && isNaN(b) && isNaN(c)) {
//       return (new Error('Digite apenas números'));
//     }
//   };
// };

// const numbersPromise = util.promisify(numberManager);

// async function testAsync(a, b, c) {
//   try {
//     const result = await numbersPromise(a, b, c);
//     console.log(result);
//   } catch (err) {
//     console.log(err.message)
//   }
// }

// testAsync(3, 3, 10);

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

const runAsync = async (a, b, c) => {
  try {
    const result = await numberManager(a, b, c);
    console.log(result);
  } catch(err) {
    console.log(err.message);
  };
};

runAsync(3, 'a', 10);
