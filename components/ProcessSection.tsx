'use client'

import { FaSearch, FaDraftingCompass, FaTools } from 'react-icons/fa';

const steps = [
    {
      title: "Step 1: Discovery",
      description: "We begin by understanding your business and goals.",
      icon: <FaSearch className="text-5xl text-blue-500" />,
    },
    {
      title: "Step 2: Strategy",
      description: "Develop a customized action plan for success.",
      icon: <FaDraftingCompass className="text-5xl text-green-500" />,
    },
    {
      title: "Step 3: Execution",
      description: "Implement and monitor the strategy to achieve results.",
      icon: <FaTools className="text-5xl text-yellow-500" />,
    },
  ];
  
  const ProcessSection = () => (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  export default ProcessSection;
  