import { useReducer, useState } from "react";
import './Sightings.css'

const initialState = {
    sightingDate: '',
    individualId: '',
    location: '',
    healthy: false,
    email: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SIGHTING_DATE':
            return { ...state, sightingDate: action.payload };
        case 'SET_INDIVIDUAL_ID':
            return { ...state, individualId: action.payload };
        case 'SET_LOCATION':
            return { ...state, location: action.payload };
        case 'SET_HEALTHY':
            return { ...state, healthy: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Sightings = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const sightingData = {
            sighting_date: state.sightingDate,
            individual_id: parseInt(state.individualId),
            sighting_location: state.location,
            healthy: state.healthy,
            email_address: state.email,
        };

        try {
            const response = await fetch('http://localhost:1113/sightingsAdd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sightingData),
            });

            if (response.ok) {
                console.log('New Sighting Added');
                dispatch({ type: 'RESET' });
            } else {
                const errorText = await response.text();
                console.error('Error adding sighting:', response.statusText, errorText);
                setError('Error adding sighting. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error adding sighting. Please try again.');
        }
    };

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="datetime-local"
                    value={state.sightingDate}
                    onChange={(e) => dispatch({ type: 'SET_SIGHTING_DATE', payload: e.target.value })}
                    required
                />
                <input
                    className="input"
                    type="number"
                    value={state.individualId}
                    onChange={(e) => dispatch({ type: 'SET_INDIVIDUAL_ID', payload: e.target.value })}
                    placeholder="Individual ID"
                    required
                />
                <input
                    className="input"
                    type="text"
                    value={state.location}
                    onChange={(e) => dispatch({ type: 'SET_LOCATION', payload: e.target.value })}
                    placeholder="Location"
                    required
                />
                <label>
                    Healthy:
                    <input
                        className="input"
                        type="checkbox"
                        checked={state.healthy}
                        onChange={(e) => dispatch({ type: 'SET_HEALTHY', payload: e.target.checked })}
                    />
                </label>
                <input
                    className="input"
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                    placeholder="Email Address"
                    required
                />
                <button className="button" type="submit">Add Sighting</button>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Sightings;