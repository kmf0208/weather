const WeatherClient = require('./weatherClient');
const apiKey = require('./apiKey')
describe('WeatherClient', () => {
  const apiKey1 = apiKey;
  const client = new WeatherClient(apiKey1);
  it('should fetch weather data for a city', async () => {
    const city = 'London';
    const weatherClient = new WeatherClient(apiKey);
    jest.spyOn(weatherClient, 'fetchWeatherData').mockResolvedValue({
      name: 'London',
      weather: [{ main: 'Clear', description: 'Clear sky' }],
      main: { temp: 20 },
    });
    const weatherData = await weatherClient.fetchWeatherData(city);
    
    expect(weatherData.name).toBe('London');
    expect(weatherData.weather[0].main).toBe('Clear');
    expect(weatherData.main.temp).toBe(20);
  });
  it('should handle errors when fetching weather data', async () => {
    const city = 'InvalidCity';
    try {
      await client.fetchWeatherData(city);
    } catch (error) {
      expect(error.message).toBe('Error fetching weather data: City not found');
    }
  });
});