import { useState, useEffect } from 'react';
import Icon from "./Icon.jsx";
import MyMap from './MyMap.jsx';
import CreateUser from './CreateUser.jsx';
import './Home.css'

function Home() {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const searchPressed = async () => {
  
    if (search.trim() === '') {
      setError('Please enter a location. :)');
      return;
    }

    try {
      const response = await fetch(`/weather/${search}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError('Error fetching weather data. Please try again later.');
      console.error('Error fetching weather data:', error);
    }
  };

  // Effect to manage weather data fetching error state
  useEffect(() => {
    if (error) {
      console.error('Error in App:', error); // Log error details for debugging
    }
  }, [error]); // Runs when `error` state changes

  return (
    <div className='App'>
      <nav><CreateUser/> </nav>
      <header className='App-header'>
        <h1>Weather App</h1>
        {/* Icon is rendered only if weather data is available */}
        {weatherData && weatherData.weather[0].icon && (
              <Icon iconCode={weatherData.weather[0].icon} />
        )}

        <MyMap setSearch={setSearch} />

        <div>
          <button onClick={searchPressed}>Search</button>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}

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

export default Home;
