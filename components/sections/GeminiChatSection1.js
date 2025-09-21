'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/**
 * The Gemini Chat component, now as a redesigned floating window.
 */
export default function GeminiChatSection() {
  const { isChatOpen, toggleChat } = useTheme();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! How can I help you find the right IT solution for your business today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error('Failed to get a response from the server.');
      }

      const data = await response.json();
      const assistantMessage = { role: 'assistant', content: data.reply };
      setMessages(prevMessages => [...prevMessages, assistantMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage = { role: 'assistant', content: "I'm sorry, but I'm having trouble connecting right now. Please try again later." };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isChatOpen) {
    return null;
  }

  return (
    // Corrected: Uses new animation and positioning
    <div className="fixed bottom-24 z-50 w-[calc(100%-2rem)] left-4 md:left-auto md:right-6 md:w-full md:max-w-md animate-slide-in-up-fade">
      {/* Corrected: Increased height from 60vh to 70vh */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col h-[75vh]">
        {/* Corrected: Redesigned minimal header */}
        <div className="p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 rounded-t-2xl">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">AI Consultant</h3>
          </div>
          <button onClick={toggleChat} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="p-6 flex-grow overflow-y-auto space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
              )}
              <div className={`px-5 py-3 rounded-2xl max-w-sm ${msg.role === 'assistant' ? 'bg-gray-100 dark:bg-gray-700' : 'bg-blue-600 text-white'}`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
              {msg.role === 'user' && (
                <div className="flex-shrink-0 w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white"><Bot size={24} /></div>
              <div className="px-5 py-3 rounded-2xl bg-gray-100 dark:bg-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSendMessage} className="flex items-center gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 disabled:bg-gray-400 transition-all"
            >
              <Send size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
