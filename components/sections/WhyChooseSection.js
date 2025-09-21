'use client';

import { Lightbulb, Users, ShieldCheck } from 'lucide-react';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

export default function WhyChooseSection() {
  const points = [
    {
      Icon: Lightbulb,
      title: 'Innovation at the Core',
      description:
        'We constantly explore new AI frontiers, ensuring your solutions are future-ready and ahead of the competition.',
      color: 'text-yellow-500',
      bg: 'bg-yellow-100 dark:bg-yellow-900/40',
    },
    {
      Icon: Users,
      title: 'Client-Centric Partnership',
      description:
        'Your goals drive our designs. We believe in transparent collaboration, delivering what you truly need—no fluff.',
      color: 'text-blue-500',
      bg: 'bg-blue-100 dark:bg-blue-900/40',
    },
    {
      Icon: ShieldCheck,
      title: 'Excellence Uncompromised',
      description:
        'From planning to deployment, we maintain strict quality standards. Security, usability, performance — all built in.',
      color: 'text-green-500',
      bg: 'bg-green-100 dark:bg-green-900/40',
    },
  ];

  return (
    <section id="why-choose-us" className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200  py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-black-300 max-w-2xl mx-auto mt-4">
            We don’t just deliver services, we build long-term value and future-proof solutions.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {points.map((point, index) => (
            <ScrollAnimationWrapper
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              delay={`animation-delay-${index * 200}`}
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${point.bg}`}>
                <point.Icon className={`w-7 h-7 ${point.color}`} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{point.description}</p>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
