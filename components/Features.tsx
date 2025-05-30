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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">HOW IT WORKS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Watch How it Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-white shadow-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Sliding Text Content with Icon */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Blue background overlay on hover */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/90 transition-all duration-500 ease-out rounded-t-lg"></div>
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="flex-shrink-0">
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
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
