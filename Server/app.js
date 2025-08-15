
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let conversations = [];

app.post('/chat', async(req, res) => {
    const { message } = req.body;
    
    if(!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    conversations.push({role: "user", parts: [{text: message}] });

    if(conversations.length > 10) {
        conversations = conversations.slice(-10);
    }
    try { 
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    contents: conversations,
                }),
            }
        );

        const data = await response.json();
        
        if(!data.candidates || !data.candidates.length) {
            throw new Error("No response from Gemini API");
        }

        const aiReply = data.candidates[0].content.parts[0].text;

        conversations.push({ role: "model", parts: [{ text: aiReply }] });
        
        res.json({ reply: aiReply});
    }
    catch(err) {
        console.error("Error talking to Gemini API: " , err);
        res.status(500).json({ error: "Failed to get AI response"});
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});