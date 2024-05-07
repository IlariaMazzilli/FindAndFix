import React from 'react';
import ChatBot from 'react-simple-chatbot';

const ChatBotComponent = () => {
  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Ciao {previousValue}, come posso aiutarti?',
          trigger: '4',
        },
        {
          id: '4',
          options: [
            { value: 1, label: 'Come posso pagare?', trigger: '5' },
            { value: 2, label: 'Come contatto il pro?', trigger: '6' },
          ],
        },
        {
          id: '5',
          message: 'Potrai pagare in contanti.',
          trigger: '7',
        },
        {
          id: '6',
          message: 'Clicca sul pulsante contatta.',
          trigger: '7',
        },
        {
          id: '7',
          message: 'Posso fare altro?',
          trigger: '8',
        },
        {
          id: '8',
          options: [
            { value: 1, label: 'Sì', trigger: '9' },
            { value: 2, label: 'No', trigger: '9' },
          ],
        },
        {
          id: '9',
          message: 'Grazie!',
          end: true,
        },
      ]}
    />
  );
};

export default ChatBotComponent;
