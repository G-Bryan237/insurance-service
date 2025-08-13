"use client";
import { useEffect, useState } from "react";
import { DollarSign, TrendingUp, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: DollarSign,
      title: "Cash flow management",
      description: "Efficient financial planning and cash flow optimization for your business.",
      image: "/features/feature1.jpg"
    },
    {
      icon: TrendingUp,
      title: "Investment opportunities",
      description: "Smart investment solutions to grow your wealth and secure your future.",
      image: "/features/feature2.jpg"
    },
    {
      icon: Shield,
      title: "Protect against uncertainties",
      description: "Comprehensive protection plans for life's unexpected moments.",
      image: "/features/feature3.jpg"
    }
  ];

  // Slideshow state for mobile
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 3500); // 3.5 seconds
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-6 md:py-20 bg-gray-50"> {/* Reduced py-12 to py-6 for mobile */}
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="text-center mb-6 md:mb-16"> {/* Reduced mb-10 to mb-6 for mobile */}
          <p className="text-blue-600 font-semibold mb-2 md:mb-4 text-sm md:text-base">HOW IT WORKS</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-6"> {/* Reduced mb-4 to mb-2 for mobile */}
            Watch How it Works
          </h2>
        </div>

        {/* Mobile slideshow */}
        <div className="sm:hidden">
          <div className="group cursor-pointer mb-1"> {/* Reduced mb-8 to mb-1 */}
            <div className="relative overflow-hidden rounded-2xl mb-3 bg-white shadow-lg"> {/* Reduced mb-4 to mb-3 */}
              <div className="aspect-[4/2.7] relative"> {/* Changed aspect ratio from 4/3 to 4/2.7 */}
                <img
                  src={features[current].image}
                  alt={features[current].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"> {/* Removed translate-y-4 */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/90 transition-all duration-500 ease-out rounded-t-lg"></div>
                  <div className="flex items-start gap-2 relative z-10 pb-1"> {/* Added pb-1 for a little bottom padding */}
                    <div className="flex-shrink-0">
                      {
                        (() => {
                          const Icon = features[current].icon;
                          return <Icon className="w-7 h-7 text-white" />;
                        })()
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white mb-1 break-words">
                        {features[current].title}
                      </h3>
                      <p className="text-white/90 text-xs leading-snug break-words line-clamp-3">
                        {features[current].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-2">
              {features.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-2 h-2 rounded-full ${idx === current ? "bg-blue-600" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer mb-8 sm:mb-0">
              <div className="relative overflow-hidden rounded-2xl mb-4 md:mb-6 bg-white shadow-lg">
                <div className="aspect-[4/3] relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-10 md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/90 transition-all duration-500 ease-out rounded-t-lg"></div>
                    <div className="flex items-start gap-3 md:gap-4 relative z-10">
                      <div className="flex-shrink-0">
                        <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
