// Replace with your OpenWeatherMap API key
const API_KEY = "02c0cb2b50f84b840cc9e1339ae6ccb8";

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");

async function getWeatherData(city) {
  weatherInfo.innerHTML = "Loading weather data... ⏳";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    displayWeather(data);

  } catch (error) {
    let message = "Failed to fetch weather data.";

    if (error.message === "404") {
      message = "City not found. Please try again.";
    } else if (error.message === "401") {
      message = "Invalid API Key.";
    }

    weatherInfo.innerHTML = `<p class="error-message">${message}</p>`;
  }
}

function displayWeather(data) {
  const description =
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1);

  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p class="temp">${data.main.temp}°C</p>
    <p>${description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  } else {
    weatherInfo.innerHTML =
      '<p class="error-message">Please enter a city name!</p>';
  }
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeatherBtn.click();
  }
});

window.onload = () => {
  weatherInfo.innerHTML =
    'Enter a city name and click "Get Weather" to see the current conditions.';
};