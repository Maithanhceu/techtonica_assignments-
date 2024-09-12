import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import ListStudents from './components/ListEvents';
import { useState, useEffect } from 'react';
import ListEvents from './components/ListEvents';

function App() {
  const [data, setData] = useState(null);

  const fetchingData = async () => {
    try {
      const response = await fetch('http://localhost:8080/events');
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; 

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="App">
      <MyNavBar />
      <ListEvents />
    </div>
  );
}

export default App;
