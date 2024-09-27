import { useState } from "react";

function Contacts({ contacts }) {
    const [selectedContact, setSelectedContact] = useState(null);

    function handleSelectChange(event) {
        const selectedContactId = event.target.value; // Get the selected contact ID
        const contact = contacts.find(contact => contact.contactid === parseInt(selectedContactId));
        setSelectedContact(contact); 
    }

    return (
        <div>
            <h2>Contacts</h2>
            <select onChange={handleSelectChange}>
                <option value=" ">Select a contact</option> {/* Option for default selection */}
                {contacts.map((contact) => (
                    <option key={contact.contactid} value={contact.contactid}>
                        {contact.name}
                    </option>
                ))}
            </select>
            {selectedContact && (
                <div>
                    <p>Contact Id: {selectedContact.contactid}</p>
                    <p>Name: {selectedContact.name}</p>
                    <p>Email: {selectedContact.email}</p>
                    <p>Phone: {selectedContact.phone}</p>
                    <p>Notes: {selectedContact.notes}</p>
                    <p>Quotes: {selectedContact.quotes}</p>
                    <p>Vibe: {selectedContact.vibe}</p>
                </div>
            )}
        </div>
    );
}

export default Contacts;
