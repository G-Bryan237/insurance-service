"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle, Mail, Clock, Users, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AgentRedirect() {
  const [countdown, setCountdown] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(false);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const team = {
    name: "Elite Insurance Team",
    title: "Your Dedicated Insurance Specialists",
    phone: "+1 (555) 123-4567",
    email: "team@insur.com",
    rating: 4.9,
    experience: "15+ years combined",
    teamMembers: [
      { name: "Sarah Johnson", role: "Team Lead", specialty: "Auto & Home Insurance" },
      { name: "Michael Chen", role: "Business Specialist", specialty: "Commercial Insurance" },
      { name: "Emily Rodriguez", role: "Health Expert", specialty: "Health & Travel Insurance" },
      { name: "David Williams", role: "Life Insurance Advisor", specialty: "Life & Fire Insurance" }
    ],
    specialties: ["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance", "Health Insurance", "Travel Insurance"],
    certifications: ["Licensed Insurance Agents", "Risk Management Certified", "Customer Service Excellence", "Multi-State Licensed"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Return Button */}
          <Link href="/services" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Return</span>
          </Link>

          {isRedirecting ? (
            /* Redirecting Section */
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-12 mb-8">
                <div className="w-24 h-24 mx-auto mb-8">
                  <div className="w-full h-full border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Connecting You to Our Expert Team
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  We're connecting you with our elite team of insurance specialists who work together to provide comprehensive assistance.
                </p>
                
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  {countdown}
                </div>
                
                <p className="text-gray-500">
                  Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
                </p>
                
                <div className="mt-8 flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          ) : (
            /* Team Profile Section */
            <div>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Meet Your Insurance Team
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  You're now connected with our collaborative team of experts who work together to find the perfect insurance coverage for you.
                </p>
              </div>

              {/* Team Profile Card */}
              <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{team.name}</h2>
                  <p className="text-blue-600 font-semibold mb-2">{team.title}</p>
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(team.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-gray-600 ml-2 text-sm">{team.rating} rating</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{team.experience}</p>
                </div>

                {/* Team Members */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Our Team Members</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {team.teamMembers.map((member, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                        <p className="text-gray-600 text-sm">{member.specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Team Specialties */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {team.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team Certifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Certifications</h3>
                    <ul className="space-y-1">
                      {team.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center text-gray-600 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Contact Our Team
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <a 
                    href={`tel:${team.phone}`}
                    className="group bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center hover:border-green-400 hover:bg-green-100 transition-all"
                  >
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Our Team</h3>
                    <p className="text-gray-600 mb-4">Speak with our available team member</p>
                    <p className="text-green-600 font-semibold">{team.phone}</p>
                  </a>

                  <button className="group bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-blue-100 transition-all">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Live Chat</h3>
                    <p className="text-gray-600 mb-4">Chat with our team instantly</p>
                    <p className="text-blue-600 font-semibold">Start Team Chat</p>
                  </button>

                  <a 
                    href={`mailto:${team.email}`}
                    className="group bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center hover:border-purple-400 hover:bg-purple-100 transition-all"
                  >
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Our Team</h3>
                    <p className="text-gray-600 mb-4">Send questions to our team</p>
                    <p className="text-purple-600 font-semibold">Send Team Message</p>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Team Availability</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-center">
                  <div>
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 3:00 PM</p>
                  </div>
                  <div>
                    <p><strong>Sunday:</strong> Closed</p>
                    <p><strong>Emergency Team Line:</strong> 24/7 Available</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  Our team members rotate to ensure you always have expert assistance available.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
