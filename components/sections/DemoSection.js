'use client';

import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import { ArrowRight } from 'lucide-react';

/**
 * The Demo section component.
 * It serves as a strong call-to-action for users to request a demo.
 */
export default function DemoSection() {
  return (
    <section id="demo" className="bg-gradient-to-r from-white via-blue-200 to-blue-100 dark:bg-gray-900 py-20 md:py-28 overflow-hidden">
      <ScrollAnimationWrapper className="container mx-auto px-4">
        <div className="relative rounded-2xl shadow-2xl p-12 md:p-16 text-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full z-0">
          <img
    src="/images/Team_work.jpg"
    alt="Team Work"
    className="w-full h-full object-cover rounded-2xl"
  />
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              See Our Solutions in Action
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Witness firsthand how our intelligent automation can revolutionize your business operations. Schedule a personalized demo with one of our specialists today.
            </p>
            <a
              href="#contact-us"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Request a Free Demo</span>
              <ArrowRight className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}
