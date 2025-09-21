'use client';

import { Sparkles, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext'; // We will add chat controls to our context

/**
 * A floating button to open and close the AI chat window.
 */
export default function FloatingChatButton() {
  const { isChatOpen, toggleChat } = useTheme();

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
      aria-label={isChatOpen ? "Close AI Chat" : "Open AI Chat"}
    >
      {isChatOpen ? <X size={32} /> : <Sparkles size={32} />}
    </button>
  );
}