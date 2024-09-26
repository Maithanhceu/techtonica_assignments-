import { useState } from "react";

function Contacts({ contacts }) {
  const [contact, setContact] = useState({}); // Initialize with empty object

  function handleSelectChange(event) {
    const selectedContactId = event.target.value; // Get the selected contact ID
    const selectedContact = contacts.find(contact => contact.contactid === parseInt(selectedContactId));
    setContact(selectedContact); 
  }

  return (
    <div>
      <h2>Contacts</h2>
      {/* onChange triggers when a selection is made */}
      <select onChange={handleSelectChange}>
        {contacts.map((contact) => (
          <option key={contact.contactid} value={contact.contactid}>
            {contact.name}
          </option>
        ))}
      </select>

      {contact && contact.name && (
        <div>
          <h3>Contact Information</h3>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Contacts;
