# 🤖 AI Chatbot

**AI Chatbot** is a full-stack web application powered by **Google Gemini API**.  
It allows users to chat with an AI assistant in real time. The project is built using the **MERN stack (Express, React, Node.js)** with seamless frontend-backend integration and deployment on **Vercel (frontend)** and **Render (backend)**.

---

## 🚀 Tech Stack  

### 🔹 Frontend  
- **React.js (Vite)**  
- **Tailwind CSS**  
- **Axios**  
- **React Hooks & Components**  

### 🔹 Backend  
- **Node.js**  
- **Express.js**  
- **CORS** for cross-origin requests  
- **dotenv** for environment variables  
- **Google Gemini API integration**  

### 🔹 Deployment  
- **Frontend → Vercel**  
- **Backend → Render**  

---

## 🎯 Features  

### 🖥️ Frontend  
- **Clean and responsive chat interface**  
- **Chat window with AI and user messages**  
- **Input box with real-time message sending**  
- **Loading indicator while waiting for AI response**  
- **Hosted on Vercel for fast delivery**  

### 🛠️ Backend API  
- **Express server with REST API endpoint:**  
  - `POST /chat` → sends user message to Gemini API and returns AI response  
- **CORS enabled** for local and production origins  
- **Keeps recent conversation context** (last 10 messages)  
- **Error handling** for failed API calls  
- **Runs on Render Web Service**  

---

## 📦 Data Flow  

1. **User enters a message** → Sent to backend  
2. **Backend forwards request** to Google Gemini API  
3. **Gemini processes and returns AI reply**  
4. **Response displayed instantly** in frontend chat window  

---

## 🌐 Live Demo  

- 🔗 **Frontend**: [ai-chatbot.vercel.app](https://ai-chatbot.vercel.app)  
- 🔗 **Backend**: [ai-chatbot.onrender.com](https://ai-chatbot.onrender.com)  

---

## 🧪 Features Roadmap  

- ✅ **Real-time AI chat with Gemini API**  
- ✅ **Conversation history (last 10 messages)**  
- 🚧 **Authentication & user sessions**  
- 🚧 **AI personality customization**  
