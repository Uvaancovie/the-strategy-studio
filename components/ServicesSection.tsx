'use client';

import Player from "lottie-react";
import consultingAnimation from "../public/lottie/consulting.json";
import coachingAnimation from "../public/lottie/coaching.json";
import teamDevelopmentAnimation from "../public/lottie/team-development.json";

const ServicesSection = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description:
        "Transform your business with proven strategies designed to optimize operations and drive growth.",
      animation: consultingAnimation,
    },
    {
      title: "Executive Coaching",
      description:
        "Empower leaders to unlock their full potential through personalized coaching and leadership development.",
      animation: coachingAnimation,
    },
    {
      title: "Team Development",
      description:
        "Build high-performing teams, streamline operations, and enhance collaboration for sustainable success.",
      animation: teamDevelopmentAnimation,
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div className="flex justify-center items-center h-48">
                <Player
                  animationData={service.animation}
                  autoplay
                  loop
                  className="w-48 h-48"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
