import { useReducer } from 'react';

const initialState = {
    contactid: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    quotes: ''
};

// Reducer function
function contactReducer(contacts, action) {
    switch (action.type) {
        case 'SET_CONTACTID':
            return { ...contacts, contactid: action.payload };
        case 'SET_NAME':
            return { ...contacts, name: action.payload };
        case 'SET_EMAIL':
            return { ...contacts, email: action.payload };
        case 'SET_PHONE':
            return { ...contacts, phone: action.payload };
        case 'SET_NOTES':
            return { ...contacts, notes: action.payload };
        case 'SET_QUOTES':
            return { ...contacts, quotes: action.payload };
        case 'SET_VIBE':
            return {...contacts, vibe: action.payload};
        case 'RESET':
            return initialState;
        default:
            return contacts;
    }
}

function CreateContact() {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const contactData = {
            contactid: parseInt(state.contactid, 10),
            name: state.name,
            email: state.email,
            phone: state.phone,
            notes: state.notes,
            quotes: state.quotes,
            vibe: state.vibe
        };

        try {
            const response = await fetch('api/maiAdd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                const newContact = await response.json();
                console.log('New Contact added:', newContact);
                dispatch({ type: 'RESET' });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <><h2>Create Contact</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={state.contactid}
                onChange={(e) => dispatch({ type: 'SET_CONTACTID', payload: e.target.value })}
                placeholder="Contact ID"
                className="input" />
            <input
                type="text"
                value={state.name}
                onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                placeholder="Name"
                className="input" />
            <input
                type="email"
                value={state.email}
                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                placeholder="Email"
                className="input" />
            <input
                type="tel"
                value={state.phone}
                onChange={(e) => dispatch({ type: 'SET_PHONE', payload: e.target.value })}
                placeholder="Phone"
                className="input" />
            <textarea
                value={state.notes}
                onChange={(e) => dispatch({ type: 'SET_NOTES', payload: e.target.value })}
                placeholder="Notes"
                className="input" />
            <textarea
                value={state.quotes}
                onChange={(e) => dispatch({ type: 'SET_QUOTES', payload: e.target.value })}
                placeholder="Quotes"
                className="input" />
            <input
                value={state.vibe}
                onChange={(e) => dispatch({ type: 'SET_VIBE', payload: e.target.value })}
                placeholder="vibe"
                className='input'
            />
            <button type="submit">Add Contact</button>
        </form></>
    );
}

export default CreateContact;
