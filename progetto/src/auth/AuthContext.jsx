// src/auth/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
