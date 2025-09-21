'use client';

import { useState, useEffect } from "react";
import {
  X,
  Menu,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "Services",
    "About Us",
    "Demo",
    "Blogs",
    "Contact Us",
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home">
              <Image
                src="/images/logo.png"
                alt="NamoosX logo"
                width={220}
                height={50}
                priority
              />
            </a>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* <a
              href="#gemini-ai"
              className="hidden sm:flex items-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80 transition-opacity duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
              Ask AI
            </a> */}
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Connect
              </button>
              {isContactOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-down">
                  <a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <MessageSquare className="w-5 h-5 mr-3 text-green-500" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:your-email@example.com"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Mail className="w-5 h-5 mr-3 text-red-500" />
                    Mail
                  </a>
                  <a
                    href="tel:your-number"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Phone className="w-5 h-5 mr-3 text-blue-500" />
                    Phone
                  </a>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-7 w-7" />
                ) : (
                  <Menu className="block h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-fade-in-down" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                {link}
              </a>
            ))}
            {/* <a
              href="#gemini-ai"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
              Ask AI
            </a> */}
          </div>
        </div>
      )}
    </header>
  );
}
