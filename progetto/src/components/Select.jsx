import React, { useState } from 'react';
import './Select.css'; 

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

      <ul className="options z-50">
        <li className="option" onClick={() => handleOptionClick('Idraulico')}>
          <i className="bx bxl-instagram-alt" style={{ color: '#E1306C' }}></i>
          <span className="option-text">Idraulico</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Imbianchino')}>
          <i className="bx bxl-linkedin-square" style={{ color: '#0E76A8' }}></i>
          <span className="option-text">Imbianchino</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Elettricista')}>
          <i className="bx bxl-facebook-circle" style={{ color: '#4267B2' }}></i>
          <span className="option-text">Elettricista</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Giardiniere')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Giardiniere</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Traslocatore')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Traslocatore</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Pavimentista')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Pavimentista</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Serramentista')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Serramentista</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Interior designer')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Interior designer</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Falegname')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Falegname</span>
        </li>
        <li className="option" onClick={() => handleOptionClick('Tuttofare')}>
          <i className="bx bxl-twitter" style={{ color: '#1DA1F2' }}></i>
          <span className="option-text">Tuttofare</span>
        </li>
      </ul>
    </div>
  );
};

export default Select;