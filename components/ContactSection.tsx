'use client';

import Lottie from "lottie-react";
import contactAnimation from "../public/lottie/contact.json";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16">
          We would love to hear from you! Reach out to discuss your goals and how we can help.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Lottie Animation */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Lottie animationData={contactAnimation} loop autoplay />
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="#"
            method="POST"
            className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
