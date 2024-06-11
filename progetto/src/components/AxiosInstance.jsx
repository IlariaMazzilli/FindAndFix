import axios from 'axios';

// Crea un'istanza Axios con le configurazioni di base
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia questo con l'URL del tuo backend
});

// Aggiungi un'intercettazione per includere automaticamente il token di autenticazione
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Ottieni il token direttamente da localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Qui "Bearer" è una parola chiave standard, non una libreria
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;