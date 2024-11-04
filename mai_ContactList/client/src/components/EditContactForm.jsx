import { useReducer, useEffect } from 'react';
import '../components/CSS/EditContactForm.css';

// Define the initial state
const initialState = {
  contactid: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
  quotes: '',
  vibe: '',
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

function EditContactForm({ item, onUpdate, onDelete }) {
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
    fetch(`/api/mai_add/${item.contactid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update contact');
        }
        return response.json();
      })
      .then((updatedItem) => {
        onUpdate(updatedItem);
      })
      .catch((error) => {
        console.error('Error updating contact:', error);
      });
  };

  const handleDelete = () => {
    fetch(`/api/mai_delete/${item.contactid}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete contact');
        }
        onDelete(item.contactid);
        console.log('Contact deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <div className="edit-form">
      <form>
        <h2>Edit Contact</h2>
        <div className='label'>
          <label htmlFor="name">Name:</label>
          <input
            className='input'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label'>
          <label htmlFor="email">Email:</label>
          <input
            className='input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='label'>
          <label htmlFor="phone">Phone:</label>
          <input
            className='input'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className='container'>
          <button className= "button" type="submit" onClick={handleUpdate}>
            Update Contact
          </button>
          <button className="button" type="submit" onClick={handleDelete}>
            Delete Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditContactForm;
