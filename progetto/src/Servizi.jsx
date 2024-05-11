import React, { useState } from 'react';
import './myStyles.css'; // Importa il file CSS

// import chatIcon from './images/logo.svg'; // Icona della chat
import ProfileList from './components/ProfileList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const MyComponent = () => {
  return (
    <div>
      <Navbar />
      <ProfileList />
      <Footer />
    </div>



  );

};
export default MyComponent;