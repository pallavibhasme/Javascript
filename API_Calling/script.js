document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.querySelector(".city-input");
  const btn = document.querySelector("#btn");
  const weatherInfo = document.querySelector("#weather-info");
  const cityNameDisplay = document.querySelector("#city-name");
  const temperatureDispaly = document.querySelector("#temperature");
  const descDisplay = document.querySelector("#desc");
  const errorMessage = document.querySelector("#error-message");

  const API_KEY = "2379aec19a03920e418b7c0d61fc3f2e";
  btn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
      showError();
      return;
    }
    //it may throw an error
    //database / server is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
      //   we are passing weather data
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //get the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log("response", response);

    if (!response.ok) {
      showError();
      throw new Error("City not fount");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    //display data
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;

    //   unlock display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    temperatureDispaly.textContent = `Temperature : ${main.temp}`;
    descDisplay.textContent = `Weather : ${weather[0].description}`;
  }

  function showError() {
    //shows error
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
