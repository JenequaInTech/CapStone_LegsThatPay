import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // 'user' holds the authentication state

    const login = (userData) => {
        setUser(userData);  // Simulate a login by setting user data
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
