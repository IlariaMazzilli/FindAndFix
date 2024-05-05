import React, { useState, useContext } from 'react';
import './myStyles.css'; // Importa il file CSS
import electricianImage from './images/elettricista.jpg';
import gardenerImage from './images/giardiniere.jpg';
import painterImage from './images/imbianchino.jpg';
import interiorDesignerImage from './images/interiorDesigner.jpg';
import floorerImage from './images/pavimentista.jpg';
import plumberImage from './images/plumber.jpg';
import locksmithImage from './images/serramentista.jpg';
import moverImage from './images/traslocatore.jpg';
import jumbotronImage from './images/jumbotronSfocato.png'; // Immagine del Jumbotron
import chatIcon from './images/logo.svg'; // Icona della chat
import closeIcon from './images/x.png'; // Assicurati di importare l'immagine che vuoi usare
import { DarkModeContext } from './DarkMode'; // Importa il contesto per la modalità scura


const MyComponent = () => {
    const { toggleDarkMode } = useContext(DarkModeContext); // Ottenere la funzione per attivare/disattivare la modalità scura


    const [isChatOpen, setChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  
    const openSidebar = () => {
      document.getElementById('sidebar').style.width = '250px';
      document.getElementById('overlay').style.display = 'block';
    };

  
    const closeSidebar = () => {
      document.getElementById('sidebar').style.width = '0';
      document.getElementById('overlay').style.display = 'none';
    };
  

    const toggleChatBox = () => {
      setChatOpen(!isChatOpen);
    };
  
    const handleSendMessage = async () => {
      if (userInput.trim() === '') {
        return;
      }
  
      const newMessage = {
        type: 'user',
        text: userInput.trim(),
      };
  
      setChatMessages([...chatMessages, newMessage]); 
      setUserInput(''); 
      setIsLoading(true);
  
      try {
        const response = await fetch('https://api.chatbot.com/v2/chats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer &{59EhGp2_83uMyEW6r4qvmNysdNrsEaOH}',
          },
          body: JSON.stringify({
            
                "timestamp": "2017-04-12T13:30:07.445Z",
                "status": {
                    "code": 200,
                    "type": "success"
                }
                       
          }),
        });
  
        const data = await response.json(); 
        const aiResponse = {
          type: 'ai',
          text: data.choices[0].message.content,
        };
  
        setChatMessages([...chatMessages, aiResponse]);
      } catch (error) {
        console.error("Errore nell'invio del messaggio:", error);
        const errorMessage = {
          type: 'ai',
          text: "C'è stato un problema con la richiesta. Riprova più tardi.",
        };
        setChatMessages([...chatMessages, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    };

  return (
        <div>
            
            {/* Pulsante per richiamare DarkMode */}
            <button className='dark'
                onClick={toggleDarkMode} // Richiama toggleDarkMode
                style={{ padding: '10px', position: 'fixed', top: '10px', left: '10px', }}
            >
                Attiva/Disattiva Modalità Scura
            </button>


      <div className="jumbotron">
        <img src={jumbotronImage} alt="Immagine del Jumbotron" style={{ width: '100%', height: '300px' }} />
        <button id="menuButton" className="button" onClick={openSidebar}>
          Apri Menu
        </button>
      </div>

      <div id="sidebar" className="sidebar">
      <button className="button" onClick={closeSidebar} aria-label="Chiudi" style={{
        backgroundColor: 'transparent', // Nessuno sfondo
        border: 'none',                // Nessun bordo
        padding: '0',                  // Rimuove padding extra
        cursor: 'pointer',             // Assicura che il cursore sia coerente con l'elemento cliccabile
      }}> {/* Attributo per l'accessibilità */}
            <img
                src={closeIcon} // Percorso dell'immagine
                alt="Chiudi"   // Testo alternativo per l'accessibilità
                style={{ width: '50px', height: '50px' }} // Dimensioni dell'immagine
            />
        </button>

        <a href="#section1" className="sidebar-link">Menu Item 1</a> {/* Link alla sezione 1 */}
      <a href="#section2" className="sidebar-link">Menu Item 2</a> {/* Link alla sezione 2 */}
      <a href="#section3" className="sidebar-link">Menu Item 3</a> {/* Link alla sezione 3 */}
      </div>

      <div id="overlay" className="overlay" onClick={closeSidebar} />

      <div className="container">
        {[
          { name: 'Elettricista', image: electricianImage },
          { name: 'Giardiniere', image: gardenerImage },
          { name: 'Imbianchino', image: painterImage },
          { name: 'Interior Designer', image: interiorDesignerImage },
          { name: 'Pavimentista', image: floorerImage },
          { name: 'Plumber', image: plumberImage },
          { name: 'Serramentista', image: locksmithImage },
          { name: 'Traslocatore', image: moverImage },
        ].map((profile, index) => (
          <div className="profile profile-default" key={index}>
            <div className="profile__image">
              <img src={profile.image} alt={`Immagine di ${profile.name}`} />
            </div>
            <div className="profile__info">
              <h3>{profile.name}</h3>
              <p className="profile__info__extra">Lorem Ipsum, è la nuova descrizione.</p>
            </div>
            <div className="profile__stats">
              <p className="profile__stats__title">Rating</p>
              <h5 className="profile__stats__info">Puppy</h5>
            </div>
            <div className="profile__stats">
              <p className="profile__stats__title">Pricing</p>
              <h5>900%</h5>
            </div>
            <div className="profile__cta">
              <a className="button">Contact!</a>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-icon" onClick={toggleChatBox} style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}>
        <img src={chatIcon} alt="Chat Icon" style={{ width: '40px', height: '40px' }} />
      </div>

      {isChatOpen && (
        <div
          className="chat-box"
          style={{ 
            position: 'fixed', 
            bottom: '100px', 
            right: '50px', 
            background: 'white', 
            borderRadius: '10px', 
            padding: '20px', 
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="chat-log" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {chatMessages.map((msg, idx) => (
              <p key={idx} style={{ textAlign: msg.type === 'user' ? 'right' : 'left' }}>
                {msg.text}
              </p>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              style={{ flex: 1, padding: '10px', borderRadius: '5px' }}
              placeholder="Scrivi qui..."
            />
            <button onClick={handleSendMessage} style={{ padding: '10px', marginLeft: '10px' }}>
              Invia
            </button>
            {isLoading && <span>Caricamento...</span>}
          </div>
        </div>
      )}
    </div>
  );

};
export default MyComponent;
