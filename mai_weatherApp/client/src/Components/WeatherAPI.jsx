import { useState} from "react";
import { useUser } from './UserContext'; 
import Icon from "./Icon";

function WeatherAPI() {
    const [search, setSearch] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const { userData } = useUser(); 
    const userId = userData?.id; 
  
    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission
    
        if (search.trim() === '') {
          setError('Please enter a location. :)');
          return; // Exit if the search input is empty
        }
    
        try {
          const response = await fetch(`/weather/${search}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeatherData(data); // Set the fetched weather data
          setError(''); // Clear any previous errors
        } catch (err) {
          setError('Error fetching weather data. Please try again later.');
          console.error('Error fetching weather data:', err);
        }
      };
  
      const handleAddFavorite = async () => {
          if (!userId) {
              alert('Please sign in to add a favorite location.');
              return;
          }
  
          try {
              const response = await fetch(`/users/${userId}`, {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ favorite_city: weatherData.name }),
              });
  
              if (!response.ok) {
                  throw new Error('Error adding favorite');
              }
  
              alert('Location added to favorites!');
          } catch (err) {
              console.error('Error saving favorite location:', err);
              alert ('Could not save favorite location.');
          }
      };

      return (
        <div className='App'>
          <header className='App-header'>
            <h1> Mai Weather App</h1>
    
            {/* Icon is rendered only if weather data is available */}
            {weatherData?.weather[0]?.icon && (
              <Icon iconCode={weatherData.weather[0].icon} />
            )}
    
            <form onSubmit={handleSearch}>
              <input 
                type="text"
                placeholder="Enter location"
                value={search}
                onChange={(e) => setSearch(e.target.value)} // Update search state
              />
              <button type="submit">Search</button> {/* Use button type submit */}
            </form>
            
            {error && <p style={{ color: 'white' }}>{error}</p>}
    
            {weatherData && (
              <div className="weather-info">
                <p><strong>Location: </strong>{weatherData.name}</p>
                <p><strong>Temperature:</strong> {weatherData.main.temp} °F</p>
                <p><strong>Condition:</strong> {weatherData.weather[0].description}</p>
                <p><strong>Wind Speed:</strong> {weatherData.wind.speed} mph</p>
                <button onClick={handleAddFavorite}>❤️ Add to Favorites</button>
              </div>
            )}
          </header>
        </div>
      );
    }
export default WeatherAPI