"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FaBuilding, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function BusinessQuote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: "",
    businessType: "",
    industry: "",
    yearsInBusiness: "",
    employees: "",
    revenue: "",
    businessName: "",
    ownerName: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    coverage: [] as string[],
    claims: "",
    existingCoverage: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCoverageChange = (coverage: string) => {
    const currentCoverage = formData.coverage;
    if (currentCoverage.includes(coverage)) {
      setFormData({
        ...formData,
        coverage: currentCoverage.filter(c => c !== coverage)
      });
    } else {
      setFormData({
        ...formData,
        coverage: [...currentCoverage, coverage]
      });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    window.location.href = `/quote/results?type=business&data=${encodeURIComponent(JSON.stringify(formData))}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Link href="/services/business-insurance" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Business Insurance</span>
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <FaBuilding className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Business Insurance Quote</h1>
                <p className="text-gray-600">Step {step} of 3</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Business Info</span>
                <span className="text-sm text-gray-600">Contact Info</span>
                <span className="text-sm text-gray-600">Coverage</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Business Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter business ZIP code"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select business type</option>
                    <option value="sole-proprietorship">Sole Proprietorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="llc">LLC</option>
                    <option value="corporation">Corporation</option>
                    <option value="nonprofit">Non-Profit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select industry</option>
                    <option value="retail">Retail</option>
                    <option value="restaurant">Restaurant/Food Service</option>
                    <option value="professional">Professional Services</option>
                    <option value="construction">Construction</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="technology">Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years in Business *
                    </label>
                    <select
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select years</option>
                      <option value="startup">Startup (Less than 1 year)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="4-10">4-10 years</option>
                      <option value="11-20">11-20 years</option>
                      <option value="20+">Over 20 years</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees *
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Select employees</option>
                      <option value="1">1 (Just me)</option>
                      <option value="2-5">2-5 employees</option>
                      <option value="6-10">6-10 employees</option>
                      <option value="11-25">11-25 employees</option>
                      <option value="26-50">26-50 employees</option>
                      <option value="50+">Over 50 employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Revenue *
                  </label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select revenue range</option>
                    <option value="under100k">Under $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="1m-5m">$1,000,000 - $5,000,000</option>
                    <option value="over5m">Over $5,000,000</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter business name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Owner/Contact Name *
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter owner/contact name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter street address"
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
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Coverage Options</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Coverage Types (check all that apply) *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "general-liability", label: "General Liability", desc: "Protection against third-party claims" },
                      { value: "property", label: "Property Insurance", desc: "Coverage for business property and equipment" },
                      { value: "workers-comp", label: "Workers' Compensation", desc: "Employee injury and illness coverage" },
                      { value: "professional", label: "Professional Liability", desc: "Errors and omissions coverage" },
                      { value: "cyber", label: "Cyber Liability", desc: "Data breach and cyber attack protection" },
                      { value: "commercial-auto", label: "Commercial Auto", desc: "Vehicle coverage for business use" }
                    ].map((coverage) => (
                      <label key={coverage.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="checkbox"
                          checked={formData.coverage.includes(coverage.value)}
                          onChange={() => handleCoverageChange(coverage.value)}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">{coverage.label}</div>
                          <div className="text-sm text-gray-600">{coverage.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Any claims in the last 5 years?
                  </label>
                  <select
                    name="claims"
                    value={formData.claims}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select option</option>
                    <option value="none">No claims</option>
                    <option value="1">1 claim</option>
                    <option value="2">2 claims</option>
                    <option value="3+">3 or more claims</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Existing Business Insurance
                  </label>
                  <select
                    name="existingCoverage"
                    value={formData.existingCoverage}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select option</option>
                    <option value="none">No existing coverage</option>
                    <option value="switching">Switching from another provider</option>
                    <option value="adding">Adding to existing coverage</option>
                    <option value="renewing">Renewing existing policy</option>
                  </select>
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
                  className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
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
