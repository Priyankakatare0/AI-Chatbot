import React from 'react'
import Message from './Message'
import '../App.css'

const ChatWindow = ({messages, loading}) => {
  return (
    <div className='messages'>
    {messages.map((msg, i) => (
      <Message key={i} role={msg.role} text={msg.text} />
    ))}
        {loading && <Message role="model" text="Thinking..."/>}
    </div>
  )
}

export default ChatWindow