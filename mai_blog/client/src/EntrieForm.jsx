import { useState } from "react";


function EntrieForm() {
    const [data, setData] = useState({
        blog: '',
        date: '',
        location: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const createEntrie = (e) => {
        e.preventDefault(); 

        fetch("/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(responseData => {
            setData(responseData); 
        })
        .catch(error => console.error('Error:', error)); 
    };

    return (
        <div>
            <form onSubmit={createEntrie} className='Blog Entrie'>
                <h2>Entrie Form</h2>
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
                    id="date"
                    required
                    value={data.date}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    required
                    value={data.location}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EntrieForm;
