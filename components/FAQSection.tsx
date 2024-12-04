'use client'

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across industries, including finance, tech, and retail.",
  },
  {
    question: "How is your coaching program structured?",
    answer: "Our coaching is personalized and tailored to meet your specific needs.",
  },
  {
    question: "What makes The Strategy Studio unique?",
    answer:
      "Our unique blend of proven strategies and personalized coaching delivers measurable results.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-800 font-bold bg-white rounded-t-lg focus:outline-none"
              >
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div
                  className="px-6 py-4 text-gray-600 bg-gray-50 border-t border-gray-300"
                  style={{
                    animation: "fadeIn 0.3s ease-in-out",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
