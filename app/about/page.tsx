import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FaUsers, FaAward, FaShieldAlt, FaClock } from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "99%", label: "Claim Success Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: "Protection First",
      description: "We prioritize comprehensive protection for our clients above all else."
    },
    {
      icon: FaUsers,
      title: "Customer Focused",
      description: "Every decision we make is centered around our customers' needs and satisfaction."
    },
    {
      icon: FaAward,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: FaClock,
      title: "Reliability",
      description: "You can count on us to be there when you need us most."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About Insur
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              For over 20 years, we've been protecting families and businesses with comprehensive insurance solutions. 
              Our commitment to excellence and customer service sets us apart in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Founded in 2003, Insur began with a simple mission: to make insurance accessible, 
                understandable, and affordable for everyone. What started as a small family business 
                has grown into a trusted insurance provider serving thousands of customers nationwide.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                We believe that everyone deserves peace of mind when it comes to protecting what 
                matters most. Our team of experienced professionals works tirelessly to provide 
                personalized service and comprehensive coverage options tailored to your unique needs.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Today, we continue to innovate and expand our services while maintaining the 
                personal touch and commitment to excellence that our customers have come to expect.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Values
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers every day.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-700 transition-colors">
                  <value.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
