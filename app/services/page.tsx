import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Car, Heart, Home, Shield, Building, Flame, Users, Plane } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    slug: "car-insurance",
    icon: Car,
    title: "Car Insurance",
    description: "Comprehensive auto insurance coverage to protect you on every journey.",
    color: "bg-blue-500",
    features: ["Collision Coverage", "Comprehensive Coverage", "Liability Protection", "24/7 Roadside Assistance"]
  },
  {
    id: 2,
    slug: "life-insurance",
    icon: Heart,
    title: "Life Insurance",
    description: "Secure your family's financial future with our flexible life insurance policies.",
    color: "bg-red-500",
    features: ["Term Life Insurance", "Whole Life Insurance", "Universal Life", "Final Expense Insurance"]
  },
  {
    id: 3,
    slug: "home-insurance",
    icon: Home,
    title: "Home Insurance",
    description: "Protect your home and belongings with comprehensive homeowner's insurance.",
    color: "bg-green-500",
    features: ["Dwelling Coverage", "Personal Property Protection", "Liability Coverage", "Additional Living Expenses"]
  },
  {
    id: 4,
    slug: "health-insurance",
    icon: Shield,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family's medical needs.",
    color: "bg-purple-500",
    features: ["Preventive Care", "Emergency Services", "Prescription Drugs", "Specialist Visits"]
  },
  {
    id: 5,
    slug: "business-insurance",
    icon: Building,
    title: "Business Insurance",
    description: "Protect your business with tailored commercial insurance solutions.",
    color: "bg-orange-500",
    features: ["General Liability", "Property Insurance", "Workers' Compensation", "Professional Liability"]
  },
  {
    id: 6,
    slug: "travel-insurance",
    icon: Plane,
    title: "Travel Insurance",
    description: "Stay protected during your travels with comprehensive travel coverage.",
    color: "bg-teal-500",
    features: ["Trip Cancellation", "Medical Emergency", "Baggage Protection", "Travel Delay"]
  }
];

export default function AllServices() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Insurance Services
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive insurance solutions to protect what matters most to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-500">• {feature}</li>
                      ))}
                    </ul>
                    <span className="text-blue-600 font-semibold">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
