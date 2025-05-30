"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CreditCard, ArrowLeft, Shield, Lock } from "lucide-react";
import Link from "next/link";

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [applicationData, setApplicationData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    paymentMethod: "credit",
    billingCycle: "monthly"
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planData = urlParams.get('plan');
    const appData = urlParams.get('application');
    
    if (planData) setSelectedPlan(JSON.parse(decodeURIComponent(planData)));
    if (appData) setApplicationData(JSON.parse(decodeURIComponent(appData)));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment and navigate to confirmation
    window.location.href = '/quote/confirmation';
  };

  if (!selectedPlan || !applicationData) {
    return <div>Loading...</div>;
  }

  const annualPrice = selectedPlan.price * 12;
  const annualDiscount = annualPrice * 0.1; // 10% annual discount
  const finalAnnualPrice = annualPrice - annualDiscount;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/quote/application" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Application</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Payment Information</h1>
                    <p className="text-gray-600">Secure payment processing</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Billing Cycle Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Billing Cycle
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="billingCycle"
                          value="monthly"
                          checked={paymentData.billingCycle === "monthly"}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">Monthly</div>
                          <div className="text-sm text-gray-600">${selectedPlan.price}/month</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="billingCycle"
                          value="annual"
                          checked={paymentData.billingCycle === "annual"}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">Annual</div>
                          <div className="text-sm text-gray-600">
                            ${Math.round(finalAnnualPrice)}/year
                            <span className="text-green-600 block">Save ${Math.round(annualDiscount)}!</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="credit"
                          checked={paymentData.paymentMethod === "credit"}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">Credit/Debit Card</div>
                          <div className="text-sm text-gray-600">Visa, Mastercard, American Express</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="ach"
                          checked={paymentData.paymentMethod === "ach"}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium">Bank Account (ACH)</div>
                          <div className="text-sm text-gray-600">Direct bank transfer</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {paymentData.paymentMethod === "credit" && (
                    <>
                      {/* Card Information */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={paymentData.cardName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          placeholder="Name as it appears on card"
                          required
                        />
                      </div>
                    </>
                  )}

                  {/* Billing Address */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          name="billingAddress"
                          value={paymentData.billingAddress}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            name="billingCity"
                            value={paymentData.billingCity}
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
                            name="billingState"
                            value={paymentData.billingState}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            required
                          >
                            <option value="">Select</option>
                            <option value="CA">CA</option>
                            <option value="TX">TX</option>
                            <option value="FL">FL</option>
                            <option value="NY">NY</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            name="billingZip"
                            value={paymentData.billingZip}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      <div className="font-medium text-gray-900 mb-1">Secure Payment</div>
                      Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                  >
                    Complete Purchase
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-medium">{selectedPlan.name}</span>
                  </div>
                  
                  {paymentData.billingCycle === "monthly" ? (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Premium</span>
                      <span className="font-medium">${selectedPlan.price}</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Premium</span>
                        <span className="line-through text-gray-400">${annualPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-600">Annual Discount</span>
                        <span className="text-green-600">-${Math.round(annualDiscount)}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total Annual</span>
                        <span>${Math.round(finalAnnualPrice)}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">Coverage Highlights</span>
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {selectedPlan.features.slice(0, 3).map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mt-4">
                  <div className="text-sm text-blue-800">
                    <div className="font-medium">Policy effective immediately</div>
                    <div>Coverage begins after payment confirmation</div>
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
