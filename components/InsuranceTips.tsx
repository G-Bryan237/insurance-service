"use client";

import { Lightbulb, BookOpen, TrendingUp } from "lucide-react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function InsuranceTips() {
  const tips = [
    {
      title: "How to Choose the Right Coverage",
      summary: "Essential guide to selecting insurance coverage that fits your needs and budget",
      icon: BookOpen,
      readTime: "5 min read"
    },
    {
      title: "Maximizing Your Insurance Savings",
      summary: "Smart strategies to reduce premiums while maintaining comprehensive protection",
      icon: TrendingUp,
      readTime: "7 min read"
    },
    {
      title: "Understanding Policy Terms",
      summary: "Decode complex insurance jargon and understand what you're really buying",
      icon: Lightbulb,
      readTime: "6 min read"
    }
  ];

  return (
    <section id="insurance-tips" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
            <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
            <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
            <p className="text-blue-600 font-semibold text-sm lg:text-base">INSURANCE TIPS</p>
            <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
            <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
            <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
          </div>
          <Lightbulb className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-500 mx-auto mb-4 lg:mb-6" />
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Expert Insurance Tips
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and practical tips to help you navigate the world of insurance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <article 
                key={index} 
                className="group bg-gray-50 hover:bg-white p-6 lg:p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  <span className="text-xs lg:text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                    {tip.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                  {tip.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm lg:text-base transition-colors flex items-center gap-2 group">
                    Read More
                    <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-blue-50 p-6 lg:p-8 rounded-lg border-l-4 border-blue-600 max-w-2xl mx-auto">
            <h4 className="font-bold text-gray-900 mb-2 text-base lg:text-lg">
              Need Personalized Insurance Advice?
            </h4>
            <p className="text-gray-600 text-sm lg:text-base mb-4">
              Our experts are here to help you make informed decisions about your insurance needs.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
