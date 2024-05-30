import logoNoBg from '../images/logoNoBg.svg'
import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
// import DarkModeButton from '../DarkMode.jsx';
// import { DarkModeContext } from '../DarkMode';
// import '../darkModeStyles.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  // const { toggleDarkMode } = useContext(DarkModeContext);
  // Funzione per gestire il click sul bottone del menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleAuthentication() {
    setIsAuthenticated(!isAuthenticated)
    if (userEmail) {
      localStorage.removeItem('email')
    }
  }

  useEffect(() => {
    function getEmail() {
      setUserEmail(localStorage.getItem('email'));
    }

    getEmail();
  }, []);

  function goToProfile(){
    navigate('/Userwewe')
  }

  return (
    <div className='fixed z-10 bg-white w-full'>
      <div className='fixed z-10 bg-white w-full flex justify-between items-center'>
        <nav className='flex w-full p-4 box-border'>
          <ul className="flex justify-around items-center gap-6 max-[768px]:whitespace-nowrap w-full">
            <Link to="/" className="block text-teal-600" href="#">
              <img src={logoNoBg} className='w-20 h-16 max-[768px]:w-10 max-[768px]:h-8 logo' alt='Find & Fix' />
            </Link>
            <li>
              <Link to="/chiSiamo" className=" text-customBlue transition hover:text-customGreen whitespace-nowrap text-xl max-[768px]:text-base" href="#"> Chi siamo </Link>
            </li>

            <li>
              <Link to="/servizi" className="text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base" href="#"> Servizi </Link>
            </li>

            <li>
              <ScrollLink className=" text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base hover:cursor-pointer" smooth={true} to="footer" duration={1500}> Contatti </ScrollLink>
            </li>
          </ul>
        </nav>

        <div className='flex px-4 max-[768px]:hidden h-12'>
          <Link to="/signIn" className="button rounded-md mx-4 bg-customBlue  text-mobile font-medium text-white shadow hover:bg-customGreen p-4 flex items-center box-border whitespace-nowrap" onClick={handleAuthentication}>
            {userEmail ? 'LOG OUT' : 'LOGIN'}
          </Link>

          {userEmail ?
            <Link to="/Userwewe" className="button rounded-md  p-4 flex items-center text-mobile font-medium text-customBlue hover:text-customGreen box-border " >
              Ciao, {userEmail}
            </Link>
            : <Link to="/registrati" className="button rounded-md bg-customBlue p-4 flex items-center text-mobile font-medium text-white hover:bg-customGreen box-border " >
              REGISTRATI
            </Link>}


          {userEmail ? null :
            <Link to="/proRegistrati" className="button rounded-md ml-4 bg-customBlue text-mobile font-medium text-white hover:bg-customGreen flex items-center p-4 box-border" >
              REGISTRATI COME PRO
            </Link>}

        </div>


        <button className=" min-[769px]:hidden rounded mx-4 bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg flex flex-col items-center p-4 w-fit hamburgerNavbar">
              <Link to="/signIn"
                className=" mx-4  py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center whitespace-nowrap"
                href="#"
              >
                {userEmail ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" onClick={handleAuthentication}>
                  <path fill="#0F5DA6" d="M9 4V1H0v14h9v-3H8v2H1V2h7v2z"/>
                  <path fill="#0F5DA6" d="m16 8l-5-4v2H6v4h5v2z"/>
                  </svg> 
                : 
                'LOGIN'}
              </Link>

              {userEmail
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" onClick={goToProfile}>
                  <path fill="#0F5DA6" fillRule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clipRule="evenodd" />
                </svg>
                :
                <Link to="/registrati"
                  className="mx-4 py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                >
                  REGISTRATI
                </Link>
              }

              {userEmail ? null
                :
                <Link to="/proRegistrati"
                  className="mx-4 py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                >
                  REGISTRATI COME PRO
                </Link>
              }



            </div>
          </Fade>
        )}

      </div>
    </div>





  )
}

export default Navbar