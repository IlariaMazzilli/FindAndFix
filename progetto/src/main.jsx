import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Rotte } from './routes/Routes';
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './auth/AuthContext';
import { Fade } from 'react-awesome-reveal'


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <Fade triggerOnce={false}  duration={3500}> 
            <RouterProvider router={Rotte} />
        </Fade>
    </AuthProvider>

)
