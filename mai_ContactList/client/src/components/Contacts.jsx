import { useState } from "react";
import '../components/CSS/Contacts.css';

function Contacts({ contacts, setContacts }) {
    const [selectedContact, setSelectedContact] = useState(null);

    function handleSelectChange(event) {
        const selectedContactId = event.target.value;
        const contact = contacts.find(contact => contact.contactid === parseInt(selectedContactId));
        setSelectedContact(contact);
    }

    const deleteContact = () => {
        if (!selectedContact) return; // Ensure there's a selected contact

        fetch(`/api/mai_delete/${selectedContact.contactid}`, {
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete contact");
            }
            return response.json();
        })
        .then(() => {
            // Update the state to remove the deleted contact
            setContacts(prevContacts => prevContacts.filter(contact => contact.contactid !== selectedContact.contactid));
            setSelectedContact(null); // Clear the selected contact if it's deleted
            console.log("Contact deleted successfully");
        })
        .catch(error => {
            console.error("Error:", error.message); // Log the error message to the console
        });
    };

    return (
        <div className="contacts-container">
            <h2>Contacts</h2>
            <select onChange={handleSelectChange} className="select-contact">
                <option value="">Select a contact</option>
                {contacts.map((contact) => (
                    <option key={contact.contactid} value={contact.contactid}>
                        {contact.name}
                    </option>
                ))}
            </select>

            {selectedContact && (
                <div>
                    <p className="contact-detail">Name: <strong>{selectedContact.name}</strong></p>
                    <p className="contact-detail">Email: <strong>{selectedContact.email}</strong></p>
                    <p className="contact-detail">Phone: <strong>{selectedContact.phone}</strong></p>
                    <p className="contact-detail">Notes: <strong>{selectedContact.notes}</strong></p>
                    <p className="contact-detail">Quotes: <strong>{selectedContact.quotes}</strong></p>
                    <p className="contact-detail">Vibe: <strong>{selectedContact.vibe}</strong></p>
                    
                    {/* Delete button */}
                    <button onClick={deleteContact} className="delete-button">
                        Delete Contact
                    </button>
                </div>
            )}
        </div>
    );
}

export default Contacts;
