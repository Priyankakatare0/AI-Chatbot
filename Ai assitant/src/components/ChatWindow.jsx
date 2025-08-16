import React, { useRef, useEffect } from 'react';
import Message from './Message';
import '../App.css';

const ChatWindow = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {

    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

      if (messagesEndRef.current.parentNode) {
        messagesEndRef.current.parentNode.scrollTop -= 80;
      }
    }
  }, [messages, loading]);

  return (
    <div className='messages' style={{ paddingBottom: '100px' }}>
      {messages.map((msg, i) => (
        <Message key={i} role={msg.role} text={msg.text} />
      ))}
      {loading && <Message role="model" text="Thinking..." />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindow;
