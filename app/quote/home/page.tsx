"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FaHome, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function HomeQuote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: "",
    homeType: "",
    homeAge: "",
    squareFootage: "",
    homeValue: "",
    mortgageStatus: "",
    coverageLevel: "standard",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    occupancy: "",
    claims: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    window.location.href = `/quote/results?type=home&data=${encodeURIComponent(JSON.stringify(formData))}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Link href="/services/home-insurance" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Home Insurance</span>
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <FaHome className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Home Insurance Quote</h1>
                <p className="text-gray-600">Step {step} of 3</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Property Info</span>
                <span className="text-sm text-gray-600">Personal Info</span>
                <span className="text-sm text-gray-600">Coverage</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Property Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Home Type *
                  </label>
                  <select
                    name="homeType"
                    value={formData.homeType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select home type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="condo">Condominium</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="mobile">Mobile Home</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Home Age *
                    </label>
                    <select
                      name="homeAge"
                      value={formData.homeAge}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select age</option>
                      <option value="0-5">0-5 years</option>
                      <option value="6-15">6-15 years</option>
                      <option value="16-30">16-30 years</option>
                      <option value="31-50">31-50 years</option>
                      <option value="50+">Over 50 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Square Footage *
                    </label>
                    <input
                      type="number"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="e.g. 2000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Home Value *
                  </label>
                  <select
                    name="homeValue"
                    value={formData.homeValue}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select value range</option>
                    <option value="under200k">Under $200,000</option>
                    <option value="200k-400k">$200,000 - $400,000</option>
                    <option value="400k-600k">$400,000 - $600,000</option>
                    <option value="600k-800k">$600,000 - $800,000</option>
                    <option value="over800k">Over $800,000</option>
                  </select>
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
                      placeholder="Enter your first name"
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
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter property address"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Enter city"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select state</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      <option value="NY">New York</option>
                      <option value="IL">Illinois</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Occupancy Type *
                  </label>
                  <select
                    name="occupancy"
                    value={formData.occupancy}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select occupancy type</option>
                    <option value="owner-occupied">Owner Occupied</option>
                    <option value="rental">Rental Property</option>
                    <option value="seasonal">Seasonal/Vacation Home</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Coverage Options</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Level *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="coverageLevel"
                        value="basic"
                        checked={formData.coverageLevel === "basic"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <span className="font-medium">Basic Coverage</span>
                        <p className="text-sm text-gray-600">Essential protection at affordable rates</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="coverageLevel"
                        value="standard"
                        checked={formData.coverageLevel === "standard"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <span className="font-medium">Standard Coverage</span>
                        <p className="text-sm text-gray-600">Comprehensive protection for most homeowners</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="coverageLevel"
                        value="premium"
                        checked={formData.coverageLevel === "premium"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <span className="font-medium">Premium Coverage</span>
                        <p className="text-sm text-gray-600">Maximum protection with additional benefits</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Claims History
                  </label>
                  <select
                    name="claims"
                    value={formData.claims}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select claims history</option>
                    <option value="none">No claims in the last 5 years</option>
                    <option value="1">1 claim in the last 5 years</option>
                    <option value="2">2 claims in the last 5 years</option>
                    <option value="3+">3+ claims in the last 5 years</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What's Included:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Dwelling coverage up to selected amount</li>
                    <li>• Personal property protection</li>
                    <li>• Liability coverage</li>
                    <li>• Additional living expenses</li>
                    <li>• 24/7 claims support</li>
                  </ul>
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
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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
