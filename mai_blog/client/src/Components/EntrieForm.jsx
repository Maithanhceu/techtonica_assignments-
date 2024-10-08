import { useState } from "react";
import '../CSS/EntrieForm.css'

function EntrieForm() {
    // State to manage form data
    const [data, setData] = useState({
        blog: '',
        entries: '', 
        location: ''
    });
    const [error, setError] = useState(null); 
    const [successMessage, setSuccessMessage] = useState(null); 

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle form submission
    const createEntry = (e) => {
        e.preventDefault(); 

        fetch("/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data) 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            setData({ blog: '', entries: '', location: '' }); 
            setError(null); 
            setSuccessMessage('Entry created successfully!');
            setTimeout(() => setSuccessMessage(null), 3000); 
        })
        .catch(error => {
            console.error('Error:', error);
            setError('Failed to create entry. Please try again.'); 
            setTimeout(() => setError(null), 3000); 
        }); 
    };

    return (
        <div>
            <form onSubmit={createEntry} className='EntryForm'>
                <h2>Create New Entry</h2>
                
                <input
                    type="text"
                    id="blog" 
                    placeholder="Blog Post"
                    required
                    value={data.blog}
                    onChange={handleChange}
                />
                
                <input
                    type="date"
                    id="entries" 
                    placeholder="entries"
                    required
                    value={data.entries}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    id="location" 
                    placeholder="Location"
                    value={data.location}
                    onChange={handleChange}
                />
                
                <button className='form-button' type="submit">Submit</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} 
            {error && <p style={{ color: 'red' }}>{error}</p>} 
        </div>
    );
}

export default EntrieForm;
