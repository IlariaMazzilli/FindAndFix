// Importa le dipendenze necessarie da React
import React, { createContext, useContext, useState, useEffect } from 'react';

// Crea il context con un valore iniziale di `null`
const AuthContext = createContext(null);

// Componente Provider che gestirà lo stato globale dell'autenticazione
export const AuthProvider = ({ children }) => {
    // Stato per gestire il token di autenticazione
    const [token, setTokenInternal] = useState(() => localStorage.getItem('token'));
    // Stato per gestire i dati dell'utente
    const [user, setUser] = useState(null);

    // Funzione per aggiornare il token sia nello stato interno che nel localStorage
    const setToken = newToken => {
        if (newToken) {
            localStorage.setItem('token', newToken);  // Salva il token nel localStorage
        } else {
            localStorage.removeItem('token');  // Rimuove il token dal localStorage se non valido o in logout
        }
        setTokenInternal(newToken);  // Aggiorna lo stato del token
    };

    // Effetto per decodificare il token e ottenere i dati dell'utente ogni volta che il token cambia
    useEffect(() => {
        if (token) {
            try {
                const encodedPayload = token.split('.')[1];  // Ottiene il payload del token
                const decodedPayload = atob(encodedPayload);  // Decodifica il payload da Base64
                const userPayload = JSON.parse(decodedPayload);  // Parse del JSON del payload decodificato
                setUser({ ...userPayload, isAuthenticated: true });  // Aggiorna lo stato dell'utente con i dati decodificati
            } catch (e) {
                console.error("Invalid token:", e);  // Gestione errori se il token è corrotto
                setUser({ isAuthenticated: false });  // Imposta l'utente come non autenticato in caso di errore
            }
        } else {
            setUser({ isAuthenticated: false });  // Imposta l'utente come non autenticato se non esiste un token
        }
    }, [token]);

    // Funzione per effettuare il logout dell'utente
    const logout = () => {
        setToken(null);  // Rimuove il token
        setUser(null);  // Rimuove i dati dell'utente
    };

    // Il componente Provider passa il contesto ai componenti figli
    return (
        <AuthContext.Provider value={{ user, token, setToken, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto di autenticazione facilmente da altri componenti
export const useAuth = () => useContext(AuthContext);
