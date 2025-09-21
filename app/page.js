"use client";

// Import the ServicesSection component
import ServicesSection from "../components/sections/ServicesSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import ContactUsSection from "../components/sections/ContactUsSection";
import DemoSection from "../components/sections/DemoSection";
import BlogsSection from "../components/sections/BlogSection";
import TeamSection from "../components/sections/TeamSection";
import GeminiChatSection from "../components/sections/GeminiChatSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";
/**
 * The main Home page component. This is the entry point of the application
 * and will be rendered inside the RootLayout.
 */
export default function Home() {
  return (
    // Use a React Fragment (<>) to wrap multiple sections.
    <>
      {/* === Home Section === */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Corrected: Image Background Layer */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <video 
      className="w-full h-full object-cover" 
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src="/videos/animation_poster.mp4" type="video/mp4" />
      {/* Fallback text */}
      Your browser does not support the video tag.
    </video>
          {/* A semi-transparent overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent animate-slide-in-up">
            <span className="block">Intelligent Automation,</span>
            <span className="block">Engineered for Growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            We architect and integrate bespoke AI solutions to streamline your workflows, amplify efficiency, and unlock data-driven decisions that propel your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#services" className="w-full sm:w-auto px-8 py-3 font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300">
              Explore Our Solutions
            </a>
            <a href="#demo" className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white/20 transition duration-300">
              Request a Demo
            </a>
          </div>
        </div>
      </section>

      {/* === Services Section === */}
      {/* This is where the new component is rendered. */}
      <ServicesSection />
      <AboutUsSection />
      <ContactUsSection />
      <WhyChooseSection />
      {/* <GeminiChatSection /> */}
      <DemoSection />
      <BlogsSection />
      {/* <TeamSection /> */}
      <TestimonialsSection />
    </>
  );
}
