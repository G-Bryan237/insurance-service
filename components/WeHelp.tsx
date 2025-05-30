"use client";

import {
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaChevronRight,
  FaChevronLeft,
  FaQuestionCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export function WeHelp() {
  const [progress, setProgress] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What types of insurance do you offer?",
      answer:
        "We offer comprehensive insurance solutions including life, health, auto, home, business, and travel insurance to meet all your protection needs.",
    },
    {
      id: 2,
      question: "How quickly can I get coverage?",
      answer:
        "Most policies can be activated within 24-48 hours after approval. Emergency coverage options are available for urgent situations.",
    },
    {
      id: 3,
      question: "Do you offer 24/7 customer support?",
      answer:
        "Yes, our dedicated customer support team is available 24/7 to assist you with claims, policy questions, and emergency situations.",
    },
    {
      id: 4,
      question: "Can I customize my insurance plan?",
      answer:
        "Absolutely! We work with you to create tailored insurance solutions that fit your specific needs and budget requirements.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(90);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="we-help" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
                <p className="text-blue-400 font-semibold text-sm lg:text-base">
                  WE ALWAYS HELP
                </p>
                <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
                <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
                <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
              </div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Let's work together for all life's moments
              </h2>
            </div>

            {/* Image and Description Side by Side */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-6 lg:mb-8">
              <div className="w-full sm:w-2/3 h-32 lg:h-40">
                <img
                  src="/help/img1.jpg"
                  alt="Insurance consultation"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full sm:w-1/3 flex items-start gap-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 border-2 border-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-500 text-xs lg:text-sm font-bold">
                    ?
                  </span>
                </div>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  Our experienced team provides personalized insurance solutions to
                  protect what matters most to you.
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 lg:mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-900 font-semibold text-sm lg:text-base">
                  Client Satisfaction Rate
                </span>
                <span className="text-blue-600 font-bold text-sm lg:text-base">
                  {progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 lg:h-3">
                <div
                  className="bg-blue-600 h-2 lg:h-3 rounded-full transition-all duration-2000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Feature List */}
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">
                  Fast and efficient claim processing
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm lg:text-base">
                  Competitive rates and flexible payment options
                </span>
              </li>
            </ul>
          </div>

          {/* Right Content - Simplified FAQ */}
          <div className="space-y-3 lg:space-y-4 mt-8 lg:mt-0">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                Common Questions
              </h3>
            </div>
            {faqs.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300"
                onMouseEnter={() => setActiveQuestion(faq.id)}
                onMouseLeave={() => setActiveQuestion(null)}
              >
                <div className="p-3 lg:p-4 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaQuestionCircle className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600" />
                      <h4 className="text-sm lg:text-base font-semibold text-gray-900 pr-2">
                        {faq.question}
                      </h4>
                    </div>
                    {activeQuestion === faq.id ? (
                      <FaMinus className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600 flex-shrink-0" />
                    ) : (
                      <FaPlus className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600 flex-shrink-0" />
                    )}
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeQuestion === faq.id
                        ? "max-h-32 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
