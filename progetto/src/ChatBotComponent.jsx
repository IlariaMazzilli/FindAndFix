import React, { Component, useState } from 'react'
import ChatBot from 'react-simple-chatbot';
import openIcon from './images/logoNoBg.svg'; 
import closeIcon from './images/logoNoBg.svg';
import chatbotIcon from './images/chatbotIcon.svg'
import { ThemeProvider } from 'styled-components';
import './chat.css';

const ChatBotComponent = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const theme = {
    background: 'white',
    fontFamily: 'Helvetica Neue',
    headerBgColor: "#0F5DA6",
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor:"#0F5DA6",
    botFontColor: '#fff',
    userBubbleColor:  "#66BC46",
    userFontColor: '#f5f8fb',
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        
      <img
      className='logowewe max-[1024px]:hidden'
        src={isChatbotOpen ? chatbotIcon : chatbotIcon}
        alt={isChatbotOpen ? 'Chiudi Chatbot' : 'Apri Chatbot'}
        onClick={toggleChatbot}
        style={{ cursor: 'pointer' }} // Imposta il cursore per suggerire che è cliccabile
      />

        {isChatbotOpen && (
      <ChatBot className={`bot ${isChatbotOpen ? 'open' : ''}`}
        steps={[
          {
            id: '1',
            message: 'Ciao! Posso aiutarti?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Posso parlare con un operatore?', trigger: '3' },
              { value: 2, label: 'Come posso pagare?', trigger: '4' },
              { value: 3, label: 'Come posso contattare il pro?', trigger: '5' },
              { value: 4, label: 'Quanto pago per usufruire del servizio come cliente?', trigger: '6' },
              { value: 5, label: 'Sono tutelato in caso di problemi con il professionista?', trigger: '7' },
              { value: 6, label: 'Posso pagare in contanti il professionista?', trigger: '8' },
              { value: 7, label: 'No.', trigger: '49' },

            ],
          },
          {
            id: '3',
            message: 'Siamo spiacenti! Come alternativa puoi contattarci alla mail findandfix@info.com.',
            trigger: '10'
          },
          {
            id: '4',
            message: 'Questa informazione non è disponibile.',
            trigger: '10',
          },
          {
            id: '5',
            message: 'Cliccando sul profilo di tuo interesse, una volta che si aprirà la pagina profilo, potrai cliccare sul pulsante Contatta.',
            trigger: '10',
          },
          {
            id: '6',
            message: 'Il servizio per il cliente è gratuito, la percentuale viene calcolata dalla paga che percepisce il professionista.',
            trigger: '10',
          },
          {
            id: '7',
            message: 'Assolutamente si. Find&Fix assicura ai propri clienti la massima trasparenza e professionalità.',
            trigger: '10',
          },
          {
            id:'8',
            message:'No. Per garantire la passima sicurezza sia per il cliente che per il professionista, è obbligatorio pagare tramite il sito.',
            trigger:'9',
          },
          {
            id:'9',
            message:'Qualsiasi altra forma di pagameto non sarà protetta dalla nostra garanzia.',
            trigger:'10',
          },
          {
            id: '10',
            message: 'Posso fare altro?',
            trigger:'2',
          },
         {
            id: '49',
            message: 'Per qualsiasi problema potrai contattarci dalle 9 alle 17 dal lunedì al venerdì tramite il form contatti.',
            end:true,
          },
        ]}
      />
    )}
    
  </ThemeProvider>
</div>


)};

export default ChatBotComponent;
