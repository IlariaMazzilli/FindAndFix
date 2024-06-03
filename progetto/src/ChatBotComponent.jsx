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
            trigger: '11',
          },
          {
            id: '2',
            options: [
              { value: 2, label: 'Come posso pagare?', trigger: '4' },
              { value: 3, label: 'Come posso contattare il pro?', trigger: '5' },
              { value: 4, label: 'Quanto pago per usufruire del servizio come cliente?', trigger: '6' },
              { value: 5, label: 'Sono tutelato in caso di problemi con il professionista?', trigger: '7' },
              { value: 6, label: 'Posso pagare in contanti il professionista?', trigger: '8' },
            ],
          },
          {
            id: '3',
            message: 'Puoi contattarci dal lunedì al venerdì dalle 8:30 alle 18 alla nostra mail findandfix@info.com',
            trigger: '10'
          },
          {
            id: '4',
            message: 'Al momento del pagamento, potrai scegliere di pagare tramite carta di credito, Paypal o contanti. Qualunque metodo tu scelga, assicurati di conservare la ricevuta di pagamento.',
            trigger: '10',
          },
          {
            id: '5',
            message: 'Cliccando sul profilo di tuo interesse, una volta che si aprirà la pagina profilo, potrai cliccare sul pulsante Contatta.',
            trigger: '10',
          },
          {
            id: '6',
            message: 'Il servizio per il cliente è gratuito, se invece sei un professionista potrai scegliere tra i nostri piani di abbonamento.',
            trigger: '10',
          },
          {
            id: '7',
            message: 'Assolutamente si. Find&Fix assicura ai propri clienti la massima trasparenza e professionalità. Assicurati di conservare la ricevuta di pagamento. Se dovessero esserci problemi, sarà essenziale che tu ne sia in possesso.',
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
            trigger:'11',
          },
          {
            id: '11',
            options: [
              { value: 1, label: 'Si', trigger: '2' },
              { value: 2, label: 'Ho bisogno di assistenza', trigger: '3' },
              { value: 3, label: 'No', trigger: '12' }
            ]
          },
          {
            id: '12',
            message: 'Spero di esserti stato utile! Per qualsiasi problema non esitare a contattarci alla nostra mail di supporto findandfix@info.com'
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
