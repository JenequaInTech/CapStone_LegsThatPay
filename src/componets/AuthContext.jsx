import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // Initialize without a user

    const login = (username, password) => {
        // Simulate a login by setting user data
        setUser({ name: username });
    };

    const logout = () => {
        setUser(null);  // Clear user data to simulate logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
