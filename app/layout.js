// Import the global stylesheet.
import '../styles/globals.css';
// The 'next/font' import is removed to prevent build-time fetching.
// import { Inter } from 'next/font/google';
// Import the layout and section components.
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GeminiChatSection from '../components/sections/GeminiChatSection1'; 
import FloatingChatButton from '../components/ui/FloatingChatButton';
// Import the ThemeProvider to manage global state.
import { ThemeProvider } from '../context/ThemeContext';

/**
 * This is the root metadata for the site.
 */
export const metadata = {
  title: 'NamoosX - Intelligent Automation for Your Business',
  description: 'We integrate intelligent automation to streamline your workflows, reduce operational costs, and unlock data-driven decision-making.',
  keywords: 'AI integration, web development, app development, automation, WhatsApp bot, voice agent, business intelligence',
};

/**
 * A small script to prevent theme flashing on page load.
 */
const ThemeScript = () => {
  const script = `
    (function() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

/**
 * This is the RootLayout component for the entire application.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Added Google Fonts link to load the font directly in the browser */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* The ThemeProvider must wrap all components that use the theme or chat state. */}
        <ThemeProvider>
          <ThemeScript />
          <Header />
          <main>{children}</main>
          <Footer />
          <GeminiChatSection /> 
          <FloatingChatButton /> 
        </ThemeProvider>
      </body>
    </html>
  );
}
