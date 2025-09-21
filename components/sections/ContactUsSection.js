'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import ScrollAnimationWrapper from '../ui/ScrollAnimationWrapper';

export default function ContactUsSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      mobile: event.target.mobile.value,
      message: event.target.message.value,
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        event.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error('Email sending failed', data.error);
        alert('Failed to send email. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-us" className="bg-gradient-to-r from-white via-blue-200 to-blue-100 dark:bg-gray-900/50 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-black">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-black-300 max-w-2xl mx-auto mt-4">
            Got an idea? Need help automating repetitive tasks? Want to see how AI can amplify your growth?
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollAnimationWrapper className="space-y-8 lg:pl-12">
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg">
                <Mail className="w-6 h-6 text-red-500" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-black">Email Us</h3>
                <p className="text-gray-600 dark:text-black-400 mt-1">Our team is here to help. Drop us a line!</p>
                <a href="mailto:contact@codesai.com" className="text-blue-600 dark:text-blue-400 font-semibold mt-2 inline-block">contact@codesai.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-4 bg-green-100 dark:bg-green-900/50 rounded-lg">
                <Phone className="w-6 h-6 text-green-500" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-black">Call Us</h3>
                <p className="text-gray-600 dark:text-black-400 mt-1">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 font-semibold mt-2 inline-block">+1 (234) 567-890</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-4 bg-teal-100 dark:bg-teal-900/50 rounded-lg">
                <MessageSquare className="w-6 h-6 text-teal-500" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-black">WhatsApp</h3>
                <p className="text-gray-600 dark:text-black-400 mt-1">Chat with us directly for a quick response.</p>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold mt-2 inline-block">Start a Chat</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0 p-4 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-black">Visit Us</h3>
                <p className="text-gray-600 dark:text-black-400 mt-1">123 Innovation Drive, Tech City, 122001</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold mt-2 inline-block">Get Directions</a>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Contact Form */}
          <ScrollAnimationWrapper className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg" delay="animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg" />
              <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg" />
              <input type="tel" name="mobile" required placeholder="Mobile Number" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg" />
              <textarea name="message" rows="5" required placeholder="Message" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg" />

              <button type="submit" disabled={isLoading} className="w-full px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-6 flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/50 rounded-lg animate-fade-in-down">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                <p className="text-green-800 dark:text-green-300 font-medium">Query submitted. Our team will connect you shortly.</p>
              </div>
            )}
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
