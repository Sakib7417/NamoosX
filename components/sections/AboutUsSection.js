'use client';

import { CheckCircle } from 'lucide-react';
// Import the animation wrapper using the robust path alias
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import Image from 'next/image';

/**
 * The About Us section component.
 * It provides information about the company's mission and values, now with a video background.
 */
export default function AboutUsSection() {
  const values = [
    {
      title: 'Innovation at the Core',
      description: 'We constantly push the boundaries of technology to deliver forward-thinking solutions.',
    },
    {
      title: 'Client-Centric Partnership',
      description: 'Your success is our success. We build lasting relationships based on trust and tangible results.',
    },
    {
      title: 'Uncompromising Quality',
      description: 'From initial concept to final deployment, we uphold the highest standards of excellence.',
    },
  ];

  return (
    <section id="about-us" className="bg-gradient-to-r from-white via-blue-200 to-blue-100 dark:bg-gray-900 py-20 md:py-28 overflow-hidden">
      {/* The entire section content is wrapped for the scroll animation */}
      <ScrollAnimationWrapper className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Column */}
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://placehold.co/800x900/1e293b/ffffff?text=Loading+Video..."
            >
              {/* The src points to the video in your public folder. */}
              <source src="/videos/Video_Generation_Digital_Architects.mov" type="video/mp4" />
            </video>
          </div>

          {/* Text Content Column */}
          <div className="text-gray-800 dark:text-gray-200">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-black">
              The Architects of Your Digital Future
            </h2>
            <p className="text-lg text-gray-600 dark:text-black-300 mb-8 leading-relaxed">
              We are a collective of strategists, engineers, and AI specialists dedicated to one singular mission: transforming complex business challenges into streamlined, intelligent solutions. don&apos;t just build software; we engineer growth engines that empower you to navigate the complexities of the digital landscape with confidence and precision.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-7 h-7 text-blue-500 flex-shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-black">{value.title}</h3>
                    <p className="text-gray-600 dark:text-black-400 mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}
