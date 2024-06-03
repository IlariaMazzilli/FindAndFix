import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import axiosInstance from '../components/AxiosInstance';
import Toolbar from '../components/Toolbar'

function ProfiloProEUtente({ children }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token); // Verifica che il token sia presente
        const res = await axiosInstance.get('/profile/professionista');
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
      <Toolbar/>
      <Navbar />
      <br /><br /><br /><br />
      <div className='flex h-fit w-full'>
        
      </div>
      <div className='flex-1 p-4 flex'>
        <Sidebar />
        {error && <p className='text-red-500'>{error}</p>}
        {userData ? (
          <Outlet context={{ userData }} /> // Passa i dati utente tramite il context
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <br /><br /><br /><br />
      <Footer />
    </div>
  )
}

export default ProfiloProEUtente