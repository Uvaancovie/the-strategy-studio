'use client';

import dynamic from "next/dynamic";
import discoveryAnimation from "../public/lottie/discovery.json";
import strategyAnimation from "../public/lottie/strategy.json";
import executionAnimation from "../public/lottie/execution.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const steps = [
  {
    title: "Step 1: Discovery",
    description: "We begin by understanding your business, challenges, and goals.",
    animation: discoveryAnimation,
  },
  {
    title: "Step 2: Strategy",
    description: "Develop a customized action plan tailored to your business's unique needs.",
    animation: strategyAnimation,
  },
  {
    title: "Step 3: Execution",
    description: "Implement and monitor the strategy to achieve results.",
    animation: executionAnimation,
  },
];

const ProcessSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-600 mb-10 text-center">How It Works</h2>
      <div className="relative flex flex-col space-y-16 md:space-y-24">
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-blue-500 z-0"></div>
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col md:flex-row md:items-center">
            <div className="flex-shrink-0 w-32 h-32 mx-auto md:ml-0 mb-6 md:mb-0">
              <Lottie animationData={step.animation} loop autoplay />
            </div>
            <div className="md:ml-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
