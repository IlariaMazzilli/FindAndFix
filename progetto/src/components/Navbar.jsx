import logoNoBg from '../images/logoNoBg.svg'
import { useState, useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
// import DarkModeButton from '../DarkMode.jsx';
// import { DarkModeContext } from '../DarkMode';
// import '../darkModeStyles.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { toggleDarkMode } = useContext(DarkModeContext);
  // Funzione per gestire il click sul bottone del menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className='fixed z-10 bg-white w-full'>
      <div className='fixed z-10 bg-white w-full flex justify-between items-center'>
        <nav className='flex w-full p-4 box-border'>
          <ul className="flex justify-around items-center gap-6 max-[768px]:whitespace-nowrap w-full">
            <Link to="/" className="block text-teal-600" href="#">
              <img src={logoNoBg} className='w-20 h-16 max-[768px]:w-10 max-[768px]:h-8 logo' alt='Find & Fix' />
            </Link>
            <li>
              <Link to="/chiSiamo" className=" text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base" href="#"> Chi siamo </Link>
            </li>

            <li>
              <Link to="/servizi" className="text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base" href="#"> Servizi </Link>
            </li>

            <li>
              {/* controllare come fare per riportare alla sezione contattaci del footer */}
              <a className=" text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base" href="#"> Contatti </a>
            </li>
          </ul>
        </nav>

        <div className='flex px-4 max-[768px]:hidden h-12'>
          <Link to="/signIn" className="button rounded-md mx-4 bg-customBlue  text-mobile font-medium text-white shadow hover:bg-customGreen max-[768px]:p-2 flex items-center" >
            LOGIN
          </Link>

          <Link to="/registrati" className="button rounded-md bg-customBlue  flex items-center text-mobile font-medium text-white hover:bg-customGreen " >
            REGISTRATI
          </Link>

          <Link to="/proRegistrati" className="button rounded-md ml-4 bg-customBlue text-mobile font-medium text-white hover:bg-customGreen flex items-center " >
            REGISTRATI COME PRO
          </Link>
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
                      className=" mx-4  py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                      href="#"
                    >
                      LOGIN
                    </Link>


                    <Link to="/registrati"
                      className="mx-4 py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                      href="#"
                    >
                      REGISTRATI
                    </Link>

                    <Link to="/proRegistrati"
                      className="mx-4 py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                      href="#"
                    >
                      REGISTRATI COME PRO
                    </Link>

           
                  </div>
                </Fade>
              )}
      
      </div>
    </div>

    
   
        

  )
}

export default Navbar