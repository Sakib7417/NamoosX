'use client';

import Image from 'next/image';
import './Testimonial.css';

export default function TrustedClientsSection() {
  const clients = [
    { logo: '/images/Dafnax.png' },
    { logo: '/images/Aviva.png' },
    { logo: '/images/Amway.png' },
    { logo: '/images/makemytrip.png' },
    { logo: '/images/jio.png' },
    { logo: '/images/adani.png' },
    { logo: '/images/zycus.png' },
    // { logo: '/images/Zepto.svg' },
  ];

  return (
    <section className="bg-gradient-to-r from-white via-blue-200 to-blue-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black mb-8">
          Trusted by 50+ Leading Enterprises
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Duplicate the content twice for smooth infinite scroll */}
          <div className="flex animate-marquee hover:pause">
            {[...clients, ...clients].map((company, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center w-32 mx-6">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
                {/* <span className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                  {company.name}
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
