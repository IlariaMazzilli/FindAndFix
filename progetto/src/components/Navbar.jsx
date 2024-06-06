import logoNoBg from '../images/logoNoBg.svg'
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {useAuth} from '../auth/AuthContext';

import logoScritta from '../images/logoScrittaNav.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Dati utente e funzioni dal contesto


  // Funzione per gestire il logout
  const handleLogout = () => {
    logout(); // Chiama la funzione di logout di useAuth
    navigate('/'); // Reindirizza alla homepage
  };


 
// Funzione per il toggle del menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const redirectToProfile = () => {
    // Controllo del tipo di utente e reindirizzamento al profilo appropriato
    if (user && user.isAuthenticated) {
      console.log('Redirecting to profile with user data:', user);
        if (user.user_type === "professionista") {
          console.log(`Navigating to /profile/professionista/${user.id}`);
            navigate(`/profile/${user.id}`);  // Assumi che l'ID sia parte del payload
        } else if (user.user_type === "cliente") {
          console.log(`Navigating to /profile/cliente/${user.id}`);
            navigate(`/clientProfile/${user.id}`);
        }
    }
};


  return (

    <div className='fixed z-10 bg-white w-full mt-10'>
      <div className='fixed z-10 bg-white w-full flex  items-center justify-around '>
        <nav className='flex p-2 box-border w-2/4 max-[768px]:overflow-hidden max-[768px]:w-full'>
          <ul className="flex justify-around items-center gap-6 max-[768px]:whitespace-nowrap w-full max-[768px]:gap-4">
            <Link to="/" className="block text-teal-600" >
              <img src={logoNoBg} className='w-16 h-12 max-[768px]:w-10 max-[768px]:h-8 logo max-[768px]:hidden' alt='Find & Fix' />
            </Link>
            <Link to="/" className="block text-teal-600 min-[769px]:hidden" >
              <img src={logoScritta} className='w-22 h-12  logo ' alt='Find & Fix' />
            </Link>
            <li>

              <Link to="/chiSiamo" className=" text-customBlue transition hover:text-customGreen whitespace-nowrap text-xl max-[768px]:text-xs max-[768px]:hidden"> CHI SIAMO </Link>

            </li>

            <li>
              <Link className="text-customBlue cursor-pointer transition hover:text-customGreen text-xl max-[768px]:text-xs max-[768px]:hidden" to="/servizi" > PROFESSIONISTI </Link>
            </li>

            <li>
              <ScrollLink className=" text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-xs hover:cursor-pointer max-[768px]:hidden" smooth={true} to="footer" duration={1500}> CONTATTI </ScrollLink>
            </li>
          </ul>
        </nav>

        <div className='flex px-4 max-[768px]:hidden h-8 w-2/4 justify-end'>
          <Link to="/signIn" className="button rounded-md mx-4 bg-customBlue transition duration-300 text-xs font-medium text-white shadow hover:bg-customGreen p-4 flex items-center box-border whitespace-nowrap" onClick={handleLogout}>
            {user && user.isAuthenticated ? 'LOGOUT' : 'LOGIN'}
          </Link>

          {user && user.isAuthenticated ?
            <button onClick={redirectToProfile} className="button rounded-md  p-4 flex items-center text-mobile font-medium text-customBlue hover:text-customGreen box-border " >
              Ciao, {user.email}
            </button>
            : <Link to="/registrati" className="button rounded-md bg-customBlue transition duration-300 p-4 flex items-center text-xs font-medium text-white hover:bg-customGreen box-border " >
              REGISTRATI
            </Link>
          }


          {user && user.isAuthenticated ? null
            :
            <Link to="/proRegistrati" className="button rounded-md ml-4 transition duration-300 bg-customBlue text-xs font-medium text-white hover:bg-customGreen flex items-center p-4 box-border" >
              LAVORA CON NOI
            </Link>}



        </div>


        <button className=" min-[769px]:hidden rounded bg-white p-2 text-gray-600 transition hover:text-gray-600/75 ml-20 sticky " onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isMenuOpen && (
          <Fade triggerOnce={false} duration={1500}>
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg flex flex-col items-start p-4 w-fit hamburgerNavbar">
              <Link to="/signIn"
                className="   py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14   "
                href="#"
              >
                {user && user.isAuthenticated ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" onClick={handleLogout}>
                    <path fill="#0F5DA6" d="M9 4V1H0v14h9v-3H8v2H1V2h7v2z" />
                    <path fill="#0F5DA6" d="m16 8l-5-4v2H6v4h5v2z" />
                  </svg>
                  :
                  'LOGIN'}
              </Link>

              {user && user.isAuthenticated
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" onClick={redirectToProfile}>
                  <path fill="#0F5DA6" fillRule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clipRule="evenodd" />
                </svg>
                :
                <Link to="/registrati"
                  className=" py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  "
                >
                  REGISTRATI
                </Link>
              }

              {user ? null
                :
                <Link to="/proRegistrati"
                  className=" py-2.5 text-mobile text-base font-medium text-customBlue hover:bg-customGreen w-fit whitespace-nowrap"
                >
                  LAVORA CON NOI
                </Link>
              }

              <Link to="/chiSiamo" className=" text-customBlue transition hover:text-customGreen whitespace-nowrap text-xl max-[768px]:text-base mt-2"> CHI SIAMO </Link>
              <Link className="text-customBlue cursor-pointer transition hover:text-customGreen text-xl max-[768px]:text-base mt-4 " to="/servizi" > PROFESSIONISTI </Link>
              <ScrollLink className=" text-customBlue transition hover:text-customGreen text-xl  hover:cursor-pointer mt-2 max-[768px]:text-base" smooth={true} to="footer" duration={1500}> CONTATTI </ScrollLink>
            </div>
          </Fade>
        )}
      </div>
    </div>

  )
}

export default Navbar