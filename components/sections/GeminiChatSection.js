'use client';

import { useState, useRef, useEffect } from 'react';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import { Bot, Send, User } from 'lucide-react';

/**
 * The Gemini Chat section component.
 * Provides an interactive chat interface for users to get service recommendations.
 */
export default function GeminiChatSection() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! How can I help you find the right IT solution for your business today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const isInitialMount = useRef(true); // Ref to track the first render

  const scrollToBottom = () => {
    // Corrected: Added block: 'nearest' to prevent the whole page from scrolling.
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  // This useEffect hook is responsible for scrolling the chat.
  // The isInitialMount check prevents it from running on the first page load.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
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

  return (
    <section id="gemini-ai" className="bg-slate-50 dark:bg-gray-900/50 py-20 md:py-28 overflow-hidden">
      <ScrollAnimationWrapper className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Need Help Choosing?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Describe your project or business challenge, and our AI consultant will recommend the best services for you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
          <div className="p-6 h-[499px] overflow-y-auto space-y-6">
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
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
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
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSendMessage} className="flex items-center gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., 'I need a new website for my e-commerce store...'"
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
      </ScrollAnimationWrapper>
    </section>
  );
}
