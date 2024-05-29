import { createBrowserRouter, redirect, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Faqs from "../pages/Faqs";
import SignIn from '../pages/SignIn'
import ChiSiamo from "../pages/ChiSiamo";
import Servizi from "../pages/Servizi";
import NotFound from '../pages/NotFound'
import TermsAndConditions from "../pages/TermsAndConditions";
import ChatBotComponent from "../ChatBotComponent";
import Stepper from "../pages/Stepper";
import ProfiloProEUtente from '../pages/ProfiloProEUtente'
import Messaggi from "../components/Messaggi";
import Profile from "../components/Profile";
import Impostazioni from "../components/Impostazioni";
import Notifiche from "../components/Notifiche";
import ListaClienti from "../components/ListaClienti";


export const Rotte = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Home />
                <ChatBotComponent />
            </>
        )
    },
    {
        path: "/registrati",
        element: <Register />,
    },
    {
        path: "/proRegistrati",
        element: <Stepper />,
    },
    {
        path: "/faqs",
        element: (<div>
            <Faqs />
            <ChatBotComponent />
        </div>

        ),
    },
    {
        path: "/signIn",
        element: <SignIn />,
    },
    {
        path: "/chiSiamo",
        element: (
            <div>
                <ChiSiamo />
                <ChatBotComponent />
            </div>
        ),
    },
    {
        path: "/servizi",
        element: (
            <div>
                <Servizi/>
                <ChatBotComponent />
            </div>
        ),
    },
    {
      path:'/profile/:name',
      element: (
        <ProfiloProEUtente/>
      ),
      children: [
        {
          index: true,
          element: <Profile/>
        },
        {
          path: 'messaggi',
          element: <Messaggi/>
        },
        {
          path:'settings',
          element: <Impostazioni/>
        },
        {
          path:'notifiche',
          element: <Notifiche/>
        },
        {
          path:'clienti',
          element: <ListaClienti/>
        }
      ]
    },
    {
        path: "/termsAndConditions",
        element: <TermsAndConditions />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
    
])