import { useState, useEffect } from "react";
import Contacts from "../components/Contacts";
import CreateContact from "../components/CreateContact";
import ViewContact from "../components/ViewContact";
import './App.css';

function App() { 
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

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

export default App;
