// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = (temperature) => {
  const maxTemperature = 58;
  const marsTemp = (Math.floor(Math.random() * maxTemperature));

  return temperature(marsTemp)
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (marsTemp) => {
  setTimeout(() => {
    console.log(`Mars temperature is: ${marsTemp} degree Celsius`)
  }, messageDelay());
}


getMarsTemperature(sendMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo