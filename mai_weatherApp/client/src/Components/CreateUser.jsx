import { useState } from 'react';

function CreateUser() {
  const [userName, setUserName] = useState('');
  const [favoriteCity, setFavoriteCity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle user creation
  const createUser = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Ensure that input fields are not empty
    if (!userName || !favoriteCity) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('/newUser', {
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
    <div>
      <form onSubmit={createUser}>
        <input
          type="text"
          required
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Favorite City"
          value={favoriteCity}
          onChange={(e) => setFavoriteCity(e.target.value)}
        />
        <button type="submit">Add User</button>
        {error && <div style={{ color: 'white' }}>{error}</div>}
        {success && <div style={{ color: 'white' }}>{success}</div>}
      </form>
    </div>
  );
}

export default CreateUser;
