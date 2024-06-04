import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SidebarCliente from '../components/SidebarCliente';
import { Outlet, useNavigate } from 'react-router-dom';
import axiosInstance from '../components/AxiosInstance';
import Toolbar from '../components/Toolbar';

const ProfiloCliente = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Verifica che il token sia presente
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        if (!token) {
          setError('Token non presente');
          return;
        }

        const res = await axiosInstance.get('/profile/cliente', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Response data:', res.data);
        setUserData(res.data);
      } catch (error) {
        setError('Errore durante il fetch');
        console.error('Fetch Error:', error); // Log degli errori
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <Toolbar/>
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className='flex h-fit w-full'>
        <SidebarCliente />
        <div className='flex-1 p-4'>
          {error && <p className='text-red-500'>{error}</p>}
          {userData ? (
            <Outlet context={{ userData }} /> // Passa i dati utente tramite il context
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ProfiloCliente;
