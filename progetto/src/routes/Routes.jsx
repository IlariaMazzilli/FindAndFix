import { createBrowserRouter, redirect, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Faqs from "../pages/Faqs";
import SignIn from '../pages/SignIn'
import ChiSiamo from "../pages/ChiSiamo";
import Servizi from "../Servizi";
import NotFound from '../pages/NotFound'
import TermsAndConditions from "../pages/TermsAndConditions";
import ChatBotComponent from "../ChatBotComponent";
import Stepper from "../pages/Stepper";
import SideBarUserProfile from "../pages/SideBarUserProfile";
import Notifiche from "../pages/Notifiche";
import Impostazioni from "../pages/Impostazioni";
import Pagamenti from "../pages/Pagamenti";
import Preferiti from "../pages/Preferiti";
import Profilewewe from "../pages/Profilewewe";

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
        path: "/termsAndConditions",
        element: <TermsAndConditions />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/Userwewe",
        element: (
          <>
            <SideBarUserProfile />
          
                <ChatBotComponent />
              </>
        ),
        children: [
          {
            path: "",
            element: <Navigate to="avatar" />, // Redirect to avatar when /Userwewe is accessed
          },
          {
            path: "avatar",
            element: <Profilewewe />,
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
          {
            path: "notifiche",
            element: <Notifiche />,
          },
        ],
      },
])