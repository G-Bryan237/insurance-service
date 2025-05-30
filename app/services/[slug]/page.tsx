import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { 
  FaCar, 
  FaHeart, 
  FaHome, 
  FaHeartbeat, 
  FaBuilding, 
  FaPlane, 
  FaArrowLeft, 
  FaCheck,
  FaFire,
  FaRing
} from "react-icons/fa";

const services = {
  "car-insurance": {
    id: 1,
    title: "Car Insurance",
    description: "Comprehensive auto insurance coverage to protect you on every journey.",
    icon: FaCar,
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
    icon: FaHeart,
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
    icon: FaHome,
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
    icon: FaHeartbeat,
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
    icon: FaBuilding,
    color: "bg-indigo-500",
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
    icon: FaPlane,
    color: "bg-cyan-500",
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
  },
  "fire-insurance": {
    id: 7,
    title: "Fire Insurance",
    description: "Specialized coverage against fire damage to your property and business assets.",
    icon: FaFire,
    color: "bg-orange-500",
    content: {
      overview: "Protect your property and business assets from fire damage with our comprehensive fire insurance coverage. Our policies provide financial protection against losses from fire, smoke, and related damages.",
      coverage: [
        {
          name: "Property Fire Damage",
          description: "Covers structural damage to buildings and property caused by fire incidents."
        },
        {
          name: "Business Asset Protection",
          description: "Protects business equipment, inventory, and assets from fire-related losses."
        },
        {
          name: "Smoke Damage Coverage",
          description: "Coverage for damage caused by smoke and soot from fire incidents."
        },
        {
          name: "Emergency Response",
          description: "Immediate assistance and emergency response services during fire incidents."
        }
      ],
      benefits: [
        "24/7 emergency response team",
        "Fast claim processing and settlement",
        "Coverage for temporary relocation costs",
        "Business interruption protection",
        "Restoration and cleanup services",
        "Prevention consultation services"
      ]
    }
  },
  "marriage-insurance": {
    id: 8,
    title: "Marriage Insurance",
    description: "Wedding protection coverage for cancellations, vendor issues, and unexpected events.",
    icon: FaRing,
    color: "bg-pink-500",
    content: {
      overview: "Your wedding day should be perfect. Our marriage insurance protects your investment and ensures your special day goes smoothly, covering unexpected cancellations and vendor issues.",
      coverage: [
        {
          name: "Wedding Cancellation",
          description: "Covers costs if you need to cancel or postpone your wedding due to covered reasons."
        },
        {
          name: "Vendor Issues",
          description: "Protection against vendor bankruptcy, no-shows, or service failures."
        },
        {
          name: "Weather Protection",
          description: "Coverage for weather-related cancellations or venue changes."
        },
        {
          name: "Gift Coverage",
          description: "Protection for wedding gifts against theft, damage, or loss."
        }
      ],
      benefits: [
        "Coverage up to $1 million",
        "Liability protection for wedding events",
        "Photography and videography protection",
        "Attire and jewelry coverage",
        "Honeymoon trip protection",
        "Military deployment coverage"
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
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className={`${service.color} w-20 h-20 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {service.content.overview}
              </p>
              <Link href={
                service.id === 1 ? "/quote/auto" : 
                service.id === 2 ? "/quote/life" :
                service.id === 3 ? "/quote/home" :
                service.id === 4 ? "/quote/health" :
                service.id === 5 ? "/quote/business" :
                service.id === 6 ? "/quote/travel" :
                service.id === 7 ? "/quote/fire" :
                service.id === 8 ? "/quote/marriage" :
                "/quote"
              }>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Get a Quote
                </button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-2xl p-12 flex items-center justify-center shadow-xl">
              <span className="text-blue-400 font-semibold text-lg">Service Illustration</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Coverage Options</h2>
              <div className="space-y-4">
                {service.content.coverage.map((item, index) => (
                  <div key={index} className="group bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500 hover:bg-gray-750">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 group-hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.name}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  {service.content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
                      <div className="bg-green-500 group-hover:bg-green-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
