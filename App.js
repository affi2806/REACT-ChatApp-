// Import necessary React modules
import React, { useState, useEffect } from 'react';

// Chat component to display messages
const Chat = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

// Input component for sending messages
const Input = ({ sendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      sendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

// Main ChatApp component
const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <h1>React Chat App</h1>
      <Chat messages={messages} />
      <Input sendMessage={sendMessage} />
    </div>
  );
};

export default ChatApp;



