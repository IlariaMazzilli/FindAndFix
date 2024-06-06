import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import axios from "axios";
import { useAuth } from '../auth/AuthContext'
import {loadStripe} from '@stripe/stripe-js';

function Stepper() {
  const [isUploading, setIsUploading] = useState(false); 
  const {setToken} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    categoria_servizi: [], // aggiornato
    tipo: "",
    nome_azienda: "",
    nome: "",
    cognome: "",
    email: "",
    password: "",
    confermaPassword: "",
    telefono: "",
    citta: "",
    provincia: "",
    profilePhoto: null,
    profilePhotoName: "",
    profilePhotoPath: "",
    descrizioneProfessionista: "",
    p_iva: "", // aggiornato
    codiceFiscale: "",
    tipo_abbonamento: "", // aggiornato
    costo: 0, // aggiornato
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
   
    const { name, value, type, checked, files } = e.target;
    //console.log(`Changed field: ${name}, Value: ${value}, Type: ${type}`);
    if (type === "checkbox") {
      if (checked) {
        if (formData.categoria_servizi.length < 3) { 
          setFormData((prevState) => ({
            ...prevState,
            categoria_servizi: [...prevState.categoria_servizi, value],
          }))
        } 
      } else {
        setFormData((prevState) => ({
          ...prevState,
          categoria_servizi: prevState.categoria_servizi.filter((cat) => cat !== value), 
        }));
      }
    } else if (type === "file") {
      const file = files[0];
      const fileName = file.name;
      //stiamo creando un URL temporaneo che rappresenta il file caricato. molto utile per anteprime nel browser. ma non per il salvataggio permanente delle immagini
      const fileUrl = URL.createObjectURL(file);
      setFormData((prevState) => ({
        ...prevState,
        [name]: file,
        profilePhotoName: fileName,
        profilePhotoPath: fileUrl,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubscriptionSelect = (selectedSubscription, cost) => {
    setFormData((prevState) => ({
      ...prevState,
      tipo_abbonamento: selectedSubscription, 
      costo: cost, 
    }));
  };

  const handleMonthlySubscription = () => {
    handleSubscriptionSelect("mensile", 50);
    nextStep();
  };

  const handleAnnualSubscription = () => {
    handleSubscriptionSelect("annuale", 500);
    nextStep();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    // se le password non corrispondono mandami l'errore
    if (formData.password !== formData.confermaPassword) {
      setErrorMessage("Le password non corrispondono.");
      return;
    }
    // Destruttura formData per escludere confermaPassword
    const { confermaPassword, ...formDataToSend } = formData;

    // creo l'oggetto che prenderà i dati del form
    const formDataFormatted  = new FormData();

    // lo trasformo in array
    Object.keys(formData).forEach((key) => {
      if (key === 'categoria_servizi') {
        formDataToSend[key].forEach(item => {
          formDataFormatted.append(`${key}[]`, item);
        });
      } else {
        formDataFormatted.append(key, formDataToSend[key]);
      }
    });
    // Log the FormData entries
    for (let pair of formDataFormatted.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    try {
      const response = await axios.post(
        'http://localhost:3000/api/registratazione/professionale',
        formDataFormatted,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setToken(response.data.token);
      navigate("/servizi");

    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 409) {
        setErrorMessage('Utente già esistente.');
      } else {
        setErrorMessage('Errore durante la registrazione.');
      }
    }


  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="relative min-h-screen flex w-full overflow-x-hidden justify-center bg-customBlue">
        <div className="containerr max-w-screen-xl mx-auto my-auto relative flex flex-col w-4/5 min-[1440px]:w-3/5 ">
          <form
            onSubmit={handleSubmit}
            className="mt-12 md:w-4/5 mx-auto rounded-3xl p-3"
            style={{ backgroundColor: "white" }}
          >
            {step === 1 && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center">
                  Step 1/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500 rounded-3xl w-1/12"></div>
                </div>
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                <div className="mt-12 text-3xl text-center">
                  Quale servizio offri?
                </div>
                <br />
                {formData.categoria_servizi.length >= 3 && (
                  <p className="text-red-500">
                    Puoi selezionare solo fino a tre servizi.
                  </p>
                )}
                <br />
                <div>
                  <fieldset>
                    <legend className="sr-only">Checkboxes</legend>
                    <div className="space-y-2">
                      {[
                        "Idraulico",
                        "Elettricista",
                        "Imbianchino",
                        "Giardiniere",
                        "Traslocatore",
                        "Pavimentista",
                        "Serramentista",
                        "Interior Designer",
                        "Falegname",
                        "Tuttofare",
                      ].map((service, index) => (
                        <label
                          key={index}
                          htmlFor={`Option${index + 1}`}
                          className={`flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 ${formData.categoria_servizi.includes(service) ? "bg-green-100" : ""
                            }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="size-4 rounded border-gray-300"
                              id={`Option${index + 1}`}
                              name="categoria"
                              value={service}
                              checked={formData.categoria_servizi.includes(service)}
                              onChange={handleChange}
                              disabled={
                                !formData.categoria_servizi.includes(service) &&
                                formData.categoria_servizi.length >= 3
                              }
                            />
                          </div>
                          <div>
                            <strong className="font-medium text-gray-900">
                              {service}
                            </strong>
                          </div>
                        </label>
                      ))}
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
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center">
                  Step 2/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500 rounded-3xl w-2/12"></div>
                </div>
                <div className="mt-12 text-3xl text-center">
                  Sei un'azienda o un libero professionista?
                </div>
                <div>
                  <div className="mt-12 items-center justify-center">
                    <label
                      htmlFor="liberoProfessionista"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="radio"
                          className="size-4 rounded border-gray-300"
                          id="liberoProfessionista"
                          name="tipo"
                          value="liberoProfessionista"
                          checked={formData.tipo === "liberoProfessionista"}
                          onChange={handleChange}
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
                      htmlFor="azienda"
                      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        &#8203;
                        <input
                          type="radio"
                          className="size-4 rounded border-gray-300"
                          id="azienda"
                          name="tipo"
                          value="azienda"
                          checked={formData.tipo === "azienda"}
                          onChange={handleChange}
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
                    disabled={!formData.tipo}
                  >
                    Avanti
                  </button>
                </div>
              </motion.div>
            )}
            {step === 3 && formData.tipo === "liberoProfessionista" && (
              <motion.div
                key={step} // Add this line
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center  ">
                  Step 3/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500  rounded-3xl w-3/12"></div>
                </div>
                <div className="mt-12 text-3xl  text-center">
                  Come ti chiami?
                  <p className="text-sm">
                    Il tuo nome apparirà sul tuo profilo e ai clienti a cui
                    invii i preventivi.
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

            {step === 3 && formData.tipo === "azienda" && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center">
                  Step 3/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500 rounded-3xl w-3/12"></div>
                </div>
                <div className="mt-12 text-3xl text-center">
                  Nome dell'azienda
                  <p className="text-sm">
                    Il nome dell'azienda sarà visualizzato sui tuoi profili e ai
                    clienti.
                  </p>
                </div>
                <div>
                  {/* Nome Azienda input field */}
                  <input
                    type="text"
                    placeholder="Nome Azienda"
                    name="nome_azienda"
                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                    style={{ backgroundColor: "white" }}
                    value={formData.nome_azienda}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-center mt-12">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                  >
                    Indietro
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-customGreen text-white font-bold py-2 px-4 rounded"
                  >
                    Avanti
                  </button>
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center">
                  Step 4/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500 rounded-3xl w-4/12"></div>
                </div>
                <div className="mt-12 text-3xl text-center">
                  Inserisci la tua Partita IVA e Codice Fiscale
                  <br />
                  <p className="text-sm">
                    Questi dati sono necessari per la registrazione.
                  </p>
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Partita IVA"
                    name="p_iva"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                    style={{ backgroundColor: "white" }}
                    value={formData.p_iva}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Codice Fiscale"
                    name="codiceFiscale"
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none"
                    style={{ backgroundColor: "white" }}
                    value={formData.codiceFiscale}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex justify-center mt-12">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                  >
                    Indietro
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-customGreen text-white font-bold py-2 px-4 rounded"
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
                <div className="text-base font-light text-center  ">
                  Step 5/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500  rounded-3xl w-5/12"></div>
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
                    value={formData.provincia}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  {/* città input field */}
                  <input
                    type="text"
                    placeholder="Città"
                    name="citta" // This should match your formData property
                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                    style={{ backgroundColor: "white" }}
                    value={formData.citta} // This correctly points to formData.name
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
            {step === 6 && (
              <motion.div
                key={step} // Add this line
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center  ">
                  Step 6/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500  rounded-3xl w-6/12"></div>
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
            {step === 7 && (
              <motion.div
                key={step} // Add this line
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center  ">
                  Step 7/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500  rounded-3xl w-7/12"></div>
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
                    value={formData.email}
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
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center">
                  Step 8/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500 rounded-3xl w-8/12"></div>
                </div>
                <div className="mt-12 text-3xl text-center">
                  Crea Password
                  <br />
                  <p className="text-sm">
                    È necessario creare una password per poter accedere al
                    proprio account la prossima volta.
                  </p>
                </div>

                <div className="relative">
                  {/* Password input field */}
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Inserisci Password"
                    name="password"
                    className="mt-4 w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none"
                    style={{ backgroundColor: "white" }}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {/* Icona per mostrare/nascondere la password */}
                  <div className="absolute inset-y-0 mt-4 right-0 flex items-center pr-3 cursor-pointer">
                    {showPassword ? (
                      <FaEyeSlash
                        className="h-5 w-5 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FaEye
                        className="h-5 w-5 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                </div>

                <div className="relative mt-4">
                  {/* Conferma Password input field */}
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Conferma Password"
                    name="confermaPassword"
                    className="w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none"
                    style={{ backgroundColor: "white" }}
                    value={formData.confermaPassword}
                    onChange={handleChange}
                  />
                  {/* Icona per mostrare/nascondere la password di conferma */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    {showConfirmPassword ? (
                      <FaEyeSlash
                        className="h-5 w-5 text-gray-400"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    ) : (
                      <FaEye
                        className="h-5 w-5 text-gray-400"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    )}
                  </div>
                </div>

                <div className="flex justify-center mt-12">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                  >
                    Indietro
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-customGreen text-white font-bold py-2 px-4 rounded"
                  >
                    Avanti
                  </button>
                </div>
              </motion.div>
            )}
            {step === 9 && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center">
                  Step 9/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500 rounded-3xl w-9/12"></div>
                </div>
                <div className="mt-12 text-3xl text-center">
                  Carica una foto di profilo
                  <br />
                  <p className="text-sm">
                    Una foto aiuta a rendere il tuo profilo più riconoscibile.
                  </p>
                </div>

                <div className="mt-4">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-400 hover:text-white">
                    <FaUpload className="h-8 w-8" />
                    <span className="mt-2 text-base leading-normal">
                    Scegli foto profilo
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      name="profilePhoto"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                  {isUploading && <span className="mt-2">Caricamento in corso...</span>}
                  {formData.profilePhotoName && (
                    <div className="mt-2 text-center">
                      <span className="text-sm text-gray-600">
                        {formData.profilePhotoName}
                      </span>
                    </div>
                  )}
                </div>

                {formData.profilePhotoPath && (
                  <div className="mt-4 text-center">
                    <img
                      src={formData.profilePhotoPath}
                      alt="Foto di profilo"
                      className="mt-4 mx-auto rounded-full h-24 w-24 object-cover"
                    />
                  </div>
                )}

                <div className="flex justify-center mt-12">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                  >
                    Indietro
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-customGreen text-white font-bold py-2 px-4 rounded"
                  >
                    Avanti
                  </button>
                </div>
              </motion.div>
            )}
            {step === 10 && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:w-3/5 mx-auto py-12"
              >
                <div className="text-base font-light text-center">
                  Step 10/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500 rounded-3xl w-10/12"></div>
                </div>
                <div className="mt-12 text-3xl text-center">
                  Parlaci di te
                  <br />
                  <p className="text-sm">
                    Spiega agli utenti perché dovrebbero scegliere te rispetto
                    agli altri.
                  </p>
                </div>

                <div>
                  <textarea
                    name="descrizioneProfessionista"
                    placeholder="Scrivi qui..."
                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                    style={{ backgroundColor: "white", minHeight: "150px" }}
                    value={formData.descrizioneProfessionista}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex justify-center mt-12">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                  >
                    Indietro
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-customGreen text-white font-bold py-2 px-4 rounded"
                  >
                    Avanti
                  </button>
                </div>
              </motion.div>
            )}
            {step === 11 && (
              <motion.div
                key={step} // Add this line
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="py-12"
              >
                <div className="text-base font-light text-center  ">
                  Step 11/12
                </div>
                <div
                  className="mt-4 w-full h-2"
                  style={{ backgroundColor: "#0F5DA6" }}
                >
                  <div className="h-full bg-green-500  rounded-3xl w-11/12"></div>
                </div>
                <div className="bg-white py-24 sm:py-16">
                  <div className="mx-auto  px-6 lg:px-8">
                    <div className="mx-auto  text-center">
                      <p className="mt-2 text-2xl font-bold tracking-tight text-customBlue sm:text-2xl font-lato">
                        SELEZIONA IL TUO ABBONAMENTO
                      </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-customGreen">
                      Scegli il canone che fa per te. Investi su te stesso ed
                      inizia a guadagnare.
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
                        >
                          {" "}
                          <button
                            onClick={() => handleMonthlySubscription()}
                          >
                            ACQUISTA ORA{" "}
                          </button>
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
                          {" "}
                          <button
                            onClick={() => handleAnnualSubscription()}
                          >
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
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
            {step === 12 && (
              <motion.div>
                <div className="font-[sans-serif] bg-gray-50 p-6 ">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-[#333] text-center">
                      Checkout
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-8 mt-12">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-[#333]">
                          Scegli il tuo metodo di pagamento
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 mt-6">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              className="w-5 h-5 cursor-pointer"
                              id="card"
                              name="payment"
                            />
                            <label
                              htmlFor="card"
                              className="ml-4 flex gap-4 cursor-pointer "
                            >
                              {/* visa */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7em"
                                height="7em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M1 4h22v2H1zm0 14h22v2H1zm18.622-3.086l-.174-.87h-1.949l-.31.863l-1.562.004c1.005-2.407 1.75-4.19 2.236-5.35c.127-.302.353-.456.685-.454c.254.002.669.002 1.245 0L21 14.912zm-1.684-2.062h1.256l-.47-2.18zM7.872 9.106l1.57.002l-2.427 5.806l-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605c-.077-.307-.23-.521-.526-.622c-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289zm3.727.002l-1.24 5.805l-1.495-.002l1.24-5.805zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27c-.59.009-.954.256-.954.493c0 .384.632.578 1.284.999c.743.48.84.91.832 1.378c-.011.971-.832 1.929-2.565 1.929c-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361c.515 0 .956-.207.96-.568c.002-.257-.155-.384-.732-.702c-.577-.317-1.386-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9"
                                />
                              </svg>
                            </label>
                          </div>
                          <div className="flex items-center ">
                            <input
                              type="radio"
                              className="w-5 h-5 cursor-pointer"
                              id="paypal"
                              name="payment"
                            />
                            <label
                              htmlFor="paypal"
                              className=" flex gap-2 cursor-pointer ml-4"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7em"
                                height="7em"
                                viewBox="0 0 256 302"
                              >
                                <path
                                  fill="#27346a"
                                  d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477c-1.556-.824-1.556-.824 0 0c3.671-23.407-.025-39.34-12.686-53.765"
                                />
                                <path
                                  fill="#27346a"
                                  d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182a89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74"
                                />
                                <path
                                  fill="#2790c3"
                                  d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477"
                                />
                                <path
                                  fill="#1f264f"
                                  d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49a109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149a11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477c-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865"
                                />
                              </svg>
                            </label>
                          </div>
                        </div>

                        <div className="grid gap-6">
                          <div className="grid sm:grid-cols-3 gap-6">
                            <input
                              type="number"
                              placeholder="N° carta"
                              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                            />
                            <input
                              type="number"
                              placeholder="Scadenza"
                              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                            />
                            <input
                              type="number"
                              placeholder="CVV"
                              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                            />
                          </div>
                          <div className="sm:col-span-2 grid sm:grid-cols-2 gap-6">
                            <input
                              type="text"
                              placeholder="Nome del titolare"
                              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                            />
                            <input
                              type="number"
                              placeholder="Codice Postale"
                              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                            />
                          </div>
                        </div>

                      </div>
                      <div className="lg:border-l lg:pl-8">
                        <h3 className="text-xl font-bold text-[#333]">
                          Carrello
                        </h3>
                        <ul className="text-[#333] mt-6 space-y-4">
                          <li className="flex flex-wrap gap-4 text-sm">
                            Abbonamento {formData.tipo_abbonamento}{" "}
                            <span className="ml-auto font-bold">{formData.costo}.00</span>
                          </li>
                          <li className="flex flex-wrap gap-4 text-base font-bold border-t pt-4">
                            Totale {" "} <span className="ml-auto">{formData.costo}.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center mt-12">
                      <button
                        type="button"
                        onClick={handleSubmit}

                        className="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"

                      >
                        Paga Ora
                      </button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="flex flex-wrap gap-4 mt-10">
                      <button
                        onClick={prevStep}
                        type="button"
                        className=" mr-4 bg-gray-400 text-white font-bold py-2 px-4 rounded"
                      >
                        Indietro
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}


export default Stepper;