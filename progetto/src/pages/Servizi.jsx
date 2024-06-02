import React, { useState } from 'react';
import '../myStyles.css'; // Importa il file CSS

// import chatIcon from './images/logo.svg'; // Icona della chat
import ProfileList from '../components/ProfileList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Toolbar from '../components/Toolbar';


const Servizi = () => {
  return (
    <div>
      <Toolbar/>
      <Navbar />
      <br /><br /><br /><br />
      <ProfileList />
      <Footer />
    </div>



  );

};
export default Servizi;