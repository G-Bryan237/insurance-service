import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Car Insurance",
    "Life Insurance", 
    "Home Insurance",
    "Health Insurance",
    "Business Insurance",
    "Fire Insurance"
  ];

  const quickLinks = [
    "About Us",
    "Our Services",
    "Get Quote",
    "Contact Us",
    "Testimonials",
    "Blog"
  ];

  const supportLinks = [
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "FAQs",
    "Claims",
    "Customer Support"
  ];

  const galleryImages = [
    "/api/placeholder/80/80",
    "/api/placeholder/80/80",
    "/api/placeholder/80/80",
    "/api/placeholder/80/80",
    "/api/placeholder/80/80",
    "/api/placeholder/80/80"
  ];

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6 col-span-2 md:col-span-1">
            <div>
              <h3 className="text-2xl font-bold mb-4">Insur</h3>
              <p className="text-blue-200 leading-relaxed">
                We provide comprehensive insurance solutions to protect what matters most to you. 
                With over 20 years of experience, we're your trusted partner in securing your future.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-200">+XX (XXX) XX-XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-200">info@company.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-blue-200">
                  XXX Commercial Road<br />
                  City, Country
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Subscribe to Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400"
                />
                <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © {currentYear} Insur. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
