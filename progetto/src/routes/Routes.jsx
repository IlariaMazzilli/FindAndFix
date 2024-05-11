import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import ProRegister from "../pages/ProRegister";
import Faqs from "../pages/Faqs";
import SignIn from '../pages/SignIn'
import ChiSiamo from "../pages/ChiSiamo";
import Servizi from "../Servizi";
import NotFound from '../pages/NotFound'

export const Rotte = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/registrati",
        element: <Register />,
    },
    {
        path: "/proRegistrati",
        element: <ProRegister />,
    },
    {
        path: "/faqs",
        element: <Faqs/>,
    },
    {
        path: "/signIn",
        element: <SignIn/>,
    },
    {
        path: "/chiSiamo",
        element: <ChiSiamo/>,
    },
    {
        path: "/servizi",
        element: <Servizi/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
])