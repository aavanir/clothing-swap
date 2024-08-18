import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); //replace with actual auth logic 

    // Example function to log in (replace with actual login logic)
    const login = () => setIsAuthenticated(true);

    // Example function to log out (replace with actual logout logic)
    const logout = () => setIsAuthenticated(false);

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
