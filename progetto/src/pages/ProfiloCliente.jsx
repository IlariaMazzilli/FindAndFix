import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SidebarCliente from '../components/SidebarCliente';
import { Outlet } from 'react-router-dom';
import axiosInstance from '../components/AxiosInstance';

const ProfiloCliente = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Verifica che il token sia presente
        const res = await axiosInstance.get('/profile/cliente');
        setUserData(res.data);
        console.log('Response:', res.data); // Verifica la risposta del server
      } catch (error) {
        setError('Errore durante il fetch');
        console.error('Fetch Error:', error); // Log degli errori
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <br /><br /><br />
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