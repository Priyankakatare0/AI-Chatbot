import { useState } from 'react'
// import './App.css'
import ChatbotMsg from './components/ChatbotMsg.jsx'
import { use } from 'react'
import ChatWindow from './components/ChatWindow.jsx';
import InputBox from './components/InputBox.jsx';
import axios from 'axios'

function App() {
    const [messages, setMessges] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async(text) => {
      if(!text.trim()) return;

      const userMessage = {role: "user", text};
      setMessges((prev) => [...prev, userMessage]);
      setLoading(true);

      try{
        const res = await axios.post("https://ai-chatbot-5jmo.onrender.com/chat", {
          message : text,
        });
        const botMessage = { role: "model", text: res.data.reply };
        setMessges((prev) => [...prev, botMessage]);
      } catch (err) {
        setMessges((prev) => [
          ...prev,
          { role: "model", text: "Error getting response" }
        ]);
      } finally {
        setLoading(false);
      }
    }
  return (
    <>
      <div className="chat-container">
        <h1 className='header'>AI Chatbot</h1>
        <ChatWindow messages={messages} loading={loading} />
        <InputBox onSend={sendMessage} />
      </div>
    </>
  )
}

export default App
