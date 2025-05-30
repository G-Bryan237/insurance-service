"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Shield, FileText } from "lucide-react";
import Link from "next/link";

export default function Application() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [quoteData, setQuoteData] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    // Personal Information
    ssn: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    employment: "",
    income: "",
    
    // Insurance History
    previousInsurer: "",
    yearsWithPrevious: "",
    reasonForSwitch: "",
    claims: "",
    
    // Additional Information
    creditCheck: false,
    paperless: true,
    autoPayment: false,
    terms: false
  });

  useEffect(() => {
    // Get data from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const planData = urlParams.get('plan');
    const userData = urlParams.get('data');
    
    if (planData) setSelectedPlan(JSON.parse(decodeURIComponent(planData)));
    if (userData) setQuoteData(JSON.parse(decodeURIComponent(userData)));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Navigate to payment page
    window.location.href = `/quote/payment?plan=${encodeURIComponent(JSON.stringify(selectedPlan))}&application=${encodeURIComponent(JSON.stringify(applicationData))}`;
  };

  if (!selectedPlan || !quoteData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/quote/results" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Quote Results</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Insurance Application</h1>
                    <p className="text-gray-600">Step {step} of 3</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Personal Info</span>
                    <span className="text-sm text-gray-600">Insurance History</span>
                    <span className="text-sm text-gray-600">Final Details</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Social Security Number *
                      </label>
                      <input
                        type="text"
                        name="ssn"
                        value={applicationData.ssn}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="XXX-XX-XXXX"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={applicationData.address}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
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
                          value={applicationData.city}
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
                          value={applicationData.state}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          required
                        >
                          <option value="">Select State</option>
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
                          value={applicationData.phone}
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
                          value={applicationData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Employment Status *
                        </label>
                        <select
                          name="employment"
                          value={applicationData.employment}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          required
                        >
                          <option value="">Select Status</option>
                          <option value="employed">Employed Full-time</option>
                          <option value="parttime">Employed Part-time</option>
                          <option value="selfemployed">Self-employed</option>
                          <option value="unemployed">Unemployed</option>
                          <option value="retired">Retired</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Income
                        </label>
                        <select
                          name="income"
                          value={applicationData.income}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        >
                          <option value="">Select Range</option>
                          <option value="under30k">Under $30,000</option>
                          <option value="30k-50k">$30,000 - $50,000</option>
                          <option value="50k-75k">$50,000 - $75,000</option>
                          <option value="75k-100k">$75,000 - $100,000</option>
                          <option value="over100k">Over $100,000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Insurance History</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Insurance Company
                      </label>
                      <input
                        type="text"
                        name="previousInsurer"
                        value={applicationData.previousInsurer}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Enter previous insurer or 'None' if first time"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years with Previous Insurer
                      </label>
                      <select
                        name="yearsWithPrevious"
                        value={applicationData.yearsWithPrevious}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Years</option>
                        <option value="none">No previous insurance</option>
                        <option value="less1">Less than 1 year</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="more5">More than 5 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Switching/Getting Insurance
                      </label>
                      <select
                        name="reasonForSwitch"
                        value={applicationData.reasonForSwitch}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Reason</option>
                        <option value="better-rate">Better rate</option>
                        <option value="better-coverage">Better coverage</option>
                        <option value="first-time">First time buyer</option>
                        <option value="poor-service">Poor customer service</option>
                        <option value="claims-issues">Claims handling issues</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Any claims in the last 5 years?
                      </label>
                      <select
                        name="claims"
                        value={applicationData.claims}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Option</option>
                        <option value="none">No claims</option>
                        <option value="1">1 claim</option>
                        <option value="2">2 claims</option>
                        <option value="3+">3 or more claims</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Final Details</h2>
                    
                    <div className="space-y-4">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="creditCheck"
                          checked={applicationData.creditCheck}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium">Credit Check Authorization</div>
                          <div className="text-sm text-gray-600">
                            I authorize a credit check to determine my insurance score for rating purposes.
                          </div>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="paperless"
                          checked={applicationData.paperless}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium">Paperless Billing</div>
                          <div className="text-sm text-gray-600">
                            Receive bills and documents electronically (may qualify for discount).
                          </div>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="autoPayment"
                          checked={applicationData.autoPayment}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium">Automatic Payment</div>
                          <div className="text-sm text-gray-600">
                            Set up automatic monthly payments (may qualify for discount).
                          </div>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="terms"
                          checked={applicationData.terms}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                        <div>
                          <div className="font-medium">Terms and Conditions *</div>
                          <div className="text-sm text-gray-600">
                            I agree to the terms and conditions and acknowledge that all information provided is true and accurate.
                          </div>
                        </div>
                      </label>
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
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {step < 3 ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!applicationData.terms}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      Continue to Payment
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Plan Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">Selected Plan</h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900">{selectedPlan.name}</h4>
                  <div className="text-2xl font-bold text-blue-600 mt-1">
                    ${selectedPlan.price}/month
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <h5 className="font-medium text-gray-900 mb-2">Coverage Includes:</h5>
                  {selectedPlan.features.slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="text-sm text-gray-600">
                    Vehicle: {quoteData.vehicleYear} {quoteData.vehicleMake} {quoteData.vehicleModel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
