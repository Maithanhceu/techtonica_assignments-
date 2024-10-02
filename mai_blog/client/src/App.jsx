import { useState, useEffect } from "react";
import Place from "./Place";
import EntrieForm from "./EntrieForm";
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData); 
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const smallExpoText = `If you have a hard time pronouncing my name, do not be discouraged! 
  It's pronounced 'My', like: My Friend, My Favorite Person, or My 
  Extraordinary, Endearing Confident.`;
  
  return (
    <div>
      <h1>
        Mai Travel Blog! 
        <div className="smallExpoText"> 
          {smallExpoText}
        </div>
      </h1>
    <Place data = {data}/> 
    <EntrieForm/>

    </div>
  );
}

export default App;

