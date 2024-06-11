import { useState } from "react";
import registerbanner from "../images/registerbanner.jpg";
import { useNavigate } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import Navbar from "../components/Navbar";
import axios from "axios";
import {useAuth} from '../auth/AuthContext';
import Toolbar from "../components/Toolbar";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import logoScritta from '../images/logoScrittaNav.svg'


function Register() {
  const {setToken} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    confermaPassword: "",
    email_marketing: false
  });

  const { nome, cognome, email, password, confermaPassword, email_marketing } = formData;
  const navigate = useNavigate();

  function handleInput(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const OnSignUpClicked = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email)) {
      setErrorMessage("L'indirizzo email non è valido.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("La password deve essere lunga almeno 8 caratteri.");
      return;
    }

    if (password !== confermaPassword) {
      setErrorMessage("Le password non corrispondono.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/registrazione/cliente', {
        nome,
        cognome,
        email,
        password,
        email_marketing
      });
      
      setToken(response.data.token);
      console.log(response.data.token);
      alert("Registrazione effettuata con successo");
      navigate("/"); // Reindirizza alla pagina di accesso dopo la registrazione
    } catch (error) {
      console.error(error);
      if (error.response.status === 409) {
        setErrorMessage('Utente già esistente.');
      } else {
        setErrorMessage('Errore durante la registrazione.');
      }
    }
  };

  return (
    <>
    {/* <Toolbar/>
      <Navbar /> */}
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 max-[1024px]:hidden">
            <img
              alt=""
              src={registerbanner}
              className="absolute inset-0 h-full w-full object-cover max-[768px]:hidden"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
            <Link to="/" className="block text-teal-600 " >
              <img src={logoScritta} className='w-22 h-12  logo ' alt='Find & Fix' />
            </Link>
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Registrati Come Cliente
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Completa tutti i campi e assicurati un'esperienza professionale.
              </p>
              <br />
              {errorMessage && <div className="text-red-500">{errorMessage}</div>}
              <b />
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Nome"
                    className="block font-medium text-gray-700"
                  >
                    Nome
                  </label>

                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={nome}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Cognome"
                    className="block  font-medium text-gray-700"
                  >
                    Cognome
                  </label>

                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    placeholder="Cognome"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={cognome}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block  font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Inserire l'indirizzo e-mail"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={email}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 relative" >
                  <label
                    htmlFor="Password"
                    className="block font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="inline-flex items-center justify-center absolute right-0 top-0 h-full pt-8 w-10 text-gray-400">
                    <span>
                      <MdVisibility
                        className="showPassword"
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      />
                    </span>
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    minLength={8}
                    value={password}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 relative">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block  font-medium text-gray-700"
                  >
                    Conferma Password
                  </label>
                  <div className="inline-flex items-center justify-center absolute right-0 top-0 h-full pt-8 w-10 text-gray-400">
                    <span>
                      <MdVisibility
                        className="showPassword"
                        onClick={() =>
                          setShowConfirmPassword((prevState) => !prevState)
                        }
                      />
                    </span>
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confermapassword"
                    name="confermaPassword"
                    placeholder="Conferma Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none pr-10"
                    minLength={8}
                    value={confermaPassword}
                    onChange={handleInput}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="emailMarketing" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="emailMarketing"
                      name="email_marketing"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                      checked={email_marketing}
                      onChange={handleInput}
                    />

                    <span className=" text-gray-700">
                      Voglio ricevere email riguardanti sconti, eventi e
                      promozioni
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    Creando un account sono consapevole di accettare
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      termini e condizioni{" "}
                    </a>
                    e
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button 
                    className="w-full block bg-customBlue hover:bg-customGreen focus:bg-customGreen text-white font-semibold rounded-lg
                      px-4 py-3 mt-6"
                    disabled={!email || !password || password !== confermaPassword}
                    onClick={OnSignUpClicked}
                  >
                    Crea un account.
                  </button>
                </div>
                <div className="col-span-6">
                  <p className=" mt-4 text-sm text-gray-500 sm:mt-0">
                    Hai già un account ?{" "}
                    <button onClick={() => navigate("/signIn")} className="text-gray-700 underline">
                      Accedi
                    </button>
                  </p>
                  <br />

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Sei un professionista ?{" "}
                  <button 
                  onClick={() => navigate("/proRegistrati")} 
                  className="text-gray-700 underline">
                    Registrati come professionista.
                  </button>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default Register;