/*
 * File: ProtectedRoute.jsx
 * Author: Xinrui Hou
 * Date: 2025-08-06
 * Description: Created ProtectedRoute to restrict access to authenticated users only.
 */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
} 