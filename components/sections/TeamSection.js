'use client';

import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import Image from 'next/image'; // Import the Next.js Image component

/**
 * The Team section component.
 * It introduces the key members of the company.
 */
export default function TeamSection() {
  // Dummy data for team members.
  const teamMembers = [
    {
      image: 'https://placehold.co/400x400/1e293b/ffffff?text=CEO',
      name: 'Alex Johnson',
      designation: 'Founder & CEO',
    },
    {
      image: 'https://placehold.co/400x400/4f46e5/ffffff?text=CTO',
      name: 'Samantha Lee',
      designation: 'Chief Technology Officer',
    },
    {
      image: 'https://placehold.co/400x400/16a34a/ffffff?text=Lead+Dev',
      name: 'Michael Chen',
      designation: 'Lead AI Developer',
    },
    {
      image: 'https://placehold.co/400x400/be123c/ffffff?text=Project+Manager',
      name: 'Jessica Rodriguez',
      designation: 'Senior Project Manager',
    },
  ];

  return (
    <section id="team" className="bg-gradient-to-r from-white via-blue-200 to-blue-100 dark:bg-gray-900 py-20 md:py-28 overflow-hidden">
      <ScrollAnimationWrapper className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black">Meet Our Experts</h2>
          <p className="text-lg text-gray-600 dark:text-black-400 max-w-2xl mx-auto mt-4">
            The driving force behind our innovation and your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-105">
                {/* Corrected: Added width and height props to the Image component */}
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-black">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">{member.designation}</p>
            </div>
          ))}
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}
