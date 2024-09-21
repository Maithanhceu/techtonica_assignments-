import { response } from "express"
import { useState } from "react"

function SpeciesCard() {
    //useState is a react hook 
    

    //fetching the data from my species table 
    //fetch is promise based
    const fetchSpeciesCard  = () => {
        fetch ("http://localhost:1113/species")
        .then (response => response.json())
        .then (data => c )q
    }





  return (
    <div>SpeciesCard</div>
  )
}

export default SpeciesCard