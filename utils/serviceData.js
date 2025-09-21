import { Code, Bot, MessageCircle, Mic, LayoutDashboard, Smartphone, TrendingUp } from 'lucide-react';

// This is the central database for all your service information.
// You can expand this with detailed content for every service.

export const services = [
  {
    slug: 'custom-web-mobile-app-development',
    IconComponent: Code,
    title: 'Custom Web & Mobile App Development',
    shortDescription: 'From scratch to deployment, we build scalable and secure web applications, native Android apps, and custom software solutions tailored to your specific business requirements.',
    link: '/services/custom-web-mobile-app-development',
    color: 'text-blue-500',
    postImage: 'https://placehold.co/1200x600/1e293b/ffffff?text=Web+App+Development',
    seo: {
      title: 'Custom Web & Mobile App Development Services | CodesAI',
      description: 'Expert end-to-end development of scalable web applications, native Android apps, and custom software. Turn your vision into a high-performance digital solution.',
    },
    content: {
      headline: 'From Concept to Code: Building Your Digital Foundation',
      sections: [
        {
          title: 'What Business Problem We Solve',
          text: 'In today’s digital-first world, an off-the-shelf solution rarely fits perfectly. Businesses often struggle with software that is inefficient, not scalable, or disconnected from their other systems. This leads to wasted time, lost revenue, and a poor customer experience. We solve this by building custom applications from the ground up, designed specifically to address your unique operational challenges and business goals.'
        },
        {
          title: 'Our Process: A Blueprint for Success',
          text: 'Our development process is transparent, collaborative, and focused on delivering results. We handle everything from initial strategy and UI/UX design to backend engineering, rigorous testing, and final deployment. By managing the entire lifecycle, we ensure a seamless, high-quality product that is delivered on time and on budget.'
        },
        {
          title: 'The Business Impact',
          text: 'A custom application is more than just code; it’s a strategic business asset. Our solutions empower you to automate processes, improve customer engagement, and unlock new revenue streams. By investing in a platform built for your needs, you gain a significant competitive advantage in the market.'
        }
      ]
    }
  },
  {
    slug: 'ai-integration-workflow-automation',
    IconComponent: Bot,
    title: 'AI Integration & Workflow Automation',
    shortDescription: 'Leverage the power of Artificial Intelligence. We integrate custom AI models and intelligent automation to streamline workflows and cut operational costs.',
    link: '/services/ai-integration-workflow-automation',
    color: 'text-purple-500',
    postImage: 'https://placehold.co/1200x600/4f46e5/ffffff?text=AI+Integration',
    seo: {
      title: 'AI Integration & Workflow Automation | CodesAI',
      description: 'Unlock efficiency with our AI integration services. We automate your business processes with custom AI models to reduce costs and drive data-driven decisions.',
    },
    content: {
       headline: 'Infusing Intelligence into Your Operations',
       sections: [
        {
          title: 'What Business Problem We Solve',
          text: 'Repetitive, manual tasks drain your team’s productivity and are prone to human error. Many businesses have vast amounts of data but lack the tools to extract valuable insights. We solve this by integrating custom AI and machine learning models directly into your existing workflows, turning your data into an automated, intelligent asset.'
        },
        {
          title: 'Our Process: Strategic Implementation',
          text: 'We begin by identifying the key areas in your business that will benefit most from automation. Our team then designs and implements tailored AI solutions, whether it’s for data analysis, process automation, or predictive modeling. We ensure a smooth integration with your current systems for immediate impact.'
        },
        {
          title: 'The Business Impact',
          text: 'By automating workflows, you not only reduce operational costs but also free up your employees to focus on high-value, strategic tasks. Our AI solutions provide predictive insights that lead to better decision-making, improved customer personalization, and a significant competitive edge.'
        }
      ]
    }
  },
  {
    slug: 'business-whatsapp-bot-integration',
    IconComponent: MessageCircle,
    title: 'Business WhatsApp Bot Integration',
    shortDescription: 'Engage customers 24/7 with a custom WhatsApp Business API bot. We build intelligent conversational agents for automated support, sales, and marketing.',
    link: '/services/business-whatsapp-bot-integration',
    color: 'text-green-500',
    // ... add full content later
  },
  {
    slug: 'seo-digital-marketing-strategy',
    IconComponent: TrendingUp,
    title: 'SEO & Digital Marketing Strategy',
    shortDescription: 'Increase your online visibility and drive organic traffic with our data-driven SEO strategies, including on-page, off-page, and technical search engine optimization.',
    link: '/services/seo-digital-marketing-strategy',
    color: 'text-orange-500',
    // ... add full content later
  },
  {
    slug: 'ai-powered-live-voice-agents',
    IconComponent: Mic,
    title: 'AI-Powered Live Voice Agents',
    shortDescription: 'Upgrade your call center with advanced, human-like AI voice agents. Our solutions manage customer calls efficiently, improving service quality and team productivity.',
    link: '/services/ai-powered-live-voice-agents',
    color: 'text-red-500',
    // ... add full content later
  },
  {
    slug: 'custom-analytics-bi-dashboards',
    IconComponent: LayoutDashboard,
    title: 'Custom Analytics & BI Dashboards',
    shortDescription: 'Turn your complex data into a strategic asset. We build bespoke Business Intelligence (BI) dashboards that visualize key metrics and provide actionable insights for growth.',
    link: '/services/custom-analytics-bi-dashboards',
    color: 'text-yellow-500',
    // ... add full content later
  },
];

// A helper function to find a service by its slug
export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};
