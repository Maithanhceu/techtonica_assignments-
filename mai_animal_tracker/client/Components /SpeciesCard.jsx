import { useState, useEffect } from "react"

function SpeciesCard() {
    //useState is a react hook always returns and array of values; 
    // the first value is the current state;
    // the second value is the function that allows you to update that state; 
    const [data, setData] = useState([])

    //fetching the data from my species table 
    //fetch is promise based
    const fetchSpeciesCard = () => {
      fetch("http://localhost:1113/species")
      .then(response => response.json())
      .then(data => setData(data)) // Properly call setData with the fetched data
      .catch(error => console.error("Error fetching data:", error));
  };

  // Use useEffect to fetch the species data when the component mounts
  useEffect(() => {
      fetchSpeciesCard();
  }, []);

  
  return (
    <div>
        <h1>SpeciesCard</h1>
        {data.length > 0 ? (
            <div>
                {data.map(item => (
                    <div key={item.species_id}>
                        <h2>{item.common_name}</h2>
                        <p>Scientific Name: {item.scientific_name}</p>
                        <p>Estimated Number: {item.estimated_number}</p>
                        <p>Conservation Status: {item.conservation_status}</p>
                        <p>Created At: {new Date(item.created_at).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p>Loading species data...</p>
        )}
    </div>
);
}

export default SpeciesCard;
