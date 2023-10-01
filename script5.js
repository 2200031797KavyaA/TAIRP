const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
async function displayWeather() {
    const city = 'YOUR_CITY_NAME'; // Replace with your desired city
    const weatherData = await getWeatherData(city);
    if (weatherData) {
        document.getElementById('location').textContent = weatherData.name;
        document.getElementById('temperature').textContent = weatherData.main.temp;
        document.getElementById('description').textContent = weatherData.weather[0].description;

        const iconCode = weatherData.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        document.getElementById('weather-icon').style.backgroundImage = `url(${iconUrl})`;
    }
}
displayWeather();
