/*
 * File: AuthProvider.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: Provides the AuthProvider component for global authentication state management using React Context API.
 */
import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ name: '', avatar: '' });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
} 