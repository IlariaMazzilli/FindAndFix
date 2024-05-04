import React, { createContext, useState } from 'react';
import './darkModeStyles.css'; // Importa gli stili per la modalitÃ scura
import PropTypes from 'prop-types';

export const DarkModeContext = createContext(); // Assicurati che il contesto sia creato correttamente

const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}> {/* Assicurati che il valore venga passato */}
            <div className={isDarkMode ? 'dark-mode' : ''}>
                {children}
            </div>
        </DarkModeContext.Provider>
    );
};
DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired, // Definisci PropTypes per i children
};
export default DarkModeProvider;