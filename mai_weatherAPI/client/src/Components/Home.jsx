import { useState } from "react";
import '../Components/Home.css';
import Icon from "./Icon";

function Home() {
  const [weatherData, setWeatherData] = useState('');
  const [city, setCity] = useState('');
  const [iconCode, setIconCode] = useState('');

  async function fetchWeatherData() {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(`/weather/${encodeURIComponent(city)}`);
      const data = await response.json();
      setWeatherData(data);
      const icon = data.weather[0].icon;
      setIconCode(icon);
    } catch (error) {
      console.error("Error fetching the weather data", error);
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <>
      <h1>Mai Weather App</h1>
      {weatherData && iconCode && <Icon iconCode={iconCode} />}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name! For example: Vienna, Budapest, Hasselt"
        required
      />
      <button onClick={fetchWeatherData}>Search Weather Report</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Wind Speed: </strong>{weatherData.wind.speed} m/s</p>
        </div>
      )}

    </>

  );
}

export default Home;
