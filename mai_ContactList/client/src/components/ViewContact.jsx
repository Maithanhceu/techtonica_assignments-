import { useState } from "react";
import './ViewContact.css'; // Ensure you import the CSS file

function ViewContact({ contacts }) {
    const [showFullList, setShowFullList] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);
    const [updatedUserData, setUpdatedUserData] = useState({});

    const toggleFullList = () => {
        setShowFullList(prev => !prev);
    };

    const handleEditClick = (contact) => {
        setEditingUserId(contact.contactid);
        setUpdatedUserData({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            notes: contact.notes,
            quotes: contact.quotes,
            vibe: contact.vibe,
        });
    };

    const updateUser = (id, userData) => {
        fetch(`/api/mai_add/${id}`, {
            method: "PUT",
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update user');
                }
                return response.json();
            })
            .then(() => {
                console.log("User updated successfully");
                setEditingUserId(null); // Reset after update
                // Optionally refresh the contacts list here
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    const handleUpdate = () => {
        updateUser(editingUserId, updatedUserData); // Call the updateUser function with the id and data
    };

    return (
        <div className="view-contact-container">
            <button onClick={toggleFullList} className="toggle-button">
                {showFullList ? "Hide Full Contact List" : "Show Full Contact List"}
            </button>
            {showFullList && (
                <div>
                    <h2>All Contacts</h2>
                    {contacts.map(individualContact => (
                        <div key={individualContact.contactid} className="contact-box">
                            <p className="contact-detail"><strong>Contact Name:</strong> {individualContact.name}</p>
                            <p className="contact-detail"><strong>Email: </strong>{individualContact.email}</p>
                            <p className="contact-detail"><strong>Phone: </strong> {individualContact.phone}</p>
                            <p className="contact-detail"><strong>Notes:</strong> {individualContact.notes}</p>
                            <p className="contact-detail"><strong>Quotes: </strong>{individualContact.quotes}</p>
                            <p className="contact-detail"><strong>Vibe:</strong> {individualContact.vibe}</p>
                            <button onClick={() => handleEditClick(individualContact)}>Edit</button>
                        </div>
                    ))}
                    {editingUserId && (
                        <div className="edit-form">
                            <h3>Edit User</h3>
                            <input
                                type="text"
                                value={updatedUserData.name}
                                onChange={(e) => setUpdatedUserData({ ...updatedUserData, name: e.target.value })}
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                value={updatedUserData.email}
                                onChange={(e) => setUpdatedUserData({ ...updatedUserData, email: e.target.value })}
                                placeholder="Email"
                            />
                            <input
                                type="tel"
                                value={updatedUserData.phone}
                                onChange={(e) => setUpdatedUserData({ ...updatedUserData, phone: e.target.value })}
                                placeholder="Phone"
                            />
                            <textarea
                                value={updatedUserData.notes}
                                onChange={(e) => setUpdatedUserData({ ...updatedUserData, notes: e.target.value })}
                                placeholder="Notes"
                            />
                            <textarea
                                value={updatedUserData.quotes}
                                onChange={(e) => setUpdatedUserData({ ...updatedUserData, quotes: e.target.value })}
                                placeholder="Quotes"
                            />
                            <input
                                type="text"
                                value={updatedUserData.vibe}
                                onChange={(e) => setUpdatedUserData({ ...updatedUserData, vibe: e.target.value })}
                                placeholder="Vibe"
                            />
                            <button onClick={handleUpdate}>Update User</button>
                            <button onClick={() => setEditingUserId(null)}>Cancel</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ViewContact;

