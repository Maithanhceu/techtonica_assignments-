import "./App.css";
import { useState } from "react";
import FormApp from "./formApp"; 
import Message from "./message";

export default function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({});

  const submitData = (data) => {
    console.log('Submitted data:', data);
    setIsSubmit(true);
    setData(data);
  };

  return (
    <div className="App">
      <h1>Thank you for Submitting your refound</h1> 

      {isSubmit ? (
        <Message data={data} />
      ) : (
        <FormApp newSubmit={submitData}/>
      )}
    </div>
  );
}
