"use client";

import { useState } from "react";
import { Home, Car, Heart, Building } from "lucide-react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function Quote() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { icon: Home, label: "Home insurance" },
    { icon: Car, label: "Vehicles insurance" },
    { icon: Heart, label: "Life insurance" },
    { icon: Building, label: "Business insurance" }
  ];

  return (
    <section className="py-16 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="w-full relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
              <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
              <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
              <p className="text-blue-600 font-semibold">FREE QUOTE</p>
              <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
              <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
              <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Get an insurance quote to get started!
            </h2>
            <p className="text-gray-600 mb-6">
              Quick and easy process to protect what matters most.
            </p>
          </div>

          {/* Mobile Image */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/quotes/img1.jpg" 
                alt="Insurance Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Insurance Types */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 text-sm ${
                    activeTab === index
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <tab.icon className={`w-6 h-6 mb-2 ${activeTab === index ? 'text-blue-500' : 'text-gray-600'}`} />
                  <span className={`font-medium text-center ${activeTab === index ? 'text-blue-500' : 'text-gray-600'}`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Quote Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
              />

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Limits of Balance: $<span id="mobile-amount-display">25,000</span>
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="2500"
                  defaultValue="25000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  onChange={(e) => {
                    const display = document.getElementById('mobile-amount-display');
                    if (display) display.textContent = parseInt(e.target.value).toLocaleString();
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$5,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative h-[600px]">
          {/* Left Blue Cylinder extending across */}
          <div className="absolute -left-16 top-0 w-2/5 h-full bg-blue-600 rounded-r-full flex items-center justify-end pr-4 z-10">
            {/* Decorative lines for blue section */}
            <div className="absolute left-8 top-1/4 w-1 h-1/2 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute left-12 top-1/3 w-0.5 h-1/3 bg-blue-300 rounded-full opacity-40"></div>
            <div className="absolute left-16 top-1/5 w-1.5 h-3/5 bg-blue-500 rounded-full opacity-50"></div>
            <div className="absolute left-20 top-1/6 w-0.5 h-2/3 bg-blue-400 rounded-full opacity-30"></div>
            
            {/* Enhanced circular image container with SVG styling */}
            <div className="relative w-96 h-96">
              {/* Decorative SVG background */}
              <svg
                viewBox="0 0 384 384"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="192" cy="192" r="180" stroke="#ffffff" strokeWidth="10" fill="none" opacity="0.8" />
                <path d="M24,192 A168,168 0 0,1 192,24" stroke="#e0f2fe" strokeWidth="8" fill="none" opacity="0.6" />
                <path d="M360,192 A168,168 0 0,0 192,360" stroke="#bae6fd" strokeWidth="8" fill="none" opacity="0.6" />
                <circle cx="24" cy="192" r="5" fill="#ffffff" opacity="0.8" />
                <circle cx="360" cy="192" r="5" fill="#ffffff" opacity="0.8" />
              </svg>

              {/* Circular Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/quotes/img1.jpg" 
                  alt="Insurance Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right White Cylinder starting from middle */}
          <div className="absolute -right-16 top-0 w-4/5 h-full bg-white rounded-l-full flex items-center justify-end pr-24 pl-56 shadow-lg z-5">
            <div className="w-full max-w-4xl flex gap-12">
              {/* Left side - Header Information and Insurance Types */}
              <div className="w-1/2">
                {/* Header Information */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
                    <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
                    <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
                    <p className="text-blue-600 font-semibold">FREE QUOTE</p>
                    <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
                    <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
                    <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                    Get an insurance quote to get started!
                  </h2>
                  <p className="text-gray-600">
                    Quick and easy process to protect what matters most.
                  </p>
                </div>

                {/* Insurance Type Tabs - Vertical */}
                <div className="space-y-3">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`flex items-center justify-between w-full p-4 rounded-lg border-2 transition-all duration-300 text-sm ${
                        activeTab === index
                          ? 'border-blue-500 bg-blue-50 text-blue-900'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <tab.icon className={`w-5 h-5 ${activeTab === index ? 'text-blue-500' : 'text-gray-600'}`} />
                        <span className={`font-medium ${activeTab === index ? 'text-blue-500' : 'text-gray-600'}`}>
                          {tab.label}
                        </span>
                      </div>
                      {activeTab === index && (
                        <div className="flex items-center space-x-0.5 mr-2">
                          <FaChevronRight className="w-2 h-2 text-blue-400" />
                          <FaChevronRight className="w-3 h-3 text-blue-500" />
                          <FaChevronRight className="w-4 h-4 text-blue-600" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right side - Quote Form */}
              <div className="w-1/2">
                {/* Add even more top margin to bring form down */}
                <div className="mt-46">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                      />
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                    />

                    {/* Limits of Balance - Range Slider */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm">
                        Limits of Balance: $<span id="amount-display">25,000</span>
                      </label>
                      <input
                        type="range"
                        min="5000"
                        max="100000"
                        step="2500"
                        defaultValue="25000"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        onChange={(e) => {
                          const display = document.getElementById('amount-display');
                          if (display) display.textContent = parseInt(e.target.value).toLocaleString();
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>$5,000</span>
                        <span>$100,000</span>
                      </div>
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                      Get Quote Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          {/* Right circular accent */}
        </div>
      </div>
    </section>
  );
}
