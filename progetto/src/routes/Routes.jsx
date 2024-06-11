import { createBrowserRouter, redirect, Navigate, useNavigate } from "react-router-dom";
import { Fade } from 'react-awesome-reveal'
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
import CreateReview from "../pages/CreateReview";
import ViewClientProfilePro from "../pages/ViewClientProfilePro";
import ContactForm from "../pages/ContactForm";
import ConfirmationPage from "../pages/ConfirmationPage";
import PrivateRoute from "../auth/PrivateRoute";
import ReviewsPage from "../pages/ReviewsPage";
import ProfileClient from "../components/ProfileClient";
import Toolbar from "../components/Toolbar";



export const Rotte = createBrowserRouter([
    {
        path: "/",
        element: (
            <Fade>
                <>
                    <Home />
                    <ChatBotComponent />
                </>
            </Fade>
        )
    },
    {
        path: "/registrati",
        element: (
            <Fade><div><Register /></div></Fade>
        ),
    },
    {
        path: "/proRegistrati",
        element: (
            <Fade>
                <div>
                    <Toolbar/>
                    <Stepper />
                </div>
            </Fade>

        ),
    },
    {
        path: "/faqs",
        element: (<div>
            <Fade>
                <Faqs />
                <ChatBotComponent />
            </Fade>
        </div>

        ),
    },
    {
        path: "/signIn",
        element: (
            <Fade>
                <div>
                    <SignIn />
                </div>
            </Fade>

        )
    },
    {
        path: "/chiSiamo",
        element: (
            <div>
                <Fade>
                    <ChiSiamo />
                    <ChatBotComponent />
                </Fade>
            </div>
        ),
    },
    {
        path: "/reviews",
        element: (
            <div>
                <Fade>
                    <Toolbar/>
                    <Navbar />
                    <br /><br /><br />
                    <ReviewsPage />
                    <br /><br />
                    <ChatBotComponent />
                    <Footer />
                </Fade>
            </div>
        ),
    },
    {
        path: "/servizi",
        element: (
            <PrivateRoute element={() => (
                <div>
                    <Fade>
                        <Servizi />
                        <ChatBotComponent />
                    </Fade>
                </div>
            )} />
        )
    },
    {
        path: "/clientViewPro/:name/:description",
        element: (
            <PrivateRoute element={() => (
                <div>
                    <Fade>
                        <Toolbar />
                        <Navbar />
                        <br /><br /><br /><br />
                        <ViewClientProfilePro />
                        <ChatBotComponent />
                        <Footer />
                    </Fade>
                </div>
            )} />
        ),
    },
    {
        path: "/contactForm",
        element: (
            <PrivateRoute element={() => (
                <div>
                    <Fade>
                        <Toolbar />
                        <Navbar />
                        <br /><br /><br />
                        <ContactForm />
                        <Footer />
                    </Fade>
                </div>
            )} />

        )

    },
    {
        path: "/formReceived",
        element: (
            <div>
                <Fade>
                    <Navbar />
                    <br /><br /><br /><br />
                    <ConfirmationPage />
                    <Footer />
                </Fade>
            </div>
        ),
    },
    {
        path: '/profile/:id',
        element: (
            <PrivateRoute element={() => (
                <div>
                    <Fade>
                        <ProfiloPro />
                        <ChatBotComponent />
                    </Fade>
                </div>
            )} />
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
                        element: <ChatAlice />
                    },
                    {
                        path: 'Martin',
                        element: <ChatMartin />
                    },
                    {
                        path: 'Charlie',
                        element: <ChatCharlie />
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
        path: '/clientProfile/:id',
        element: (
            <PrivateRoute element={() => (
                <div>
                    <Fade>
                        <ProfiloCliente />
                        <ChatBotComponent />
                    </Fade>
                </div>
            )} />

        ),
        children: [
            {
                index: true,
                element: <ProfileClient />
            },
            {
                path: 'notifiche',
                element: <Notifiche />
            },
            {
                path: 'clientSettings',
                element: <Impostazioni />
            },
        ]
    },
    {
        path: '/recuperaPassword',
        element: (
            <div>
                <Fade>
                    <Navbar />
                    <br />
                    <ForgotPassword />
                    <Footer />
                </Fade>
            </div>
        )
    },
    {
        path: '/changeMail',
        element: (
            <PrivateRoute element={() => (
                <div>
                    <Fade>
                        <Navbar />
                        <br />
                        <ChangeEmail />
                        <Footer />
                    </Fade>
                </div>
            )} />

        )
    },
    {
        path: '/createReview',
        element: (
            <PrivateRoute element={() => (
                <div>
                    <Fade>
                        <Toolbar/>
                        <Navbar />
                        <br />
                        <CreateReview />
                        <Footer />
                    </Fade>
                </div>
            )} />

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