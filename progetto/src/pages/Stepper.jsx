import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LogoBianco from "../images/LogoBianco.png";
import Abbonamenti from "./Abbonamenti";
import { Link, useNavigate } from "react-router-dom";

function Stepper() {


   const [abbonamento, setAbbonamento] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    categoria: [],
    tipo: '',
    nome: '',
    cognome: '',
    email: '',
    password: '',
    confermaPassword:'',
    telefono: '',
    città: '',
    provincia: '',
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  // Gestione degli input checkbox
  if (type === 'checkbox') {
    if (checked) {
      // Se l'input è stato selezionato, aggiungi il valore alla categoria
      setFormData((prevState) => ({
        ...prevState,
        categoria: [...prevState.categoria, value]
      }));
    } else {
      // Se l'input è stato deselezionato, rimuovi il valore dalla categoria
      setFormData((prevState) => ({
        ...prevState,
        categoria: prevState.categoria.filter((cat) => cat !== value)
      }));
    }
  } else {
    // Gestione degli altri input
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
};

 


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const redoStep = () => {
    setStep(1);
  };

  const handleSubscriptionSelect = (selectedSubscription) => {
    setAbbonamento(selectedSubscription);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      abbonamento: abbonamento
    }));
    console.log(formData);

  }




  return (
    <div
      className="relative min-h-screen flex w-full overflow-x-hidden justify-center bg-customBlue"
    >
      <div className="container max-w-screen-xl mx-auto my-auto relative flex flex-col w-3/5 ">
        <form
          onSubmit={handleSubmit}
          className="mt-12 md:w-4/5 mx-auto rounded-3xl p-3"
          style={{ backgroundColor: "white" }}
        >
          {step === 1 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:w-3/5 mx-auto py-12"
            >
              <div className="text-base font-light text-center  ">Step 1/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500 rounded-3xl w-4/12"></div>
              </div>
              <div className="mt-12 text-3xl  text-center">
                Quale servizio offri?
              </div>
              <br />
              <div>
                <fieldset>
                  <legend className="sr-only">Checkboxes</legend>

                  <div className="space-y-2">
                    <label
                      htmlFor="Option1"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option1"
                        />
                      </div>

                      <div>
                        <strong className="font-medium text-gray-900">
                          Idraulico
                        </strong>
                      </div>
                    </label>

                    <label
                      htmlFor="Option2"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option2"
                        />
                      </div>

                      <div>
                        <strong className="font-medium text-gray-900">
                          Elettricista
                        </strong>
                      </div>
                    </label>

                    <label
                      htmlFor="Option3"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option3"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Imbianchino
                        </strong>
                      </div>
                    </label>
                    <label
                      htmlFor="Option4"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option4"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Giardiniere
                        </strong>
                      </div>
                    </label>
                    <label
                      htmlFor="Option5"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option5"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Traslocatore
                        </strong>
                      </div>
                    </label>
                    <label
                      htmlFor="Option6"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option6"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Pavimentista
                        </strong>
                      </div>
                    </label>
                    <label
                      htmlFor="Option7"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option7"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Serramentista
                        </strong>
                      </div>
                    </label>
                    <label
                      htmlFor="Option8"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option8"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Interior Designer
                        </strong>
                      </div>
                    </label>
                    <label
                      htmlFor="Option9"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option9"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Faleganme
                        </strong>
                      </div>
                    </label>
                    <label
                      htmlFor="Option10"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="checkbox"
                          className="size-4 rounded border-gray-300"
                          id="Option10"
                        />
                      </div>

                      <div>
                        <strong className="text-pretty font-medium text-gray-900">
                          Tuttofare
                        </strong>
                      </div>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="mt-4 bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
              </div>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:w-3/5 mx-auto py-12"
            >
              <div className="text-base font-light text-center  ">Step 2/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500  rounded-3xl w-5/12"></div>
              </div>
              <div className="mt-12 text-3xl  text-center">
                Sei un'azienda o un libero professionista?
              </div>
              <div>
                <div className="mt-12 items-center justify-center">
                  <label
                    htmlFor="Option1"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="checkbox"
                        className="size-4 rounded border-gray-300"
                        id="Option1"
                  
                      />
                    </div>

                    <div>
                      <strong className="text-pretty font-medium text-gray-900">
                        Libero professionista
                      </strong>
                    </div>
                  </label>
                  <br />
                  <label
                    htmlFor="Option1"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="checkbox"
                        className="size-4 rounded border-gray-300"
                        id="Option1"
                      />
                    </div>

                    <div>
                      <strong className="text-pretty font-medium text-gray-900">
                        Azienda
                      </strong>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className=" bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
              </div>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:w-3/5 mx-auto py-12"
            >
              <div className="text-base font-light text-center  ">Step 3/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500  rounded-3xl w-6/12"></div>
              </div>
              <div className="mt-12 text-3xl  text-center">
                Come ti chiami?
                <p className="text-sm">
                  Il tuo nome apparirà sul tuo profilo e ai clienti a cui invii
                  i preventivi.
                </p>
              </div>

              <div>
                {/* Name input field */}
                <input
                  type="text"
                  placeholder="Nome"
                  name="nome" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.nome} // This correctly points to formData.name
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* cognome input field */}
                <input
                  type="text"
                  placeholder="Cognome"
                  name="cognome" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.cognome} // This correctly points to formData.name
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className=" bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
              </div>
            </motion.div>
          )}
          {step === 4 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:w-3/5 mx-auto py-12"
            >
              <div className="text-base font-light text-center  ">Step 4/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500  rounded-3xl w-7/12"></div>
              </div>
              <div className="mt-12 text-3xl  text-center">
                In che zona lavori?
                <br />
                <p className="text-sm">
                  Ti invieremo le opportunità di lavoro del tuo quartiere e
                  delle aree vicine.
                </p>
              </div>

              <div>
                {/* provincia input field */}
                <input
                  type="text"
                  placeholder="provincia"
                  name="provincia" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.provincia} // This correctly points to formData.name
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* città input field */}
                <input
                  type="text"
                  placeholder="Città"
                  name="città" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.città} // This correctly points to formData.name
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className=" bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
              </div>
            </motion.div>
          )}
          {step === 5 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:w-3/5 mx-auto py-12"
            >
              <div className="text-base font-light text-center  ">Step 5/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500  rounded-3xl w-8/12"></div>
              </div>
              <div className="mt-12 text-3xl  text-center">
                Qual è il tuo numero di telefono?
                <br />
                <p className="text-sm">
                  I tuoi nuovi clienti e Find&Fix ti contatteranno a questo
                  numero.
                </p>
              </div>

              <div>
                {/* telefono input field */}
                <input
                  type="tel"
                  placeholder="Telefono"
                  name="telefono" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.telefono} // This correctly points to formData.name
                  onChange={handleChange}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </div>

              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className=" bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
              </div>
            </motion.div>
          )}
          {step === 6 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:w-3/5 mx-auto py-12"
            >
              <div className="text-base font-light text-center  ">Step 6/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500  rounded-3xl w-9/12"></div>
              </div>
              <div className="mt-12 text-3xl  text-center">
                Qual è il tuo indirizzo email?
                <br />
                <p className="text-sm">
                  Ti servirà per accedere e per ricevere le opportunità via
                  email.
                </p>
              </div>

              <div>
                {/* email input field */}
                <input
                  type="email"
                  placeholder="Inserisci il tuo indirizzo email"
                  name="email" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.email} // This correctly points to formData.name
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className=" bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
              </div>
            </motion.div>
          )}
          {step === 7 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:w-3/5 mx-auto py-12"
            >
              <div className="text-base font-light text-center  ">Step 7/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500  rounded-3xl w-10/12"></div>
              </div>
              <div className="mt-12 text-3xl  text-center">
                Crea Password
                <br />
                <p className="text-sm">
                  È necessario creare una password per poter accedere al proprio
                  account la prossima volta.
                </p>
              </div>

              <div>
                {/* Password input field */}
                <input
                  type="password"
                  placeholder="Inserisci Password"
                  name="password" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.password} // This correctly points to formData.name
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Conferma Password"
                  name="confermaPassword" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.confermaPassword} // This correctly points to formData.name
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>
                <button
                  type="button"
              onClick={nextStep}
                  className=" bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
        
              </div>
            </motion.div>
            
          )}
           {step === 8 && (
            <motion.div
              key={step} // Add this line
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-12"
            >
              <div className="text-base font-light text-center  ">Step 7/8</div>
              <div
                className="mt-4 w-full h-2"
                style={{ backgroundColor: "#0F5DA6" }}
              >
                <div className="h-full bg-green-500  rounded-3xl w-10/12"></div>
              </div>
              <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto  px-6 lg:px-8">
          <div className="mx-auto  text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-customBlue sm:text-5xl font-lato">
              SELEZIONA IL TUO ABBONAMENTO
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-customGreen">
            Scegli il canone che fa per te. Investi su te stesso ed inizia a
            guadagnare.
          </p>
       
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
<div className="rounded-3xl p-8 ring-1 xl:p-10 ring-black bg-gray-100 hover:scale-105 transition duration-300">
              <h3
                id="tier-freelancer"
                className="text-2xl font-semibold leading-8 text-black font-lato"
              >
                PIANO MENSILE
              </h3>
              <p className="mt-4 text-sm leading-6 text-green-600">
                Canone mensile con i seguenti vantaggi:
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-customBlue">
                  €50
                </span>
                <span className="text-sm font-semibold leading-6 text-customBlue">
                  {" "}
                  / Mese
                </span>
              </p>
              <a
          
                href="#"
                aria-describedby="tier-freelancer"
                className="mt-6 block rounded-xl py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-customBlue focus-visible:outline-orange-600"
              > <button onClick={() => {handleSubscriptionSelect('mensile'); nextStep(); }}>
                ACQUISTA ORA </button>
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-400"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Fino a 30 appuntamenti al mese.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Fino a 24 ore d'attesa per il supporto.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Appuntamenti fino a 50 km di distanza.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-teal-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Garanzia fino al 50% del valore della prestazioone.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl p-8 ring-1 xl:p-10 ring-black bg-gray-100 hover:scale-105 transition duration-300">
              <h3
                id="tier-startup"
                className="text-2xl font-bold leading-8 text-gray-900 font-lato"
              >
                PIANO ANNUALE
              </h3>
              <p className="mt-4 text-sm leading-6 text-green-600">
                Piano annuale con molte più tutele e garanzie.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-customBlue">
                  € 500
                </span>
                <span className="text-sm font-semibold leading-6 text-customBlue">
                  /anno
                </span>
              </p>
              <a
                href="#"
                aria-describedby="tier-freelancer"
                className="mt-6 block rounded-xl py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white shadow-sm hover:bg-customBlue focus-visible:outline-orange-600"
              > <button onClick={() => {handleSubscriptionSelect('annuale'); nextStep();}}>
                ACQUISTA ORA
                </button>
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-pink-600"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Appuntamenti illimitati
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Supporto immediato H24
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Nessun limite di distanza
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Garanzia fino al 100% del valore della prestazione.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
              <div className="flex justify-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>

        
              </div>
            </motion.div>
            
            
          )}
           {step === 9 && (
            <motion.div>
         <div class="font-[sans-serif] bg-gray-50 p-6 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-extrabold text-[#333] text-center">Checkout</h2>
        <div class="grid lg:grid-cols-3 gap-8 mt-12">
          <div class="lg:col-span-2">
            <h3 class="text-xl font-bold text-[#333]">Scegli il tuo metodo di pagamento</h3>
            <div class="grid gap-4 sm:grid-cols-2 mt-6">
              <div class="flex items-center">
                <input type="radio" class="w-5 h-5 cursor-pointer" id="card" checked />
                <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1" />
                  <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="card2" />
                  <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="card3" />
                </label>
              </div>
              <div class="flex items-center">
                <input type="radio" class="w-5 h-5 cursor-pointer" id="paypal" />
                <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                  <img src="https://readymadeui.com/images/paypal.webp" class="w-20" alt="paypalCard" />
                </label>
              </div>
            </div>
            <form class="mt-8">
              <div class="grid gap-6">
                <div class="grid sm:grid-cols-3 gap-6">
                  <input type="number" placeholder="Numero della carta"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                  <input type="number" placeholder="Scadenza"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                  <input type="number" placeholder="CVV"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
                <div class="sm:col-span-2 grid sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Nome del titolare"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                  <input type="number" placeholder="Codice Postale"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none" />
                </div>
              </div>
            </form>
          </div>
          <div class="lg:border-l lg:pl-8">
            <h3 class="text-xl font-bold text-[#333]">Carrello</h3>
            <ul class="text-[#333] mt-6 space-y-4">
              <li class="flex flex-wrap gap-4 text-sm">Abbonamento mensile <span class="ml-auto font-bold">€50.00</span></li>
              <li class="flex flex-wrap gap-4 text-base font-bold border-t pt-4">Totale <span class="ml-auto">€50.00</span></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-wrap gap-4 mt-10">
        
          <button onClick ={ handleSubmit} type="button"
            class="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Paga ora</button>
        </div>
      </div>
    </div>
            </motion.div>
            
            
          )}
      
        
        </form>
      </div>
    </div>
  );
}

export default Stepper;
