"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FaPlane, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function TravelQuote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: "",
    tripType: "domestic",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: "1",
    tripCost: "",
    coverage: "standard",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    medicalConditions: "",
    activities: [] as string[],
    travelFrequency: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleActivityChange = (activity: string) => {
    const currentActivities = formData.activities;
    if (currentActivities.includes(activity)) {
      setFormData({
        ...formData,
        activities: currentActivities.filter(a => a !== activity)
      });
    } else {
      setFormData({
        ...formData,
        activities: [...currentActivities, activity]
      });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    window.location.href = `/quote/results?type=travel&data=${encodeURIComponent(JSON.stringify(formData))}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Link href="/services/travel-insurance" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Travel Insurance</span>
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="bg-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <FaPlane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Travel Insurance Quote</h1>
                <p className="text-gray-600">Step {step} of 3</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Trip Details</span>
                <span className="text-sm text-gray-600">Personal Info</span>
                <span className="text-sm text-gray-600">Coverage</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-cyan-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Trip Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Home ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your ZIP code"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Trip Type *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                      <input
                        type="radio"
                        name="tripType"
                        value="domestic"
                        checked={formData.tripType === "domestic"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Domestic Travel</div>
                        <div className="text-sm text-gray-600">Travel within the United States</div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                      <input
                        type="radio"
                        name="tripType"
                        value="international"
                        checked={formData.tripType === "international"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">International Travel</div>
                        <div className="text-sm text-gray-600">Travel outside the United States</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Destination *
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter destination city/country"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Return Date *
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers *
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="1">1 traveler</option>
                      <option value="2">2 travelers</option>
                      <option value="3">3 travelers</option>
                      <option value="4">4 travelers</option>
                      <option value="5+">5+ travelers</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Trip Cost *
                    </label>
                    <select
                      name="tripCost"
                      value={formData.tripCost}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select cost range</option>
                      <option value="under1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="over25k">Over $25,000</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Frequency
                  </label>
                  <select
                    name="travelFrequency"
                    value={formData.travelFrequency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select frequency</option>
                    <option value="rarely">Rarely (once a year or less)</option>
                    <option value="occasional">Occasional (2-3 times per year)</option>
                    <option value="frequent">Frequent (4+ times per year)</option>
                    <option value="business">Business traveler</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pre-existing Medical Conditions
                  </label>
                  <select
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select option</option>
                    <option value="none">No medical conditions</option>
                    <option value="minor">Minor conditions (controlled)</option>
                    <option value="major">Major conditions</option>
                    <option value="prefer-not-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Coverage Options</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Coverage Level *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                      <input
                        type="radio"
                        name="coverage"
                        value="basic"
                        checked={formData.coverage === "basic"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Basic Coverage</div>
                        <div className="text-sm text-gray-600">Trip cancellation and basic medical coverage</div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                      <input
                        type="radio"
                        name="coverage"
                        value="standard"
                        checked={formData.coverage === "standard"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Standard Coverage</div>
                        <div className="text-sm text-gray-600">Comprehensive protection including baggage and delays</div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                      <input
                        type="radio"
                        name="coverage"
                        value="premium"
                        checked={formData.coverage === "premium"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Premium Coverage</div>
                        <div className="text-sm text-gray-600">Maximum protection with cancel for any reason</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Planned Activities (check all that apply)
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "adventure-sports", label: "Adventure Sports", desc: "Skiing, snowboarding, mountain climbing" },
                      { value: "water-sports", label: "Water Sports", desc: "Scuba diving, surfing, jet skiing" },
                      { value: "extreme-sports", label: "Extreme Sports", desc: "Bungee jumping, skydiving, base jumping" },
                      { value: "business", label: "Business Activities", desc: "Work-related travel and meetings" },
                      { value: "leisure", label: "Leisure Only", desc: "Sightseeing, dining, relaxation" }
                    ].map((activity) => (
                      <label key={activity.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="checkbox"
                          checked={formData.activities.includes(activity.value)}
                          onChange={() => handleActivityChange(activity.value)}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">{activity.label}</div>
                          <div className="text-sm text-gray-600">{activity.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  step === 1 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {step < 3 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  <span>Next</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get My Quote
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
