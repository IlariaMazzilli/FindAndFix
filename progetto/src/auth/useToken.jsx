import { useState } from 'react'
 /* hook gestice il token di autenticazione*/ 

export const useToken = () => {
    // Use the useState hook to manage the token state
  const [token, setTokenInternal] = useState(() => {
     // Retrieve the token from localStorage when initializing the state
    return localStorage.getItem('token');
  });
  // Define a function to update the token state
  const setToken = newToken => {
    // Update the token in localStorage
    localStorage.setItem('token', newToken);
   // Update the token state using the setTokenInternal function
    setTokenInternal(newToken);
  }
  // Return an array containing the current token value and the setToken function
  return [token, setToken];
}
