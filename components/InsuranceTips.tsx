"use client";

import { Lightbulb, BookOpen, TrendingUp } from "lucide-react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function InsuranceTips() {
  const tips = [
    {
      title: "How to Choose the Right Coverage",
      summary: "Essential guide to selecting insurance coverage that fits your needs and budget",
      icon: BookOpen
    },
    {
      title: "Maximizing Your Insurance Savings",
      summary: "Smart strategies to reduce premiums while maintaining comprehensive protection",
      icon: TrendingUp
    },
    {
      title: "Understanding Policy Terms",
      summary: "Decode complex insurance jargon and understand what you're really buying",
      icon: Lightbulb
    }
  ];

  return (
    <section id="insurance-tips" className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center mb-3">
            <FaChevronRight className="w-2.5 h-2.5 text-blue-300 mr-0.5" />
            <FaChevronRight className="w-2.5 h-2.5 text-blue-400 mr-0.5" />
            <FaChevronRight className="w-2.5 h-2.5 text-blue-600 mr-1" />
            <p className="text-blue-600 font-semibold text-xs lg:text-sm">INSURANCE TIPS</p>
            <FaChevronLeft className="w-2.5 h-2.5 text-blue-600 ml-1" />
            <FaChevronLeft className="w-2.5 h-2.5 text-blue-400 ml-0.5" />
            <FaChevronLeft className="w-2.5 h-2.5 text-blue-300 ml-0.5" />
          </div>
          <Lightbulb className="w-10 h-10 lg:w-12 lg:h-12 text-yellow-500 mx-auto mb-3 lg:mb-4" />
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
            Expert Insurance Tips
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice and practical tips to help you navigate the world of insurance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <article 
                key={index} 
                className="group bg-gray-50 hover:bg-white p-5 lg:p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100"
              >
                <div className="flex items-center mb-3">
                  <IconComponent className="w-8 h-8 lg:w-9 lg:h-9 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {tip.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors flex items-center gap-1.5 group">
                    Read More
                    <FaChevronRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 lg:mt-10">
          <div className="bg-blue-50 p-5 lg:p-6 rounded-lg border-l-4 border-blue-600 max-w-xl mx-auto">
            <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
              Need Personalized Insurance Advice?
            </h4>
            <p className="text-gray-600 text-xs lg:text-sm mb-3">
              Our experts are here to help you make informed decisions about your insurance needs.
            </p>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
              Contact an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
