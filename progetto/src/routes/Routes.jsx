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
import ProfiloPro from '../pages/ProfiloPro'
import ProfiloCliente from '../pages/ProfiloCliente'
import Messaggi from "../components/Messaggi";
import ProfilePro from "../components/ProfilePro";
import Impostazioni from "../components/Impostazioni";
import Notifiche from "../components/Notifiche";
import ListaClienti from "../components/ListaClienti";
import ForgotPassword from "../pages/ForgotPassword";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatAlice from "../components/ChatAlice";
import ChatMartin from "../components/ChatMartin";
import ChatCharlie from "../components/ChatCharlie";
import ChangeEmail from '../pages/ChangeEmail'
import { AuthContext } from "../auth/AuthContext";
import CreateReview from "../pages/CreateReview";


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
                <Servizi />
                <ChatBotComponent />
            </div>
        ),
    },
    {
        path: '/profile/:name',
        element: (
            <div>
            <ProfiloPro />
            <ChatBotComponent/>
            </div>
        ),
        children: [
            {
                index: true,
                element: <ProfilePro />
            },
            {
                path: 'messaggi',
                element: <Messaggi />,
                children: [
                    {
                        index: true,
                        element: <ChatAlice/>
                    },
                    {
                        path:'Martin',
                        element: <ChatMartin/>
                    },
                    {
                        path:'Charlie',
                        element: <ChatCharlie/>
                    },
                ]
            },
            {
                path: 'settings',
                element: <Impostazioni />
            },
            {
                path: 'notifiche',
                element: <Notifiche />
            },
            {
                path: 'clienti',
                element: <ListaClienti />
            }
        ]
    },
    {
        path: '/clientProfile/:name',
        element: (
            <div>
            <ProfiloCliente />
            <ChatBotComponent/>
            </div>
        ),
        children: [
            {
                index: true,
                element: <ProfilePro />
            },
            {
                path: 'messaggi',
                element: <Messaggi />,
                children: [
                    {
                        index: true,
                        element: <ChatAlice/>
                    },
                    {
                        path:'Martin',
                        element: <ChatMartin/>
                    },
                    {
                        path:'Charlie',
                        element: <ChatCharlie/>
                    },
                ]
            },
            {
                path: 'settings',
                element: <Impostazioni />
            },
            {
                path: 'notifiche',
                element: <Notifiche />
            },
        ]
    },
    {
        path: '/recuperaPassword',
        element: (
            <div>
                <Navbar />
                <br />
                <ForgotPassword />
                <Footer />
            </div>
        )
    },
    {
        path: '/changeMail',
        element: (
            <div>
                <Navbar />
                <br />
                <ChangeEmail />
                <Footer />
            </div>
        )
    },
    {
        path: '/createReview',
        element: (
            <div>
                <Navbar />
                <br />
                <CreateReview />
                <Footer />
            </div>
        )
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