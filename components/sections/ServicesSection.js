'use client';
import React from 'react';
import {
  Code,
  Bot,
  MessageCircle,
  Mic,
  LayoutDashboard,
  TrendingUp,
  Smartphone,
  FileText,     
  BarChart3,      
  Image,         
  Cpu,       
  PhoneCall,    
  Workflow,     
  ArrowRight,  
} from "lucide-react";
// Import the stylesheet for the card.
import './ServiceCard.css'; 
// Import the animation wrapper
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

// The services array now includes icons, links, colors, and the new SEO service.
const services = [
  {
    IconComponent: Code,
    title: 'Custom Web & Mobile App Development',
    description:
      'From scratch to deployment, we build scalable and secure web applications, native Android apps, and custom software solutions tailored to your specific business requirements.',
    link: '#',
    color: 'text-blue-500',
  },
  {
    IconComponent: Bot,
    title: 'Conversational AI & Workflow Automation',
    description:
      'Build intelligent chatbots, AI receptionists, and automation systems that handle multilingual conversations, streamline workflows, and reduce operational costs.',
    link: '#',
    color: 'text-purple-500',
  },
  {
    IconComponent: MessageCircle,
    title: 'Business WhatsApp Bot Integration',
    description:
      'Engage customers 24/7 with a custom WhatsApp Business API bot. We build intelligent conversational agents for automated support, sales, and marketing.',
    link: '#',
    color: 'text-green-500',
  },
  {
    IconComponent: Mic,
    title: 'AI-Powered Voice & Call Automation',
    description:
      'Upgrade your call center with advanced, human-like AI voice agents, IVR, smart call routing, and real-time transcription to boost customer support efficiency.',
    link: '#',
    color: 'text-red-500',
  },
  {
    IconComponent: FileText,
    title: 'Document & Data Intelligence',
    description:
      'Automate document processing with OCR + NLP. Extract and classify data, process invoices/contracts, perform compliance checks, and generate smart summaries.',
    link: '#',
    color: 'text-yellow-500',
  },
  {
    IconComponent: LayoutDashboard,
    title: 'Custom Analytics & Predictive Dashboards',
    description:
      'Turn complex data into a strategic asset with BI dashboards, predictive insights, churn detection, sales forecasting, and recommendation engines.',
    link: '#',
    color: 'text-orange-500',
  },
  {
    IconComponent: Image,
    title: 'Computer Vision Solutions',
    description:
      'Image & video recognition, object detection, identity verification, and automated inspections for industries like retail, logistics, and security.',
    link: '#',
    color: 'text-pink-500',
  },
  // {
  //   IconComponent: Smartphone,
  //   title: 'Twilio & Multi-Channel API Integration',
  //   description:
  //     'Supercharge customer communication with Twilio, Plivo, and other APIs — enabling SMS, voice, and multi-channel messaging solutions.',
  //   link: '#',
  //   color: 'text-cyan-500',
  // },
  {
    IconComponent: Cpu,
    title: 'Custom AI Integration & System Design',
    description:
      'Integrate AI with CRMs, ERPs, or cloud platforms. Develop tailor-made AI models, deploy secure AI infrastructure, and consult on AI-driven strategies.',
    link: '#',
    color: 'text-indigo-500',
  },
  {
    IconComponent: TrendingUp,
    title: 'SEO & Digital Marketing Strategy',
    description:
      'Boost your online visibility and drive growth with data-driven SEO, content marketing, and digital campaigns optimized for higher ROI.',
    link: '#',
    color: 'text-teal-500',
  },
];


/**
 * A reusable card component that now includes the icon.
 */
function ServiceCard({ IconComponent, title, description, link, color }) {
  return (
    <a href={link} className="block group">
      <div className="new-service-card">
        <div className="card-content">
          <IconComponent className={`card-icon ${color}`} />
          <h3 className="card-header">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-footer">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
}

/**
 * The main component for the Services section.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-white via-blue-200 to-blue-100">
      <ScrollAnimationWrapper className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black">Our Strategic Solutions</h2>
          <p className="text-lg text-gray-600 dark:text-black-300 max-w-3xl mx-auto mt-4">
            We provide end-to-end AI solutions that become foundational to your business, not just add-ons. Here’s what we do:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}
