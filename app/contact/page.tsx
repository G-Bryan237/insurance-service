import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us for immediate assistance"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@insur.com", "support@insur.com"],
      description: "Send us your questions anytime"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office",
      details: ["123 Insurance Street", "New York, NY 10001"],
      description: "Visit our main office"
    },
    {
      icon: FaClock,
      title: "Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-3PM"],
      description: "We're here when you need us"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-2">
              Get in touch with our insurance experts. We're here to help you find the perfect coverage for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Contact Cards Grid - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form and Office Info Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send us a Message
              </h2>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Insurance Type
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm sm:text-base">
                    <option>Select insurance type</option>
                    <option>Auto Insurance</option>
                    <option>Home Insurance</option>
                    <option>Life Insurance</option>
                    <option>Health Insurance</option>
                    <option>Business Insurance</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm sm:text-base resize-none"
                    placeholder="Tell us about your insurance needs..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Visit Info - Mobile Optimized */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Visit Our Office
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <p className="text-gray-500 text-sm sm:text-base">Interactive Map Placeholder</p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h4>
                  <p className="text-gray-600 text-sm sm:text-base">123 Insurance Street<br />New York, NY 10001</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Parking</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Free parking available in our building garage</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Public Transport</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Subway: Lines 4, 5, 6 to Union Square<br />Bus: M14, M23</p>
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
