import React, { useState, useContext } from 'react';
import './myStyles.css'; // Importa il file CSS

import chatIcon from './images/logo.svg'; // Icona della chat
import ProfileList from './components/ProfileList';


const MyComponent = () => {


    const [isChatOpen, setChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  

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

     


      <div>
      
                <ProfileList />

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