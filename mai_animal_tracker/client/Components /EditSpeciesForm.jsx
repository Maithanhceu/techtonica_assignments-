import { useReducer, useEffect } from 'react';
import './EditSpeciesForm'

// Define the initial state
const initialState = {
  common_name: '',
  scientific_name: '',
  estimated_number: 0,
  conservation_status: '',
};

// Define the reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'SET_INITIAL_VALUES':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

function EditSpeciesForm({ item, onUpdate, onDelete }) {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  // Set initial values when the component mounts or when item changes
  useEffect(() => {
    if (item) {
      dispatch({ type: 'SET_INITIAL_VALUES', payload: item });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
  };

  const handleUpdate = () => {
    fetch(`http://localhost:1113/species/${item.species_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update species');
        }
        return response.json();
      })
      .then((updatedItem) => {
        onUpdate(updatedItem);
      })
      .catch((error) => {
        console.error('Error updating species:', error);
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:1113/species/${item.species_id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete species');
        }
        onDelete(item.species_id); 
        console.log('Species deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting species:', error);
      });
  };

  return (
    <div className="title">
      <form >
        <h2>Edit Species</h2>
        <div className='label'>
          <label>Common Name:</label>
          <input
            className='input'
            type="text"
            name="common_name"
            value={formData.common_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label'>
          <label>Scientific Name:</label>
          <input
            className='input'
            type="text"
            name="scientific_name"
            value={formData.scientific_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label'>
          <label>Estimated Number:</label>
          <input
            className='input'
            type="number"
            name="estimated_number"
            value={formData.estimated_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label'>
          <label>Conservation Status:</label>
          <input
            className='input'
            type="text"
            name="conservation_status"
            value={formData.conservation_status}
            onChange={handleChange}
            required
          />
        </div>
        <div className='container'>
        <button className='button' type="button" onClick={handleUpdate}>
          Update Species
        </button>
        <button className='button' type="button" onClick={handleDelete}>
          Delete Species
        </button>
        </div>
       
      </form>
    </div>
  );
}

export default EditSpeciesForm;



