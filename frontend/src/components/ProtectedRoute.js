import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = checkAuthentication();

  if (!isAuthenticated) {
    // Redirect to login page, but save the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Helper function to check authentication
const checkAuthentication = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  // Optional: Check if token is expired
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return false;
    }
  } catch (error) {
    console.error('Error parsing token:', error);
    localStorage.removeItem('token');
    return false;
  }

  return true;
};

export default ProtectedRoute;