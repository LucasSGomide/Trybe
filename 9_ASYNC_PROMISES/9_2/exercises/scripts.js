const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const jokeContainer = document.querySelector('#jokeContainer')

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data) => {
      jokeContainer.innerHTML = data.joke
    })
};

const promise = new Promise((resolve, reject) => {
  const numbersArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const randomNumber = numbersArray
  .map((number => (number * Math.floor(Math.random() * 51)) ** 2))
  .reduce((acc, curr) => acc += curr ,0)

  if (randomNumber < 8000) resolve(`${randomNumber} < 8000 Deu bom =)`)
  reject(`${randomNumber} > 8000 Deu ruim =(`)
  
})

window.onload = () => {
  fetchJoke();
} 