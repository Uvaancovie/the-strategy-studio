'use client';

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Lottie from "lottie-react";
import growthAnimation from "../public/lottie/boost.json";
import leadersAnimation from "../public/lottie/leaders.json";
import teamDevelopmentAnimation from "../public/lottie/growth.json";

const benefits = [
  {
    title: "Boost Efficiency",
    description: "Enhance operational workflows by up to 50%.",
    animation: growthAnimation,
  },
  {
    title: "Develop Leaders",
    description: "Empower confident, results-driven leadership.",
    animation: leadersAnimation,
  },
  {
    title: "Drive Growth",
    description: "Leverage proven strategies for sustainable success.",
    animation: teamDevelopmentAnimation,
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
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Why Choose Us?</h2>

        {/* Carousel */}
        <div className="relative flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 text-blue-500 hover:text-blue-700 p-4"
          >
            <FaArrowLeft size={36} />
          </button>

          {/* Carousel Item */}
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-12 mx-4">
            <div className="flex flex-col items-center space-y-8">
              {/* Animation */}
              <div className="w-80 h-80">
                <Lottie animationData={benefits[currentIndex].animation} loop autoplay />
              </div>
              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-800">
                {benefits[currentIndex].title}
              </h3>
              {/* Description */}
              <p className="text-lg text-gray-600">{benefits[currentIndex].description}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 text-blue-500 hover:text-blue-700 p-4"
          >
            <FaArrowRight size={36} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-8 flex justify-center space-x-4">
          {benefits.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full ${
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
