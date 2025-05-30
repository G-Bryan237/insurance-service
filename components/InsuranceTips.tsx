"use client";

import { Lightbulb, BookOpen, TrendingUp } from "lucide-react";

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
    <section id="insurance-tips" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and practical tips to help you navigate the world of insurance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <article key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{tip.readTime}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Read More</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
