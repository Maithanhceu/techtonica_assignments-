import { useState } from "react";

function ViewContact({contacts}) {
    const [showFullList, setShowFullList] = useState(false); 

    const toggleFullList = () => {
        setShowFullList(prev => !prev);
    };

    return (
        <div>
            <button onClick={toggleFullList}>
                {showFullList ? "Hide Full Contact List" : "Show Full Contact List"}
            </button>
            {showFullList && (
                <div>
                    <h2>All Contacts</h2>
                    {contacts.map(individualContact => (
                        <form key={individualContact.contactid}>
                            <p>Contact Id: {individualContact.contactid}</p>
                            <p>Contact Name: {individualContact.name}</p>
                            <p>Email: {individualContact.email}</p>
                            <p>Phone: {individualContact.phone}</p>
                            <p>Notes: {individualContact.notes}</p>
                            <p>Quotes: {individualContact.quotes}</p>
                            <p>Vibe: {individualContact.vibe}</p>
                        </form>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ViewContact;
