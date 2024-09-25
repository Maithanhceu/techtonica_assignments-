// import {useState, useEffect} from 'react'; 
import SpeciesCard from "../Components /SpeciesCard";
import Sightings from "../Components /Sightings";
import IndividualAnimal from "../Components /IndividualAnimal";
import AllSightings from "../Components /AllSightings";
import './App.css'
//rfce (will create a funtional component for App)
function App() {
  // const [message, setMessage] = 

  return (
    <div className='Mai App'>
      <h1 className="header">Mai  Animal Tracking App</h1>
      <div className="container">
      <div className="row">
          <Sightings className="item-3" />
          <IndividualAnimal className="item-4" />
        </div>
        <div className="row">
          <SpeciesCard className="item item-1" />
          <AllSightings className="item item-2" />
        </div>
      </div>

    </div>
  )
}

export default App; 