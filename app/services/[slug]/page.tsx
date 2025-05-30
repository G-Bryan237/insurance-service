import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Car, Heart, Home, Shield, Building, Plane, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

const services = {
  "car-insurance": {
    id: 1,
    title: "Car Insurance",
    description: "Comprehensive auto insurance coverage to protect you on every journey.",
    icon: Car,
    color: "bg-blue-500",
    content: {
      overview: "Our comprehensive car insurance provides complete protection for your vehicle and peace of mind on the road. Whether you're commuting to work or taking a family road trip, we've got you covered.",
      coverage: [
        {
          name: "Collision Coverage",
          description: "Covers damage to your car from accidents with other vehicles or objects."
        },
        {
          name: "Comprehensive Coverage", 
          description: "Protects against theft, vandalism, weather damage, and other non-collision incidents."
        },
        {
          name: "Liability Protection",
          description: "Covers bodily injury and property damage you may cause to others."
        },
        {
          name: "24/7 Roadside Assistance",
          description: "Emergency assistance including towing, jump-starts, and lockout service."
        }
      ],
      benefits: [
        "Competitive rates and flexible payment options",
        "Easy online claims filing and tracking",
        "Nationwide network of approved repair shops",
        "Multi-car and multi-policy discounts available",
        "No-fault coverage options",
        "Rental car reimbursement"
      ]
    }
  },
  "life-insurance": {
    id: 2,
    title: "Life Insurance",
    description: "Secure your family's financial future with our flexible life insurance policies.",
    icon: Heart,
    color: "bg-red-500",
    content: {
      overview: "Life insurance provides financial security for your loved ones when they need it most. Our flexible policies adapt to your changing needs throughout life's journey.",
      coverage: [
        {
          name: "Term Life Insurance",
          description: "Affordable coverage for a specific period, ideal for temporary needs."
        },
        {
          name: "Whole Life Insurance",
          description: "Permanent coverage with cash value accumulation and guaranteed premiums."
        },
        {
          name: "Universal Life",
          description: "Flexible permanent insurance with adjustable premiums and death benefits."
        },
        {
          name: "Final Expense Insurance",
          description: "Coverage designed to help with burial costs and final expenses."
        }
      ],
      benefits: [
        "Tax-free death benefit for beneficiaries",
        "Cash value accumulation options",
        "Flexible premium payment schedules",
        "Conversion options for term policies",
        "Living benefits for critical illness",
        "No medical exam options available"
      ]
    }
  },
  "home-insurance": {
    id: 3,
    title: "Home Insurance",
    description: "Protect your home and belongings with comprehensive homeowner's insurance.",
    icon: Home,
    color: "bg-green-500",
    content: {
      overview: "Your home is likely your largest investment. Our comprehensive home insurance protects your dwelling, personal belongings, and provides liability coverage for accidents on your property.",
      coverage: [
        {
          name: "Dwelling Coverage",
          description: "Protects the structure of your home against covered perils like fire and storms."
        },
        {
          name: "Personal Property Protection",
          description: "Covers your belongings inside and outside your home, including furniture and electronics."
        },
        {
          name: "Liability Coverage",
          description: "Protects you if someone is injured on your property or you damage others' property."
        },
        {
          name: "Additional Living Expenses",
          description: "Covers temporary living costs if your home becomes uninhabitable due to a covered loss."
        }
      ],
      benefits: [
        "Replacement cost coverage for personal property",
        "Coverage for home-based business equipment",
        "Protection against natural disasters",
        "Identity theft resolution services",
        "Multi-policy discounts available",
        "24/7 claims reporting and support"
      ]
    }
  },
  "health-insurance": {
    id: 4,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family's medical needs.",
    icon: Shield,
    color: "bg-purple-500",
    content: {
      overview: "Quality healthcare shouldn't be a luxury. Our health insurance plans provide comprehensive coverage to keep you and your family healthy while protecting your financial wellbeing.",
      coverage: [
        {
          name: "Preventive Care",
          description: "Annual check-ups, screenings, and vaccinations at no additional cost."
        },
        {
          name: "Emergency Services",
          description: "Coverage for emergency room visits and urgent care when you need it most."
        },
        {
          name: "Prescription Drugs",
          description: "Comprehensive prescription coverage with preferred pharmacy networks."
        },
        {
          name: "Specialist Visits",
          description: "Access to specialists and advanced medical treatments with referral coverage."
        }
      ],
      benefits: [
        "Large network of healthcare providers",
        "Telemedicine services included",
        "Mental health and substance abuse coverage",
        "Maternity and newborn care",
        "Chronic disease management programs",
        "Health savings account compatibility"
      ]
    }
  },
  "business-insurance": {
    id: 5,
    title: "Business Insurance",
    description: "Protect your business with tailored commercial insurance solutions.",
    icon: Building,
    color: "bg-orange-500",
    content: {
      overview: "Running a business comes with risks. Our comprehensive business insurance solutions protect your company, employees, and assets so you can focus on growing your business with confidence.",
      coverage: [
        {
          name: "General Liability",
          description: "Protects against third-party claims of bodily injury or property damage."
        },
        {
          name: "Property Insurance",
          description: "Covers your business property, equipment, and inventory against covered losses."
        },
        {
          name: "Workers' Compensation",
          description: "Required coverage for employee injuries and illnesses occurring at work."
        },
        {
          name: "Professional Liability",
          description: "Protects against claims of errors, omissions, or negligence in professional services."
        }
      ],
      benefits: [
        "Industry-specific coverage options",
        "Business interruption protection",
        "Cyber liability coverage available",
        "Equipment breakdown insurance",
        "Key person life insurance",
        "Commercial auto coverage"
      ]
    }
  },
  "travel-insurance": {
    id: 6,
    title: "Travel Insurance",
    description: "Stay protected during your travels with comprehensive travel coverage.",
    icon: Plane,
    color: "bg-teal-500",
    content: {
      overview: "Travel with confidence knowing you're protected against unexpected events. Our travel insurance covers everything from trip cancellations to medical emergencies abroad.",
      coverage: [
        {
          name: "Trip Cancellation",
          description: "Reimburses non-refundable trip costs if you need to cancel for covered reasons."
        },
        {
          name: "Medical Emergency",
          description: "Covers emergency medical treatment and evacuation while traveling abroad."
        },
        {
          name: "Baggage Protection",
          description: "Compensates for lost, stolen, or delayed baggage and personal items."
        },
        {
          name: "Travel Delay",
          description: "Covers additional expenses due to covered travel delays and missed connections."
        }
      ],
      benefits: [
        "24/7 travel assistance hotline",
        "Coverage for adventure sports",
        "Pre-existing medical condition coverage",
        "Cancel for any reason options",
        "Rental car damage coverage",
        "Travel document replacement assistance"
      ]
    }
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className={`${service.color} w-20 h-20 rounded-xl flex items-center justify-center mb-6`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {service.content.overview}
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get a Quote
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">Service Image</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Coverage Options</h2>
              <div className="space-y-6">
                {service.content.coverage.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {service.content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
