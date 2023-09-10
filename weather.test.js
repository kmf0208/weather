const Weather = require('./weather')


it('should return success == true when API works correctly', async () => {
    const weather = new Weather();
    jest.spyOn(weather, 'load').mockReturnValue(
    {
        city: "London",
        temperature: 30
    }
    )
    const city = 'London';
    await weather.load(city);
    expect(weather.city).toBe("London");
    expect(weather.temperature).toBe(30);
})