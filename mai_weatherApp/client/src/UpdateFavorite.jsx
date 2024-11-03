import { useState } from 'react';
import { useUser } from './UserContext';

function UpdateFavorite() {
    const { userData, setUserData } = useUser();
    const userId = userData?.id;
    const [newFavoriteCity, setNewFavoriteCity] = useState(''); // State for input value

    async function updateFavoriteCity() {
        try {
            const response = await fetch(`http://localhost:1113/api/users/${userId}/favoritecity`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ favorite_city: newFavoriteCity }),
            });
            const data = await response.json();

            if (response.ok) {
                console.log('Favorite city updated:', data);
                alert('Favorite city updated successfully');
                setUserData((prevData) => ({
                    ...prevData,
                    favorite_city: newFavoriteCity,
                }));
            } else {
                console.log('Error:', data.message);
                alert('Error updating favorite city');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={newFavoriteCity}
                onChange={(e) => setNewFavoriteCity(e.target.value)}
                placeholder="Enter your favorite city"
            />
            <button onClick={updateFavoriteCity}>Update Favorite City</button>
        </div>
    );
}

export default UpdateFavorite;

