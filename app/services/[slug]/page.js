import { getServiceBySlug, services } from '../../../utils/serviceData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// This function generates the SEO metadata for the page
export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service || !service.seo) {
    return { title: 'Service Not Found', description: '' };
  }
  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

// This function tells Next.js which pages to pre-build
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service || !service.content) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="mt-4">The service you are looking for does not exist.</p>
        <Link href="/" className="mt-8 inline-block text-blue-600">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header Section with Image */}
      <div className="relative h-96">
        <Image 
          src={service.postImage} 
          alt={service.title} 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="prose dark:prose-invert lg:prose-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{service.content.headline}</h2>
          {service.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{section.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
            <Link href="/#contact-us" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
        </div>
      </div>
    </div>
  );
}
