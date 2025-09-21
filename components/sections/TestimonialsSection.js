'use client';

import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import { Star } from 'lucide-react';
import './Testimonial.css';
import Image from 'next/image'; // Import the Next.js Image component

/**
 * The Testimonials section component.
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working with NamoosX was a game-changer. Their AI integration streamlined our entire workflow, saving us countless hours and reducing operational costs.",
      name: 'Sarah L.',
      company: 'CEO of Innovate Inc., USA',
      avatar: 'https://placehold.co/100x100/4f46e5/ffffff?text=SL',
    },
    {
      quote: "The custom dashboard they built is phenomenal. We now have a clear, real-time view of our KPIs, empowering us to make smarter, data-driven decisions.",
      name: 'James Smith',
      company: 'Director, FinTech Solutions, UK',
      avatar: 'https://placehold.co/100x100/16a34a/ffffff?text=JS',
    },
    {
      quote: "Their team is not only technically proficient but also incredibly responsive. They truly felt like an extension of our own team throughout the entire project.",
      name: 'Priya Singh',
      company: 'Founder, E-Commerce Store, India',
      avatar: 'https://placehold.co/100x100/be123c/ffffff?text=PS',
    },
    {
      quote: "The WhatsApp bot they developed for us has revolutionized our customer support, providing instant answers and boosting satisfaction.",
      name: 'Liam Tremblay',
      company: 'Manager, Retail Group, Canada',
      avatar: 'https://placehold.co/100x100/f59e0b/ffffff?text=LT',
    },
    {
      quote: "From concept to deployment, the process was seamless. The quality of the final web application exceeded all our expectations.",
      name: 'Mark T.',
      company: 'Operations Head, Tech Solutions, USA',
      avatar: 'https://placehold.co/100x100/3b82f6/ffffff?text=MT',
    },
    {
      quote: "A truly professional and collaborative partner. Their attention to detail and commitment to our project's success was evident from day one.",
      name: 'Olivia Brown',
      company: 'Marketing Lead, Creative Agency, UK',
      avatar: 'https://placehold.co/100x100/8b5cf6/ffffff?text=OB',
    },
    {
        quote: "The live AI voice agent has transformed our call center operations. It handles queries with remarkable accuracy and a human-like touch.",
        name: 'David Miller',
        company: 'Customer Service VP, USA',
        avatar: 'https://placehold.co/100x100/ef4444/ffffff?text=DM',
    },
    {
        quote: "We needed a complex custom application, and they delivered flawlessly. The team's expertise in modern development is top-notch.",
        name: 'Aarav Sharma',
        company: 'CTO, HealthTech Startup, India',
        avatar: 'https://placehold.co/100x100/10b981/ffffff?text=AS',
    },
    {
        quote: "Their ability to integrate communication APIs into our existing systems was impressive, leading to a huge improvement in our notification process.",
        name: 'Emily C.',
        company: 'Founder of Connective Co., Canada',
        avatar: 'https://placehold.co/100x100/ec4899/ffffff?text=EC',
    },
    {
        quote: "An outstanding team that delivers results. Our new automated workflow has increased our team's productivity by over 40%.",
        name: 'Rohan Patel',
        company: 'Factory Manager, Manufacturing, India',
        avatar: 'https://placehold.co/100x100/f97316/ffffff?text=RP',
    },
  ];

  const TestimonialCard = ({ testimonial, ...props }) => (
    <div className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[30vw] pr-8" {...props}>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between">
        <div>
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
          </div>
          {/* Corrected: Replaced " with &quot; to fix the build error */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
        </div>
        <div className="flex items-center mt-auto">
          {/* Corrected: Replaced <img> with <Image> */}
          <Image src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} width={48} height={48} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="bg-gradient-to-r from-white via-blue-200 to-blue-100 dark:bg-gray-900/50 py-20 md:py-28">
      <ScrollAnimationWrapper className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-black-300 max-w-2xl mx-auto mt-4">
            We&apos;re proud to have partnered with incredible businesses.
          </p>
        </div>
      </ScrollAnimationWrapper>

      <div className="relative w-full overflow-hidden pb-4">
        <div className="flex animate-marquee hover:pause">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
          ))}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`second-${index}`} testimonial={testimonial} aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}
