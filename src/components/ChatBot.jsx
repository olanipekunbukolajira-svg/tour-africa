import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import logo from '../assets/logo.png'
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello 👋 I'm Ashley, your Tour Africa assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [sessionId] = useState(() => `session-${Date.now()}`);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('https://somma345.app.n8n.cloud/webhook/e850cd1b-969c-454a-9a55-dabfb798e8d6/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatInput: input,
          sessionId: sessionId
        })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.output || data.message || "I'm here to help!" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again." }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          className="chat-fab"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
               <img src={logo} alt="Ashley" className="chat-avatar" />
              <div>
                <h4>Ashley</h4>
                <span className="chat-status">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chat-close">
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-header-info">
  <div className="chat-avatar-placeholder">🤖</div>
  <div>
    <h4>Ashley</h4>
    <span className="chat-status">Online</span>
  </div>
</div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
          </div>
          

          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;