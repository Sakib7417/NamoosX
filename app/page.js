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
import AIActionSection from "../components/sections/AIActionSection";
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
          {/* <img
            src="/videos/animation_poster.gif"
            alt="Background Animation"
            className="w-[1200px] h-[700px] object-contain mx-auto"
          /> */}

          {/* A semi-transparent overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent animate-slide-in-up">
            <span className="block"> <span className="bg-gradient-to-r from-[#922ffc] to-[#347dff] bg-clip-text text-transparent">
              AI Agents,
            </span> That Deliver</span>
            <span className="block">Human-Like Customer</span>
            <span className="block">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            Conversational AI agents that understand, interact, and enhance customer experiences—just like human agents would. But infinitely scalable
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#services" className="w-full sm:w-auto px-8 py-3 font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300">
              Explore Our Solutions
            </a>
            <a href="#demo" className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white/20 transition duration-300">
              Request a Demo
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-40 animate-fade-in-delay-3">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'AI Solutions Deployed' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Services Section === */}
      {/* This is where the new component is rendered. */}
      <AIActionSection/>
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
