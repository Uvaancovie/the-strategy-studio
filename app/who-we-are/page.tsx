import Image from "next/image";
import React from "react";


const WhoWeAre = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg md:text-xl">
            We believe coaching is both a science and an art. Our proven approach ensures success by combining both.
          </p>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Unique Approach</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Infographic 1 */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/images/science-art.png"
              alt="Science and Art"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Science & Art</h3>
            <p>
              We combine the principles of science and the creativity of art to deliver impactful coaching outcomes.
            </p>
          </div>

          {/* Infographic 2 */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/images/personalized.png"
              alt="Personalized Coaching"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Personalized Coaching</h3>
            <p>
              We tailor our coaching programs to fit individual needs, ensuring relevance and effectiveness.
            </p>
          </div>

          {/* Infographic 3 */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/images/positive-habits.png"
              alt="Positive Habits"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Positive Habits</h3>
            <p>
              Helping you form new positive behaviors and thinking patterns to achieve your goals.
            </p>
          </div>

          {/* Infographic 4 */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <Image
              src="/images/strategic-management.png"
              alt="Strategic Focus"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Strategic Focus</h3>
            <p>
              Our expertise lies in strategic management, executive coaching, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white text-center py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Transform Your Potential Today</h2>
          <p className="text-lg mb-6">
            Let us help you unlock your potential and drive meaningful change.
          </p>
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-md text-lg font-semibold">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default WhoWeAre;
