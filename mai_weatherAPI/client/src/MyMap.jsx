import { GoogleMap, useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";

function MyMap({ setSearch }) {
  const inputRef = useRef(null);
  const { isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDXYuobPuPmLYTAFkzcptwU362ZqBYh4PQ',
    libraries: ["places"],
  });

  const handleOnPlacesChanged = () => {
    const places = inputRef.current.getPlaces();
    if (places.length > 0) {
      setSearch(places[0].formatted_address); 
    }
  };

  return (
    <div>
      {isLoaded && (
        <StandaloneSearchBox 
          onLoad={(ref) => (inputRef.current = ref)} 
          onPlacesChanged={handleOnPlacesChanged}
        >
          <input
            type='text'
            placeholder="Type a city name..."
          />
        </StandaloneSearchBox>
      )}
    </div>
  );
}

export default MyMap;
