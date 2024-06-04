import React, { createContext, useState, useEffect } from 'react';

export const UserDataContext = createContext(null);

function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosInstance.get('/profile/cliente');
        setUserData(res.data);
      } catch (error) {
        console.log('Errore durante il fetch');
        setError(error.message); // Handle the error appropriately
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, error }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataProvider;