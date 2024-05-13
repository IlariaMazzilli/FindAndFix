import React, { useState } from "react";
import "./myStyles.css"; // Importa il file CSS

// import chatIcon from './images/logo.svg'; // Icona della chat
import ProfileList from "./components/ProfileList";

const MyComponent = () => {
  return (
    <div>
      <div>
        <ProfileList />
      </div>
    </div>
  );
};
export default MyComponent;
