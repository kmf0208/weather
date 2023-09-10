
const apiKey = require('./apiKey');
const city = 'London';
const apiUrl =  `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

let weatherData = null;
const WeatherApi = ()=> {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((weatherData) => {
        console.log(weatherData)
        const temperature = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].main;
    
        console.log(`Temperature in ${city}: ${temperature}°C`);
        console.log(`Weather in ${city}: ${weatherDescription}`);
      });
}

WeatherApi()

console.log('Requesting weather data');
