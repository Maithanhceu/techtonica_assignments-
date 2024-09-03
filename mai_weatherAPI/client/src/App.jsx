import './App.css';
import { useState } from 'react';
import Icon from "./Icon.jsx";

function App() {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const searchPressed = async () => {
    if (search.trim() === '') {
      setError('Please enter a location. :)');
      setWeatherData(null);
      return;
    }

    try {
      const response = await fetch (`http://localhost:5000/weather/${search}`);
      const data = await response.json();
      setWeatherData(data);
      setError('');

    } catch (error) {
      setError('Error fetching weather data.');
      setWeatherData(null);
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Weather App</h1>
        <div>
          {/* Parent component to child */}
          {weatherData && (
            <Icon iconCode={weatherData.weather[0].icon} />
          )}
          <input

            type="text"
            placeholder="Ex. Vienna, Budapest, Hasselt"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {error && <p>{error}</p>}

        {weatherData && (
          <div className="weather-info">
            <p>Location: {weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp} °F</p>
            <p>Condition: {weatherData.weather[0].description}</p>
            <p>Wind Speed: {weatherData.wind.speed} mph</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

