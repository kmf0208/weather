class WeatherClient {
    constructor(apiKey) {
      this.apiKey = apiKey;
    }
  
    async fetchWeatherData(city) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`Error fetching weather data: ${error.message}`);
      }
    }
  }
  
  module.exports = WeatherClient;