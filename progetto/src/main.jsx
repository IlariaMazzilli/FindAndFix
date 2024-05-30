import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Rotte } from './routes/Routes';
import { RouterProvider} from "react-router-dom";
import { AuthContext } from './auth/AuthContext';
import { AuthProvider } from './auth/AuthContext';


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <RouterProvider router={Rotte}/>
    </AuthProvider>
   
)
