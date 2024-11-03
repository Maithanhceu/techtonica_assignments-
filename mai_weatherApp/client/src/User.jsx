import { useState } from "react";
import { useUser} from './UserContext';

function User() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const { userData, setUserData } = useUser();

    // Function to handle sign in
    const handleSignIn = async () => {
        if (!username) {
            setError('Please enter your name.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:1113/user?username=${username}`);
            if (!response.ok) {
                throw new Error('User not found or server error');
            }

            const data = await response.json();
            setUserData(data); // Save user data on successful sign-in
            setError('');
        } catch (err) {
            setError(err.message);
            console.error('Error signing in:', err);
        }
    };

    // Function to handle sign out
    const handleSignOut = () => {
        setUserData(null); // Clear user data on sign-out
        setUsername('');    // Optionally clear the username input
        setError('');
    };

    return (
        <div>
            <h1>User Authentication</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignOut}>Sign Out</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {userData ? (
                <div>
                    <h2>Welcome, {userData.username}!</h2>
                    <p>Your favorite city: {userData.favorite_city}</p>
                </div>
            ) : (
                <p>Please sign in to view your profile.</p>
            )}
        </div>
    );
}

export default User;

