import { useState, useEffect } from "react"
import EditSpeciesForm from "./EditSpeciesForm";
import './Species.css'

function SpeciesCard() {
  //useState is a react hook always returns and array of values; 
  // the first value is the current state;
  // the second value is the function that allows you to update that state; 
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null)

  //fetching the data from my species table 
  //fetch is promise based
  const fetchSpeciesCard = () => {
    fetch("http://localhost:1113/species")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  };

  // Use useEffect to fetch the species data when the component mounts
  useEffect(() => {
    fetchSpeciesCard();
  }, []);

  const handleUpdate = (updatedItem) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.species_id === updatedItem.species_id ? updatedItem : item
      )
    );
    setEditingItem(null); 
  };

  const handleDelete = (speciesId) => {
    setData((prevData) => prevData.filter((item) => item.species_id !== speciesId));
};


  return (
    <div>
      <h1>Species Card</h1>
      {data.length > 0 ? (
        <div className="container">
          {data.map(item => (
            <div className="item" key={item.species_id}>
              <h2 className="title">{item.common_name}</h2>
              <p><strong>Scientific Name: </strong>{item.scientific_name}</p>
              <p><strong>Estimated Number: </strong>{item.estimated_number}</p>
              <p><strong>Conservation Status: </strong>{item.conservation_status}</p>
              <p><strong>Created At: </strong>{new Date(item.created_at).toLocaleDateString()}</p>
              <button className="button"onClick={() => setEditingItem(item)}>Edit</button>
            </div>
          ))}
          {editingItem && (
        <EditSpeciesForm className='EditSpecies' item={editingItem} onUpdate={handleUpdate} onDelete={handleDelete} />
          )}
        </div>
      ) : (
        <p>Loading species data...</p>
      )}
    </div>
  );
}

export default SpeciesCard;
