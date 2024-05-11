import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LogoBianco from "../images/LogoBianco.png";

function Stepper() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    occupation: "",
    completionDate: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="relative min-h-screen flex "
      style={{ backgroundColor: "#0F5DA6" }}
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
                  name="name" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.name} // This correctly points to formData.name
                  onChange={handleChange}
                />
              </div>
              <div>
                {/* cognome input field */}
                <input
                  type="text"
                  placeholder="Cognome"
                  name="Cognome" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.name} // This correctly points to formData.name
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
                  placeholder="Provincia"
                  name="Provincia" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.name} // This correctly points to formData.name
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
                  value={formData.name} // This correctly points to formData.name
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
                  name="Telefono" // This should match your formData property
                  className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                  style={{ backgroundColor: "white" }}
                  value={formData.name} // This correctly points to formData.name
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
                È necessario creare una password per poter accedere al proprio account la prossima volta.
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
               className="md:w-3/5 mx-auto py-12">
              <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-customBlue sm:text-3xl font-lato">
              SELEZIONA IL TUO ABBONAMENTO
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-5 text-customGreen">
            Scegli il canone che fa per te. Investi su te stesso ed inizia a
            guadagnare.
          </p>
       
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
<div className="rounded-3xl p-8 ring-1 xl:p- ring-black bg-gray-100 hover:scale-105 transition duration-300">
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
              >
                ACQUISTA ORA
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
              >
                ACQUISTA ORA
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
               <div>
               <div className="flex justify-center mt-0">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                >
                  Indietro
                </button>
            <button type="button" onClick={redoStep} className=" bg-customGreen text-white font-bold py-2 px-4 rounded">
                      {/*   mettere link per i piani per pagare */}
                           PAGAMENTO
                       </button>
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