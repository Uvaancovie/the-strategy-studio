'use client';

import Lottie from "lottie-react";

import discoveryAnimation from "../public/lottie/discovery.json";
import strategyAnimation from "../public/lottie/strategy.json";
import executionAnimation from "../public/lottie/execution.json";

const steps = [
  {
    title: "Step 1: Discovery",
    description:
      "We begin by understanding your business, challenges, and goals. Through in-depth consultations, we gather insights that shape the foundation of our strategy.",
    animation: discoveryAnimation,
  },
  {
    title: "Step 2: Strategy",
    description:
      "Develop a customized action plan tailored to your business's unique needs. This phase includes identifying key opportunities, prioritizing goals, and setting actionable milestones.",
    animation: strategyAnimation,
  },
  {
    title: "Step 3: Execution",
    description:
      "Put the plan into action with precision. We ensure seamless implementation and monitor progress to adapt to changing needs, driving measurable success.",
    animation: executionAnimation,
  },
];

const ProcessSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        How It Works
      </h2>

      {/* Timeline */}
      <div className="relative flex flex-col space-y-16 md:space-y-24">
        {/* Vertical Line - Hidden on Small Screens */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-500 z-0"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative z-10 flex flex-col md:flex-row md:items-center ${
              index % 2 === 0 ? "md:pl-20" : "md:pl-20"
            }`}
          >
            {/* Animation Section */}
            <div className="flex-shrink-0 w-32 h-32 mx-auto md:ml-0 mb-6 md:mb-0">
              <Lottie animationData={step.animation} loop autoplay />
            </div>

            {/* Step Details */}
            <div className="md:ml-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
