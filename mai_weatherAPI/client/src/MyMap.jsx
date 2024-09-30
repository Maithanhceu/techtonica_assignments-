import { GoogleMap, useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";

function MyMap({ setSearch }) {
  const inputRef = useRef(null);
  const [mapError, setMapError] = useState('');
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
    libraries: ["places"],
  });

  useEffect(() => {
    if (loadError) {
      setMapError('Error loading Google Maps. Please try again later.');
      console.error('Map loading error:', loadError);
    }
  }, [loadError]);

  const handleOnPlacesChanged = () => {
    const places = inputRef.current.getPlaces();
    if (places.length > 0) {
      setSearch(places[0].formatted_address); // Set the search input based on selected place
    }
  };

  return (
    <div>
      {mapError && <p style={{ color: 'red' }}>{mapError}</p>}
      {isLoaded && (
        <StandaloneSearchBox 
          onLoad={(ref) => (inputRef.current = ref)} 
          onPlacesChanged={handleOnPlacesChanged}
          options={{
            componentRestrictions: { country: 'us' }, // Restrict to US cities (can adjust to your needs)
            types: ['(cities)'], // This will restrict the search to city types
          }}
        >
          <input
            type='text'
            placeholder="Example: Paris, Berlin, Chicago, etc."
          />
        </StandaloneSearchBox>
      )}
    </div>
  );
}

export default MyMap;
