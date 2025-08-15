import React, { useState } from 'react';
import './chatbotMsg.css';

const ChatbotMsg = () => {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <h1 className='heading'>Ai Chatbot Assistant</h1>
      {/* ...other chat messages/components can go here... */}
      <div className="input-container">
        <div className="input-wrapper">
          <input
            className='input'
            type="text"
            placeholder="write here!"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className='btn'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMsg;
