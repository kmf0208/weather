class Weather{
    constructor(client){
        this.WeatherData = {}
        this.client =client
    }
    async load(city) {
        const data = await this.client.fetchWeatherData(city);
        this.WeatherData.city = data.data.city;
        this.WeatherData.temperature = data.data.temperature;
      } 
    
    getWeatherData(city){
        return this.WeatherData.city
    }
}

module.exports = Weather