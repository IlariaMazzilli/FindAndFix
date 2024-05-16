import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import ProRegister from "../pages/ProRegister";
import Faqs from "../pages/Faqs";
import SignIn from '../pages/SignIn'
import ChiSiamo from "../pages/ChiSiamo";
import Servizi from "../Servizi";
import NotFound from '../pages/NotFound'
import TermsAndConditions from "../pages/TermsAndConditions";
import ChatBotComponent from "../ChatBotComponent";

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
        path: "/termsAndConditions",
        element: <TermsAndConditions/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
])