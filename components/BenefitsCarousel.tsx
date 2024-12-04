'use client'

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

const benefits = [
  {
    title: "Boost Efficiency",
    description: "Enhance operational workflows by up to 50%.",
    icon: <FaRocket className="text-6xl text-blue-500" />,
  },
  {
    title: "Develop Leaders",
    description: "Empower confident, results-driven leadership.",
    icon: <FaUsers className="text-6xl text-green-500" />,
  },
  {
    title: "Drive Growth",
    description: "Leverage proven strategies for sustainable success.",
    icon: <FaChartLine className="text-6xl text-yellow-500" />,
  },
];

const BenefitsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? benefits.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === benefits.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-blue-600 mb-10">
          Why Choose Us?
        </h2>

        {/* Carousel */}
        <div className="relative flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 text-blue-500 hover:text-blue-700 p-2"
          >
            <FaArrowLeft size={24} />
          </button>

          {/* Carousel Item */}
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mx-4">
            <div className="flex flex-col items-center space-y-4">
              {/* Icon */}
              <div>{benefits[currentIndex].icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800">
                {benefits[currentIndex].title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{benefits[currentIndex].description}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 text-blue-500 hover:text-blue-700 p-2"
          >
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-6 flex justify-center space-x-2">
          {benefits.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCarousel;
