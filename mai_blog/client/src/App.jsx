import { useState, useEffect } from "react";
import Place from "./Components/Place";
import EntrieForm from "./Components/EntrieForm";
import './CSS/App.css'
import AllPostCards from "./Components/AllPostCards";

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

const smallExpoText = `If you have a hard time pronouncing my name, please don't be discouraged! 
  It's pronounced "My," just like in "My Friend," "My Favorite Person," or "My Extraordinary, Endearing Confident."`;
  ;

  return (
    <div className="blogContainer">
      <h1 className="blogTitle">
        Mai Travel Blog!
        <div className="smallExpoText">{smallExpoText}</div>
      </h1>
      <div className="container">
        <div className="individualPost">
          <Place data={data} />
          <EntrieForm />
        </div>
        <div className="postcards">
          <AllPostCards data={data} />
        </div>
      </div>
    </div>
  );
}
export default App;

