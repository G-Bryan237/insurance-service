import { 
  FaCar, 
  FaHeart, 
  FaHome, 
  FaHeartbeat, 
  FaBuilding, 
  FaFire, 
  FaRing, 
  FaPlane,
  FaChevronRight,
  FaChevronLeft
} from "react-icons/fa";
import Link from "next/link";

export function Services() {
  const services = [
    {
      slug: "car-insurance",
      icon: FaCar,
      title: "Car insurance",
      description: "Comprehensive coverage for your vehicle including collision, liability, and theft protection.",
      color: "bg-blue-500"
    },
    {
      slug: "life-insurance",
      icon: FaHeart,
      title: "Life insurance",
      description: "Secure your family's financial future with term and whole life insurance policies.",
      color: "bg-red-500"
    },
    {
      slug: "home-insurance",
      icon: FaHome,
      title: "Home insurance",
      description: "Protect your home and belongings from fire, theft, natural disasters, and liability claims.",
      color: "bg-green-500"
    },
    {
      slug: "health-insurance",
      icon: FaHeartbeat,
      title: "Health insurance",
      description: "Medical coverage for individuals and families including doctor visits, prescriptions, and hospital stays.",
      color: "bg-purple-500"
    },
    {
      slug: "business-insurance",
      icon: FaBuilding,
      title: "Business insurance",
      description: "Comprehensive business protection including liability, property, and workers' compensation coverage.",
      color: "bg-indigo-500"
    },
    {
      slug: "fire-insurance",
      icon: FaFire,
      title: "Fire insurance",
      description: "Specialized coverage against fire damage to your property and business assets.",
      color: "bg-orange-500"
    },
    {
      slug: "marriage-insurance",
      icon: FaRing,
      title: "Marriage insurance",
      description: "Wedding protection coverage for cancellations, vendor issues, and unexpected events.",
      color: "bg-blue-500"
    },
    {
      slug: "travel-insurance",
      icon: FaPlane,
      title: "Travel insurance",
      description: "Travel protection for trip cancellations, medical emergencies, and lost luggage coverage.",
      color: "bg-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-900 relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-5"
        style={{
          backgroundImage: "url('https://bracketweb.com/insurwp/wp-content/uploads/2022/07/services-two-shape-1.png')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="mb-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="text-left">
              <div className="flex items-center mb-2">
                <FaChevronRight className="w-3 h-3 text-blue-300 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-400 mr-0.5" />
                <FaChevronRight className="w-3 h-3 text-blue-600 mr-1" />
                <p className="text-blue-400 font-semibold">SERVICES</p>
                <FaChevronLeft className="w-3 h-3 text-blue-600 ml-1" />
                <FaChevronLeft className="w-3 h-3 text-blue-400 ml-0.5" />
                <FaChevronLeft className="w-3 h-3 text-blue-300 ml-0.5" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                We're covering all the insurance fields
              </h2>
            </div>
            <div className="text-left lg:text-left">
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive insurance solutions tailored to protect what matters most to you and your business. We provide reliable coverage across all major insurance categories.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`}>
              <div className="group cursor-pointer h-full">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 h-full flex flex-col">
                  <div className="bg-blue-500 group-hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-gray-400 group-hover:text-blue-400 font-semibold text-sm transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all services button */}
        <div className="text-center mt-10">
          <Link href="/services">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors border border-blue-500">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
