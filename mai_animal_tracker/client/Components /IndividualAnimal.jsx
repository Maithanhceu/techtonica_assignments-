import { useReducer } from "react";
import './IndividualAnimal.css'

const initialState = {
    species_id: '', 
    nickname: '', 
    scientist: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SPECIES_ID':
            return { ...state, species_id: action.payload };
        case 'SET_NICKNAME':
            return { ...state, nickname: action.payload };
        case 'SET_SCIENTIST':
            return { ...state, scientist: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const IndividualAnimal = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const animalData = {
            species_id: parseInt(state.species_id),
            nickname: state.nickname,
            scientist: state.scientist,
        };

        try {
            const response = await fetch('http://localhost:1113/individualAdd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(animalData),
            });

            if (response.ok) {
                const newAnimal = await response.json();
                console.log('New individual animal added:', newAnimal);
                dispatch({ type: 'RESET' }); // Reset the form
            } else {
                console.error('Error adding individual animal:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type="number"
                value={state.species_id}
                onChange={(e) => dispatch({ type: 'SET_SPECIES_ID', payload: e.target.value })}
                placeholder="Species ID"
                required
            />
            <input
                className="input"
                type="text"
                value={state.nickname}
                onChange={(e) => dispatch({ type: 'SET_NICKNAME', payload: e.target.value })}
                placeholder="Nickname"
                required
            />
            <input
                className="input"
                type="text"
                value={state.scientist}
                onChange={(e) => dispatch({ type: 'SET_SCIENTIST', payload: e.target.value })}
                placeholder="Scientist"
                required
            />
            <button className='button' type="submit">Add Individual Animal</button>
        </form>
    );
};

export default IndividualAnimal;
