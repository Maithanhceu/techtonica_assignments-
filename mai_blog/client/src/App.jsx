import { useState, useEffect } from "react";
import Place from "./Place";


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

  return (
    <div>
      <h1>
        Mai Travel Blog! 
        <div> If you have a hard time pronouncing my Name, do not be discouraged! 
          It&rsquo;s pronounced "My", like: My Friend, My Favorite Person, or My 
          Extraordinary, Endearing Confident
        </div>
      </h1>
    <Place data = {data}/> 
    </div>
  );
}

export default App;

