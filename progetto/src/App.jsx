import React from 'react';
import Home from './pages/Home'
import DarkModeProvider from './DarkMode'; // Importa il provider correttamente
import UserPage from './pages/UserPage';
import SideBarUserProfile from './pages/SideBarUserProfile';




function App() {
  return (
    <div>
      <SideBarUserProfile />
    </div>
  )
}

export default App