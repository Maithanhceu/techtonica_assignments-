import './App.css'; 
import { useState } from 'react';
import Icon from "./Icon.jsx"

//documentation: https://www.youtube.com/watch?v=_Hhg7NmmN-c

function App() {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null); 
  const [error, setError] = useState('');

  const searchPressed = async () => {
    try {
      const response = await fetch(`http://localhost:5000/weather/${search}`);
      if (!response.ok) throw new Error('Network response issue');
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setError('Error fetching your weather data');
      setWeatherData(null);
    }
  };


  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Weather App</h1>
        <div> 
        <Icon iconCode={weatherData.weather[0].icon} />
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

