import { useState } from 'react';

function CreateUser() {
  const [userName, setUserName] = useState('');
  const [favoriteCity, setFavoriteCity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle user creation
  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:1113/newUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, favorite_city: favoriteCity }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const newUser = await response.json(); // Get the new user response
      setSuccess('User created successfully!');
      setError('');
      setUserName(''); // Clear the input fields
      setFavoriteCity('');
    } catch (err) {
      setError('Error creating user. Please try again.');
      console.error('Error:', err);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Favorite City"
        value={favoriteCity}
        onChange={(e) => setFavoriteCity(e.target.value)}
      />
      <button onClick={createUser}>Add User</button>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </>
  );
}

export default CreateUser;
