import { useState, useEffect } from "react";
// import ViewContact from './components/ViewContact';
import Contacts from "../components/Contacts";
import CreateContact from "../components/CreateContact";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/mai_contacts');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      {/* <ViewContact contacts={contacts} /> */}
      <Contacts contacts={contacts} /> 
      <CreateContact contacts={contacts} />
    </div>
  );
}

export default App;
