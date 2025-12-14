import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, Sparkles, Terminal } from 'lucide-react';
import { SectionId, ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';

const SUGGESTIONS = [
  "What is his leadership philosophy?",
  "Tell me about Warren Township HS.",
  "What awards has he won?",
  "Does he have experience with strategic planning?"
];

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "System Online. I am Dr. Woestman's AI Assistant. How can I help you learn about his educational leadership experience?", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const responseText = await geminiService.sendMessage(userMessage.text, history);
        
        const botMessage: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
        setMessages(prev => [...prev, botMessage]);
    } catch (error) {
        setMessages(prev => [...prev, { role: 'model', text: "Error connecting to mainframe.", timestamp: new Date() }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id={SectionId.CHAT} className="bg-black text-white py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        
        {/* Intro */}
        <div className="lg:col-span-1">
           <div className="border border-white/20 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase mb-8">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             Gemini 2.5 Active
           </div>
           <h2 className="font-display text-5xl font-bold uppercase mb-6 leading-none">
             Executive<br/>Briefing
           </h2>
           <p className="text-gray-400 mb-8 font-light">
             Access the knowledge base directly. Ask about certifications, district achievements, or speaking engagements.
           </p>
           
           <div className="flex flex-col gap-2">
             {SUGGESTIONS.map((suggestion, index) => (
               <button 
                 key={index}
                 onClick={() => setInputValue(suggestion)}
                 className="text-left text-sm font-mono text-gray-500 hover:text-white hover:bg-white/10 p-2 rounded transition-colors border-l-2 border-transparent hover:border-orange-500"
               >
                 > {suggestion}
               </button>
             ))}
           </div>
        </div>

        {/* Terminal Window */}
        <div className="lg:col-span-2 bg-[#111] border border-white/20 rounded-sm flex flex-col h-[600px] font-mono shadow-2xl">
          
          {/* Header */}
          <div className="p-3 border-b border-white/10 flex justify-between items-center bg-[#1a1a1a]">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Terminal size={14} />
              <span>bash -- dr-woestman-assistant</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`flex items-center gap-2 mb-1 text-xs uppercase tracking-wider ${msg.role === 'user' ? 'text-orange-500' : 'text-blue-400'}`}>
                  {msg.role === 'user' ? 'You' : 'System'}
                  <span className="text-gray-600">[{msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}]</span>
                </div>
                <div className={`max-w-[85%] p-4 border ${
                  msg.role === 'user' 
                    ? 'border-orange-500/50 bg-orange-500/10 text-orange-100 rounded-bl-xl rounded-tl-xl rounded-tr-xl' 
                    : 'border-white/20 bg-white/5 text-gray-200 rounded-br-xl rounded-tr-xl rounded-bl-xl'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-blue-400 animate-pulse">
                <Bot size={16} />
                <span className="text-xs">PROCESSING_REQUEST...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-[#1a1a1a]">
            <div className="flex items-center gap-2">
              <span className="text-green-500 animate-pulse">{'>'}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command..."
                className="w-full bg-transparent text-white focus:outline-none font-mono"
                autoComplete="off"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="text-gray-400 hover:text-white disabled:opacity-30"
              >
                <Send size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChat;