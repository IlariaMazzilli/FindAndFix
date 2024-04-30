import React, { useState } from 'react';
import './Select.css'; // Importa il file CSS che hai fornito

const Select = () => {
  const [selectedOption, setSelectedOption] = useState('Seleziona il tuo pro');
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    setIsActive(false);
  };

  return (
    <div className={`select-menu ${isActive ? 'active' : ''}`}>
      <div className="select-btn" onClick={() => setIsActive(!isActive)}>
        <span className="sBtn-text">{selectedOption}</span>
        <i className="bx bx-chevron-down"></i>
      </div>

      <ul className="options">
        <li className="option" onClick={() => handleOptionClick('Instagram')}>
          <i className="bx bxl-instagram-alt" style={{ color: '#E1306C' }}></i>
          <span className="option-text">Idraulico</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Linkedin')}>
          <i className="bx bxl-linkedin-square" style={{ color: '#0E76A8' }}></i>
          <span className="option-text">Imbianchino</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Facebook')}>
          <i className="bx bxl-facebook-circle" style={{ color: '#4267B2' }}></i>
          <span className="option-text">Elettricista</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Twitter')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Giardiniere</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Twitter')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Traslocatore</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Twitter')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Pavimentista</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Twitter')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Serramentista</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Twitter')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Interior designer</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Twitter')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Falegname</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Twitter')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Tuttofare</span>
        </li>
      </ul>
    </div>
  );
};

export default Select;