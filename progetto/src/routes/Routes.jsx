import { createBrowserRouter, redirect, Navigate } from "react-router-dom";
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
import SideBarUserProfile from "../pages/SideBarUserProfile";
import UserPage from "../pages/UserPage";
import Impostazioni from "../pages/Impostazioni";
import Pagamenti from "../pages/Pagamenti";
import Preferiti from "../pages/Preferiti";
import Prowewe from "../pages/Prowewe";


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
    {
        path: "/Userwewe",
        element: (
          <>
            <SideBarUserProfile />
            
          </>
        ),
        children: [
          {
            path: "",
            element: <Navigate to="avatar" />, // Redirect to avatar when /Userwewe is accessed
          },
          {
            path: "avatar",
            element: <UserPage />,
          },
          {
            path: "impostazioni",
            element: <Impostazioni />,
          },
          {
            path: "pagamenti",
            element: <Pagamenti />,
          },
          {
            path: "preferiti",
            element: <Preferiti />,
          },
        ],
      },
])