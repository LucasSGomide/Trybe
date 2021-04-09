const numberFunction = () => {
  return new Promise((resolve, reject) => {
    const numbersArray = Array(10).fill(1);
    const randomNumber = numbersArray
    .map((number => (number * Math.floor(Math.random() * 51)) ** 2))
    .reduce((acc, curr) => acc += curr ,0)

    if (randomNumber < 8000) {
      const newArr = [2, 3, 5, 10];
      const resultArr = newArr.map((element) => Math.floor(randomNumber / element))
      resolve(resultArr)
    }
    reject(`${randomNumber} É mais de oito mil !! (Vegeta Voice)`)
  })
};

numberFunction()
.then((text) => console.log(text))
.catch((err) => console.log(err))