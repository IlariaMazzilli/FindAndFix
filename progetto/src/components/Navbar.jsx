import logoNoBg from '../images/logoNoBg.svg'
import { useState, useEffect, useContext} from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUserName] = useState('')
  const navigate = useNavigate()
  const [token, setToken] = useToken()
  const user = useUser()

  console.log('user:', user)







  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')

    navigate('/')
  }


  function goToProfile() {
    navigate('/Userwewe')
  }

  return (

    <div className='fixed z-10 bg-white w-full mt-10'>
      <div className='fixed z-10 bg-white w-full flex  items-center justify-around '>
        <nav className='flex p-2 box-border w-2/4 max-[768px]:overflow-hidden max-[768px]:w-full'>
          <ul className="flex justify-around items-center gap-6 max-[768px]:whitespace-nowrap w-full max-[768px]:gap-4">
            <Link to="/" className="block text-teal-600" href="#" >
              <img src={logoNoBg} className='w-16 h-12 max-[768px]:w-10 max-[768px]:h-8 logo' alt='Find & Fix' />
            </Link>
            <li>
              
              <Link to="/chiSiamo" className=" text-customBlue transition hover:text-customGreen whitespace-nowrap text-xl max-[768px]:text-xs" href="#"> CHI SIAMO </Link>
              
            </li>

            <li>
              <Link className="text-customBlue cursor-pointer transition hover:text-customGreen text-xl max-[768px]:text-xs"  to="/servizi" > SERVIZI </Link>
            </li>

            <li>
              <ScrollLink className=" text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-xs hover:cursor-pointer" smooth={true} to="footer" duration={1500}> CONTATTI </ScrollLink>
            </li>
          </ul>
        </nav>

        <div className='flex px-4 max-[768px]:hidden h-8 w-2/4 justify-end'>
          <Link to="/signIn" className="button rounded-md mx-4 bg-customBlue transition duration-300 text-xs font-medium text-white shadow hover:bg-customGreen p-4 flex items-center box-border whitespace-nowrap" onClick={logout}>
            {user ? 'LOGOUT' : 'LOGIN'}
          </Link>

          {user ?
            <Link to="/clientProfile/:name" className="button rounded-md  p-4 flex items-center text-mobile font-medium text-customBlue hover:text-customGreen box-border " >
              Ciao, {user.email}
            </Link>
            : <Link to="/registrati" className="button rounded-md bg-customBlue transition duration-300 p-4 flex items-center text-xs font-medium text-white hover:bg-customGreen box-border " >
              REGISTRATI
            </Link>}


          {user ? null 
          :
            <Link to="/proRegistrati" className="button rounded-md ml-4 transition duration-300 bg-customBlue text-xs font-medium text-white hover:bg-customGreen flex items-center p-4 box-border" >
              LAVORA CON NOI
            </Link>}

        </div>


        <button className=" min-[769px]:hidden rounded bg-white p-2 text-gray-600 transition hover:text-gray-600/75 ml-20 sticky " onClick={toggleMenu}>
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
                className=" mx-4  py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14   "
                href="#"
              >
                {user ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" onClick={logout}>
                    <path fill="#0F5DA6" d="M9 4V1H0v14h9v-3H8v2H1V2h7v2z" />
                    <path fill="#0F5DA6" d="m16 8l-5-4v2H6v4h5v2z" />
                  </svg>
                  :
                  'LOGIN'}
              </Link>

              {user
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

              {user ? null
                :
                <Link to="/proRegistrati"
                  className=" py-2.5 text-mobile text-sm font-medium text-customBlue hover:bg-customGreen w-fit whitespace-nowrap"
                >
                  LAVORA CON NOI
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