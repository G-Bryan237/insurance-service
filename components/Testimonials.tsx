"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Business Owner",
      content: "Outstanding service! They helped me find the perfect insurance coverage for my business. The team was professional and made the process so easy.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b814?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Family Father",
      content: "Great experience with their life insurance policies. Very competitive rates and excellent customer support. Highly recommend their services.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Healthcare Professional",
      content: "Professional and reliable insurance company. They provided exactly what I needed for my medical practice. Fast claim processing too!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  const features = [
    "We hire professionals you can trust",
    "We promise to provide upfront pricing", 
    "We promise to respect your time",
    "24/7 customer support available",
    "Fast claim processing guarantee"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Title, Information & Features */}
          <div className="space-y-8">
            {/* Title Section */}
            <div>
              <div className="flex items-center mb-4">
                <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
                <p className="text-blue-400 font-semibold">TESTIMONIALS</p>
                <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
                <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
                <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What our happy customers are saying
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Discover why thousands of customers trust us with their insurance needs and how we've helped protect what matters most to them.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why People Choose Us
              </h3>
              
              {/* Features in 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Trusted professionals</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Upfront pricing</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">24/7 support</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Fast claim processing</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-gray-900 mb-2">Ready to get started?</h4>
              <p className="text-gray-600 text-sm">
                Contact us today for a free consultation and personalized insurance quote.
              </p>
            </div>
          </div>

          {/* Right Content - Modern Testimonial Cards */}
          <div className="space-y-6">
            {/* First Testimonial Card */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Abstract background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                  <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.3"/>
                  <circle cx="70" cy="30" r="15" fill="currentColor" opacity="0.5"/>
                  <circle cx="30" cy="70" r="20" fill="currentColor" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Card content */}
              <div className="p-6 pb-20">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {testimonials[0].name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {testimonials[0].position}
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonials[0].content}"
                </p>
              </div>
              
              {/* Blue footer with role */}
              <div className="bg-blue-600 px-6 py-3">
                <p className="text-white text-xs font-medium">
                  {testimonials[0].position}
                </p>
              </div>
              
              {/* Profile photo overlapping bottom right */}
              <div className="absolute -bottom-6 -right-6">
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Second Testimonial Card */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Abstract background pattern */}
              <div className="absolute top-0 left-0 w-28 h-28 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
                  <rect x="20" y="20" width="25" height="25" fill="currentColor" opacity="0.4" rx="5"/>
                  <rect x="55" y="35" width="20" height="20" fill="currentColor" opacity="0.6" rx="3"/>
                  <rect x="35" y="55" width="30" height="15" fill="currentColor" opacity="0.3" rx="7"/>
                </svg>
              </div>
              
              {/* Card content */}
              <div className="p-6 pb-20">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[1].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {testimonials[1].name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {testimonials[1].position}
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonials[1].content}"
                </p>
              </div>
              
              {/* Blue footer with role */}
              <div className="bg-blue-600 px-6 py-3">
                <p className="text-white text-xs font-medium">
                  {testimonials[1].position}
                </p>
              </div>
              
              {/* Profile photo overlapping bottom right */}
              <div className="absolute -bottom-6 -right-6">
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Third Testimonial Card */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Abstract background pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-purple-600">
                  <polygon points="50,10 90,90 10,90" fill="currentColor" opacity="0.4"/>
                  <polygon points="30,30 60,30 45,60" fill="currentColor" opacity="0.6"/>
                </svg>
              </div>
              
              {/* Card content */}
              <div className="p-6 pb-20">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[2].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {testimonials[2].name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {testimonials[2].position}
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonials[2].content}"
                </p>
              </div>
              
              {/* Blue footer with role */}
              <div className="bg-blue-600 px-6 py-3">
                <p className="text-white text-xs font-medium">
                  {testimonials[2].position}
                </p>
              </div>
              
              {/* Profile photo overlapping bottom right */}
              <div className="absolute -bottom-6 -right-6">
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img
                    src={testimonials[2].image}
                    alt={testimonials[2].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
