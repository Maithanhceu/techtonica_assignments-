import { createContext, useContext, useState } from 'react';

// Create a User Context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to use the User Context
export const useUser = () => {
    return useContext(UserContext);
};