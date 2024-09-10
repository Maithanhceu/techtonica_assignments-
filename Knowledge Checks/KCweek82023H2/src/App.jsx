import Header from './components/header';
import Form from './components/form';
import Item from './components/item';
import { useState } from "react";
import './App.css'

function App() {
  const [items, setItems] = useState([{ text: "" }]);

  const addItem = (text) => {
    const newItems = [...items, { text }];
    setItems(newItems);
  };

  return (
    <div className="App">
      <Header />
      {items.map((item, index) => (
        <Item key={index} index={index} item={item} />
      ))}
      <Form addItem={addItem} />
    </div>
  );
}

export default App
