import { useState } from 'react';

function CreateUser() {
  const [userName, setUserName] = useState('');
  const [favoriteCity, setFavoriteCity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle user creation
  const createUser = async () => {
    

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, favoritecity: favoriteCity }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

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
      <button onSubmit={createUser}>Add User</button>

      {error && alert(error)}
      {success && alert(success)}
    </>
  );
}

export default CreateUser;
