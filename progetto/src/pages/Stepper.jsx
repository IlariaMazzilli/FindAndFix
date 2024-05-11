import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LogoBianco from "../images/LogoBianco.png";
import Abbonamenti from "./Abbonamenti";
import { Link, useNavigate } from "react-router-dom";

function Stepper() {



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
    abbonamento: ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div
      className="relative min-h-screen flex"
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
              onClick={handleSubmit}
                  className=" bg-customGreen text-white font-bold py-2 px-4 rounded"
                >
                  Avanti
                </button>
        
              </div>
            </motion.div>
          )}
      
        
        </form>
      </div>
    </div>
  );
}

export default Stepper;
