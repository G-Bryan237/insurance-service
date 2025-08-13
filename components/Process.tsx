import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function Process() {
  const steps = [
    {
      number: "01",
      image: "/steps/step1.png",
      title: "Select insurance",
      description: "Browse our comprehensive insurance plans and choose the coverage that best fits your needs and budget."
    },
    {
      number: "02",
      image: "/steps/step2.png",
      title: "Schedule meeting",
      description: "Book a convenient time to meet with our expert insurance advisors to discuss your specific requirements."
    },
    {
      number: "03",
      image: "/steps/step3.png",
      title: "Meet agent",
      description: "Connect with our licensed insurance agent who will guide you through the policy details and answer your questions."
    },
    {
      number: "04",
      image: "/steps/step4.png",
      title: "Get insurance",
      description: "Complete your application and receive your insurance policy with full coverage protection."
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
            <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
            <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
            <p className="text-blue-400 font-semibold text-sm lg:text-base">DEFAULT SUB TEXT</p>
            <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
            <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
            <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
          </div>
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our easy work process <br className="hidden lg:block"/>in 4 steps
          </h2>
        </div>

        <div className="relative px-4 lg:px-12 xl:px-20">
          {/* Desktop wave layout */}
          <div className="hidden lg:block relative h-[200px]">
            {/* Wave path with dotted line */}
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path 
                d="M 0 150 Q 250 100 500 150 T 1000 150" 
                stroke="#3B82F6" 
                strokeWidth="4" 
                fill="none" 
                opacity="0.8"
                strokeDasharray="12,8"
              />
            </svg>
            
            {steps.map((step, index) => {
              const positions = [
                { x: 0, y: 150 },
                { x: 333, y: 125 },
                { x: 667, y: 175 },
                { x: 1000, y: 150 }
              ];
              
              return (
                <div 
                  key={index} 
                  className="absolute text-center group w-80 z-20"
                  style={{ 
                    left: `${(positions[index].x / 1000) * 100}%`,
                    top: `${(positions[index].y / 300) * 100}%`,
                    transform: `translate(-50%, ${
                      index === 0 ? '-70px' : 
                      index === 1 ? '0px' : 
                      index === 2 ? '-70px' : 
                      '0px'
                    })`
                  }}
                >
                  <div className="relative mb-6">
                    {/* Icon positioned directly on the wave dots */}
                    <div className={`relative inline-block ${
                      index === 0 || index === 2 ? 'transform translate-y-2' : 'transform -translate-y-10'
                    }`}>
                      <div className="w-20 h-20 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center group-hover:border-blue-700 transition-colors shadow-lg">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className={`${index === 0 || index === 2 ? 'w-12 h-12' : 'w-10 h-10'}`}
                        />
                      </div>
                      
                      {/* Step number - positioned at top-right */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-blue-700 transition-colors shadow-md">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile/tablet grid layout */}
          <div className="grid grid-cols-2 gap-6 lg:hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  text-center group
                  ${index === 0 ? "justify-self-start" : ""}
                  ${index === 1 ? "justify-self-end" : ""}
                  ${index === 2 ? "justify-self-end" : ""}
                  ${index === 3 ? "justify-self-start" : ""}
                `}
              >
                <div className="relative mb-6 lg:mb-8 flex flex-col items-center">
                  {/* Step number */}
                  <div className="text-6xl lg:text-8xl font-bold text-blue-100 mb-4 group-hover:text-blue-200 transition-colors">
                    {step.number}
                  </div>
                  {/* Icon */}
                  <div className="absolute top-4 lg:top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <img src={step.image} alt={step.title} className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Add spacing for desktop wave layout */}
          <div className="hidden lg:block h-[200px]"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 mt-8 lg:-mt-4">
          <div className="hidden sm:flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border-l-4 border-blue-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <p className="text-xs lg:text-sm text-gray-700 font-medium">
              Don't hesitate, contact us for better future life
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
