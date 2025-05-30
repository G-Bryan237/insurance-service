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
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
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
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content - Title, Information & Features */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title Section */}
            <div>
              <div className="flex items-center mb-4">
                <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
                <p className="text-blue-400 font-semibold text-sm lg:text-base">TESTIMONIALS</p>
                <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
                <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
                <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
              </div>
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                What our happy customers are saying
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                Discover why thousands of customers trust us with their insurance needs and how we've helped protect what matters most to them.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">
                Why People Choose Us
              </h3>
              
              {/* Features in 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">Trusted professionals</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">Upfront pricing</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">24/7 support</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm lg:text-base">Fast claim processing</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 p-4 lg:p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">Ready to get started?</h4>
              <p className="text-gray-600 text-xs lg:text-sm">
                Contact us today for a free consultation and personalized insurance quote.
              </p>
            </div>
          </div>

          {/* Right Content - Modern Testimonial Cards */}
          <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-0">
            {/* Mobile: Single card view with navigation */}
            <div className="lg:hidden">
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-full h-40">
                {/* Background image */}
                <div 
                  className="absolute top-0 right-0 w-24 h-32 opacity-15 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/testimonials/test.png')",
                    transform: "rotate(10deg)",
                    transformOrigin: "top right"
                  }}
                ></div>
                
                {/* Card content with text on left, image on right */}
                <div className="flex h-full relative z-10">
                  <div className="w-32 h-full flex flex-col items-center justify-center p-3">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="relative">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-blue-100 overflow-hidden shadow-lg">
                        <img
                          src={testimonials[currentSlide].image}
                          alt={testimonials[currentSlide].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-3 lg:p-4 pb-8 lg:pb-10 flex flex-col justify-center relative">
                    <h3 className="text-xs lg:text-sm font-bold text-gray-900 mb-1">
                      {testimonials[currentSlide].name}
                    </h3>
                    
                    <div className="flex items-start gap-2">
                      <p className="text-gray-700 leading-relaxed text-xs flex-1">
                        "{testimonials[currentSlide].content.substring(0, 60)}..."
                      </p>
                      <Quote className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-blue-600 px-4 py-2 hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                  <p className="text-center text-white text-xs font-medium">
                    {testimonials[currentSlide].position}
                  </p>
                </div>
                
                <div className="absolute left-12 lg:left-16 top-[85px] transform -translate-y-1/2 -translate-x-1/2 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-6 lg:border-8 border-white shadow-lg pointer-events-none"></div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-center items-center mt-4 space-x-4">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop: All cards visible */}
            <div className="hidden lg:block space-y-6">
              {/* First Testimonial Card - Left aligned */}
              <div className="flex justify-start">
                <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-[420px] h-40">
                  {/* Background image */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-32 opacity-15 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/testimonials/test.png')",
                      transform: "rotate(10deg)",
                      transformOrigin: "top right"
                    }}
                  ></div>
                  
                  {/* Card content with text on left, image on right */}
                  <div className="flex h-full relative z-10">
                    {/* Left side - Profile Image with stars */}
                    <div className="w-32 h-full flex flex-col items-center justify-center p-3">
                      {/* Stars above image */}
                      <div className="flex space-x-1 mb-2">
                        {[...Array(testimonials[0].rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-100 overflow-hidden shadow-lg">
                          <img
                            src={testimonials[0].image}
                            alt={testimonials[0].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Text content with quote */}
                    <div className="flex-1 p-4 pb-10 flex flex-col justify-center relative">
                      <h3 className="text-sm font-bold text-gray-900 mb-1">
                        {testimonials[0].name}
                      </h3>
                      
                      <div className="flex items-start gap-2">
                        <p className="text-gray-700 leading-relaxed text-xs flex-1">
                          "{testimonials[0].content.substring(0, 80)}..."
                        </p>
                        {/* Quote icon at right of text */}
                        <Quote className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Blue footer with status spanning full width */}
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-600 px-4 py-2 hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    <p className="text-center text-white text-xs font-medium">
                      {testimonials[0].position}
                    </p>
                  </div>
                  
                  {/* White circle fitting exactly around the image */}
                  <div className="absolute left-16 top-[85px] transform -translate-y-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-8 border-white shadow-lg pointer-events-none"></div>
                </div>
              </div>

              {/* Second Testimonial Card - Right aligned */}
              <div className="flex justify-end">
                <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-[420px] h-40">
                  {/* Background image */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-32 opacity-15 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/testimonials/test.png')",
                      transform: "rotate(-10deg)",
                      transformOrigin: "top right"
                    }}
                  ></div>
                  
                  {/* Card content with text on left, image on right */}
                  <div className="flex h-full relative z-10">
                    {/* Left side - Profile Image with stars */}
                    <div className="w-32 h-full flex flex-col items-center justify-center p-3">
                      {/* Stars above image */}
                      <div className="flex space-x-1 mb-2">
                        {[...Array(testimonials[1].rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-100 overflow-hidden shadow-lg">
                          <img
                            src={testimonials[1].image}
                            alt={testimonials[1].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Text content with quote */}
                    <div className="flex-1 p-4 pb-10 flex flex-col justify-center relative">
                      <h3 className="text-sm font-bold text-gray-900 mb-1">
                        {testimonials[1].name}
                      </h3>
                      
                      <div className="flex items-start gap-2">
                        <p className="text-gray-700 leading-relaxed text-xs flex-1">
                          "{testimonials[1].content.substring(0, 80)}..."
                        </p>
                        {/* Quote icon at right of text */}
                        <Quote className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Blue footer with status spanning full width */}
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-600 px-4 py-2 hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    <p className="text-center text-white text-xs font-medium">
                      {testimonials[1].position}
                    </p>
                  </div>
                  
                  {/* White circle fitting exactly around the image */}
                  <div className="absolute left-16 top-[85px] transform -translate-y-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-8 border-white shadow-lg pointer-events-none"></div>
                </div>
              </div>

              {/* Third Testimonial Card - Left aligned */}
              <div className="flex justify-start">
                <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-[420px] h-40">
                  {/* Background image */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-32 opacity-15 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/testimonials/test.png')",
                      transform: "rotate(8deg)",
                      transformOrigin: "top right"
                    }}
                  ></div>
                  
                  {/* Card content with text on left, image on right */}
                  <div className="flex h-full relative z-10">
                    {/* Left side - Profile Image with stars */}
                    <div className="w-32 h-full flex flex-col items-center justify-center p-3">
                      {/* Stars above image */}
                      <div className="flex space-x-1 mb-2">
                        {[...Array(testimonials[2].rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-100 overflow-hidden shadow-lg">
                          <img
                            src={testimonials[2].image}
                            alt={testimonials[2].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Text content with quote */}
                    <div className="flex-1 p-4 pb-10 flex flex-col justify-center relative">
                      <h3 className="text-sm font-bold text-gray-900 mb-1">
                        {testimonials[2].name}
                      </h3>
                      
                      <div className="flex items-start gap-2">
                        <p className="text-gray-700 leading-relaxed text-xs flex-1">
                          "{testimonials[2].content.substring(0, 80)}..."
                        </p>
                        {/* Quote icon at right of text */}
                        <Quote className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Blue footer with status spanning full width */}
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-600 px-4 py-2 hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    <p className="text-center text-white text-xs font-medium">
                      {testimonials[2].position}
                    </p>
                  </div>
                  
                  {/* White circle fitting exactly around the image */}
                  <div className="absolute left-16 top-[85px] transform -translate-y-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-8 border-white shadow-lg pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
