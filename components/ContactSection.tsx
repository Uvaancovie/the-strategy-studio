import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Get in Touch</h2>
        <p className="text-center text-gray-700 mb-16">
          Have questions? Reach out to us and let’s start building something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-xl" />
                <span className="text-gray-700">+27 123 456 789</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <span className="text-gray-700">info@thestrategystudio.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span className="text-gray-700">
                  Durban, KwaZulu-Natal, South Africa
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
