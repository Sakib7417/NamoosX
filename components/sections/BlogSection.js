'use client';

import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

/**
 * The Blogs section component.
 * It showcases the latest articles or posts from the company.
 */
export default function BlogsSection() {
  // Dummy data for blog posts. In a real application, this would come from a CMS.
  const blogPosts = [
    {
      image: '/images/ai_business.jpg',
      category: 'Artificial Intelligence',
      title: 'The Real-World Impact of AI Integration on Small Businesses',
      excerpt: 'Discover how leveraging AI is no longer just for large corporations. We break down the tangible benefits for small to medium-sized enterprises.',
      link: '#',
    },
    {
      image: '/images/development.jpeg',
      category: 'Web Development',
      title: '5 Web Development Trends to Watch in 2025',
      excerpt: 'From serverless architecture to the rise of next-gen frameworks, stay ahead of the curve with these key industry trends.',
      link: '#',
    },
    {
      image: '/images/automation.jpg',
      category: 'Automation',
      title: 'Automating Your Workflow: A Practical Guide to Boosting Efficiency',
      excerpt: 'Learn the first steps to identifying and automating repetitive tasks within your organization to free up valuable time and resources.',
      link: '#',
    },
  ];

  return (
    <section id="blogs" className="bg-gradient-to-r from-white via-blue-200 to-blue-100 dark:bg-gray-900/50 py-20 md:py-28 overflow-hidden">
      <ScrollAnimationWrapper className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black">From Our Blog</h2>
          <p className="text-lg text-gray-600 dark:text-black-300 max-w-2xl mx-auto mt-4">
            Stay informed with our latest articles, case studies, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a href={post.link} key={index} className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="overflow-hidden aspect-video">
                {/* Corrected: Added width and height props to the Image component */}
                <Image
                  src={post.image}
                  alt={`Blog post image for ${post.title}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
}
