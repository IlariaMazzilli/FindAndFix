import React, { createContext, useState } from 'react';
import './darkModeStyles.css'; // Importa gli stili per la modalità scura

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

export default DarkModeProvider;