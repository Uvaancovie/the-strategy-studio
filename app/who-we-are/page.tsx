import React from "react";
import { FaBrain, FaUserTie, FaLightbulb, FaChartLine } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg md:text-xl">
            At The Strategy Studio, we believe coaching is both a science and an art. Our proven approach ensures success by combining both.
          </p>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Salona Singh</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Infographic 1 */}
          <div className="p-8 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <div className="text-blue-600 mb-6">
              <FaBrain className="text-6xl mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Science & Art</h3>
            <p className="text-lg">
              Combining analytical expertise with creative solutions for impactful coaching.
            </p>
          </div>

          {/* Infographic 2 */}
          <div className="p-8 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <div className="text-green-600 mb-6">
              <FaUserTie className="text-6xl mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Tailored Coaching</h3>
            <p className="text-lg">
              Personalized programs designed to align with individual and business needs.
            </p>
          </div>

          {/* Infographic 3 */}
          <div className="p-8 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <div className="text-yellow-600 mb-6">
              <FaLightbulb className="text-6xl mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Building Habits</h3>
            <p className="text-lg">
              Empowering individuals to form positive habits and achieve sustainable growth.
            </p>
          </div>

          {/* Infographic 4 */}
          <div className="p-8 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition">
            <div className="text-pink-600 mb-6">
              <FaChartLine className="text-6xl mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Strategic Leadership</h3>
            <p className="text-lg">
              Expertise in strategic management and business coaching to ensure lasting success.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white text-center py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Transform Your Potential Today</h2>
          <p className="text-lg mb-6">
            Let Salona’s expertise help you unlock your potential and drive meaningful change.
          </p>
          <button className="px-20 py-6 bg-yellow-500 hover:bg-yellow-600 rounded-md text-lg font-semibold">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default WhoWeAre;
