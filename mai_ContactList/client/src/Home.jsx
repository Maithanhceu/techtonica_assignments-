import { useState, useEffect } from "react";
import Contacts from "../components/Contacts";
import CreateContact from "../components/CreateContact";
import ViewContact from "../components/ViewContact";
import '../src/components/CSS/Home.css';

function Home() { 
  const [contacts, setContacts] = useState([]);
 
  const fetchContacts = async () => {
    try {
      const response = await fetch('/mai_contacts'); // Adjust the URL if necessary
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <><h1 className="header">Hi, Welcome to Mai Contact List</h1>
    <div className="app-container">
      <div className="contacts-section">
        <Contacts contacts={contacts} />
      </div>
      <div className="create-contact-section">
        <CreateContact contacts={contacts} />
      </div>
      <div className="view-contact-section">
        <ViewContact contacts={contacts} />
      </div>
    </div></>
  );
}

export default Home;
