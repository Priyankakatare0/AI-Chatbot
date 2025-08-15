import React, { useState } from 'react'
import '../App.css'

const InputBox = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trimEnd()) return;
        onSend(input);
        setInput("");
    };

    return (
        <div className='input-area'>
            <input
                type='text'
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    )
}

export default InputBox