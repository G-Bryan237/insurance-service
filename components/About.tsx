"use client";

import { CheckCircle, Award, TrendingUp, Users, Target } from "lucide-react";
import { useEffect, useState } from "react";

export function About() {
  const [counters, setCounters] = useState({ projects: 0, customers: 0, success: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 1234, customers: 955, success: 100 };
    const duration = 2000;
    const steps = 60;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        customers: Math.floor(targets.customers * progress),
        success: Math.floor(targets.success * progress)
      });

      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <div className="relative">
                <div className="relative">
                  <p className="text-blue-600 font-semibold mb-4">ABOUT COMPANY</p>
                  {/* Decorative shapes - hidden on mobile */}
                  <div className="hidden lg:block absolute -top-2 left-32 w-8 h-1 bg-blue-200 opacity-60"></div>
                  <div className="hidden lg:block absolute -top-1 left-40 w-4 h-4 border-2 border-blue-300 rounded-full opacity-40"></div>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Get reliable & quick insurance for any purpose
                </h2>
              </div>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum.
              </p>
            </div>

            {/* Features list */}
            <ul className="space-y-3 lg:space-y-4 list-none">
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Pina & Associates Insurance</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Payment at Contingency</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Amount of Payment</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Large Number of Insurance</p>
                </div>
              </li>
            </ul>

            <a href="#" className="inline-block bg-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Discover More
            </a>
          </div>

          {/* Middle - Image with Award Badge */}
          <div className="lg:col-span-4 relative order-2 lg:order-2">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 rounded-xl lg:rounded-2xl overflow-hidden relative">
              <img 
                src="/about/img1.jpg" 
                alt="Insurance team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>

            {/* Award badge positioned touching the image card */}
            <div className="absolute -top-2 -left-2 lg:-top-3 lg:-left-3 bg-gradient-to-br from-black via-blue-900 to-black text-white p-2 lg:p-3 rounded-lg shadow-xl border border-blue-400 z-10">
              <div className="text-center">
                <Award className="w-4 h-4 lg:w-5 lg:h-5 mx-auto mb-1 text-yellow-400" />
                <div className="text-xs lg:text-sm font-bold text-yellow-400">28</div>
                <div className="text-[10px] lg:text-xs font-medium text-blue-200">National Awards Won</div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:col-span-3 order-3 lg:order-3">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:space-y-4">
              <div className="text-center py-2">
                <div className="text-xl lg:text-3xl font-bold" style={{color: '#015fc9'}}>{counters.projects}</div>
                <h4 className="text-xs lg:text-base font-medium" style={{color: '#015fc9'}}>Projects completed</h4>
                <p className="hidden lg:block text-sm text-gray-600 mt-1">Nulla viverra tortor eu nulla pulvinar dignissim.</p>
              </div>

              <div className="text-center py-2">
                <div className="text-xl lg:text-3xl font-bold" style={{color: '#015fc9'}}>{counters.customers}</div>
                <h4 className="text-xs lg:text-base font-medium" style={{color: '#015fc9'}}>Satisfied customers</h4>
                <p className="hidden lg:block text-sm text-gray-600 mt-1">Nulla viverra tortor eu nulla pulvinar dignissim.</p>
              </div>

              <div className="text-center py-2">
                <div className="flex items-center justify-center">
                  <span className="text-xl lg:text-3xl font-bold" style={{color: '#015fc9'}}>{counters.success}</span>
                  <span className="text-lg lg:text-xl font-bold ml-1" style={{color: '#015fc9'}}>%</span>
                </div>
                <h4 className="text-xs lg:text-base font-medium" style={{color: '#015fc9'}}>Success rates</h4>
                <p className="hidden lg:block text-sm text-gray-600 mt-1">Nulla viverra tortor eu nulla pulvinar dignissim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
