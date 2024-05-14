import React, { useState } from "react";
import LogoCompleto from "../images/LogoCompleto.jpeg";
import RegistrationBanner from "../images/Registrazione-Banner.png";
import { useNavigate } from "react-router-dom";
import { MdVisibility } from "react-icons/md";

function Register() {
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    confermaPassword: ""
  });

  const { nome, cognome, email, password, confermaPassword } = formData;
/*   const navigate = useNavigate(); */

async function OnSignUpClicked() {
  alert("Log In manca delle funzioni ");
}

  function handleInput(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }))
    console.log();
  };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={RegistrationBanner}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
           

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Registrati Come Cliente
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Completa tutti i campi e assicurati un'esperienza professionale.
            </p>
            <br />

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
                  required=""
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
                  required=""
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
                        {/* aggiustare icon metterlo più in basso */}
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
                  minLength={6}
                  value={password}
                  onChange={handleInput}
                  autoComplete=""
                  required=""
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
                        {/* aggiustare icon metterlo più in basso */}
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
                  id="confermapassword"
                  name="confermapassword"
                  placeholder="Conferma Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none pr-10"
                  minLength={6}
                  value={confermaPassword }
                  onChange={handleInput}
                  autoComplete=""
                  required=""
                />
              </div>

              <div className="col-span-6">
                {/* manca come metterlo nel formDATA */}
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
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
                    <button href="#" className="text-gray-700 underline">
                      Login
                      </button>
                  </p>
                <br />

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Sei un professionista ?{" "}
                  <button  className="text-gray-700 underline">
                    Registrati come professionista.
                  </button>
                  
                </p>
                </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Register;
