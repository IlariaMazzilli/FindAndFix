import { useState } from "react";
import House from "../images/House.jpg";
import { MdVisibility } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from '../auth/AuthContext';
import axios from "axios";
import Toolbar from "../components/Toolbar";

function SignIn() {
  const { setToken, setUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  function handleInput(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function OnLogInClicked(e) {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      });
      const { token, user } = response.data;

      console.log('Response data:', response.data); // Log della risposta
      console.log('Token:', token);
      console.log('User:', user);

      if (!token || !user) {
        throw new Error('Invalid response from server');
      }

      setToken(token); //salva il token nel contensto
      setUser(user); // Aggiorna lo stato dell'utente nel contesto

         // Logga l'ID e il tipo di utente
    console.log('User ID:', user.id);
    console.log('User Type:', user.user_type);
    
      // Reindirizza in base al tipo di utente
      if(user.user_type === 'cliente') {
        console.log('Navigating to client profile:', `/clientProfile/${user.id}`);
        navigate(`/clientProfile/${user.id}`);
      } else if(user.user_type === 'professionista') {
        console.log('Navigating to professional profile:', `/profile/${user.id}`);
        navigate(`/profile/${user.id}`);
      } 

    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(errorMessage || 'Login failed. Please try again');
    }
    // metto in local storage la mail
    localStorage.setItem('email', formData.email)
  }



  return (
    <>
    <Toolbar/>
      <Navbar />
      <>
        <section className="flex flex-col md:flex-row h-screen items-center">
          <div className="bg-customBlue hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img src={House} alt="" className="w-full h-full object-cover" />
          </div>
          <div
            className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Accedi al tuo account
              </h1>
              <br />
              {errorMessage && <div className="text-red-500">{errorMessage}</div>}
              <form className="mt-6" action="#" method="POST">

                <div>
                  <label className="block text-gray-700">
                    Indirizzo e-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Inserire l'indirizzo e-mail"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={email}
                    onChange={handleInput}
                    autoFocus=""
                    autoComplete=""
                    required=""
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="password" className="block text-gray-700">
                    Password:
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute right-0 top-0 h-full  pt-4 w-10 text-gray-400">
                      <span>
                        {/* aggiustare icon metterlo piÃ¹ in basso */}
                        <MdVisibility
                          className="showPassword"
                          onClick={() =>
                            setShowPassword((prevState) => !prevState)
                          }
                        />
                      </span>
                    </div>

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none pr-10"
                      placeholder="Password"
                      minLength={8}
                      required=""
                      autoComplete=""
                      value={password}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className="text-right mt-2">
                  <button
                    /* inserire il nuovo form di forgot password */
                    onClick={() => navigate("/recuperaPassword")}
                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  >
                    Hai dimenticato la password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full block bg-customBlue hover:bg-customGreen focus:bg-customGreen text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
                  disabled={!email || !password}
                  onClick={OnLogInClicked}
                >
                  Log In
                </button>
              </form>
              <hr className="my-6 border-gray-300 w-full" />
              <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <FcGoogle />
                  <span className="ml-4">Accedi con Google</span>
                </div>
              </button>

              <p className="mt-8">
                Hai bisogno di un account?{" "}
                <button
                  onClick={() => navigate("/registrati")}
                  className="text-customBlue hover:text-customGreen font-semibold"
                >
                  Registrati
                </button>
              </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default SignIn;