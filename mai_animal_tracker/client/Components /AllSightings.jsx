import { useState, useEffect } from "react";
import './AllSightings.css'

const AllSightings = () => {
    const [sightings, setSightings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetching the sightings data
        const fetchSightings = () => {
            fetch('http://localhost:1113/sightings')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setSightings(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        };

        fetchSightings();
    }, []);

    const handleDelete = (sightingId) => {
        fetch(`http://localhost:1113/sightings/${sightingId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    // Filter out the deleted sighting from the state
                    setSightings(sightings.filter(sighting => sighting.sighting_id !== sightingId));
                    console.log('Sighting deleted successfully');
                } else {
                    return response.text().then(errorText => {
                        throw new Error(`Error deleting sighting: ${errorText}`);
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    if (loading) {
        return <div>Loading sightings...</div>;
    }

    if (error) {
        return <div>Error fetching sightings: {error}</div>;
    }

    return (
        <div>
            <h1>All Sightings</h1>
            {sightings.length > 0 ? (
                <div>
                    {sightings.map((sighting) => (
                        <div key={sighting.sighting_id} className="sighting">
                            <p><strong>Sighting Date:</strong> {new Date(sighting.sighting_date).toLocaleString()}</p>
                            <p><strong>Individual ID:</strong> {sighting.individual_id}</p>
                            <p><strong>Nickname:</strong> {sighting.nickname}</p>
                            <p><strong>Location:</strong> {sighting.sighting_location}</p>
                            <p><strong>Healthy:</strong> {sighting.healthy ? 'Yes' : 'No'}</p>
                            <p><strong>Email:</strong> {sighting.email_address}</p>
                            <button className="button" onClick={() => handleDelete(sighting.sighting_id)}>Delete</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No sightings found.</p>
            )}
        </div>
    );
};

export default AllSightings;
