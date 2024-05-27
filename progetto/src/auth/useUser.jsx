import { useEffect, useState } from 'react';
import { useToken } from './useToken';


export const useUser = () => {
  // Use the useToken hook to retrieve the token
  const [token] = useToken();

  // Function to decode the payload from the token
  const getPayloadFromToken = token => {
    const encodedPayload = token.split('.')[1];
    return JSON.parse(atob(encodedPayload));
  };

  // Define state to hold the user object
  const [user, setUser] = useState(() => {
    // Initialize the user state based on the token
    if (!token) return null; // If no token exists, user is null
    return getPayloadFromToken(token); // Decode the token and set user state
  });

  // Effect to update user state when token changes
  useEffect(() => {
    if (!token) {
      // If no token exists, set user state to null
      setUser(null);
    } else {
      // If token exists, decode it and set user state
      setUser(getPayloadFromToken(token));
    }
  }, [token]); // Run this effect whenever token changes

  // Return the user object
  return user;
};