import React, { createContext, useState } from 'react';
import { Firebase_Auth } from '../../firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  const [userId, setUserId] = useState(null);

  const login = (userId) => {
    setUserId(userId);
  };

  const logout = () => {
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};