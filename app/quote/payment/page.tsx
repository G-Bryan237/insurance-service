"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CreditCard, ArrowLeft, Shield, Lock } from "lucide-react";
import Link from "next/link";

export default function Payment() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [applicationData, setApplicationData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState({
    paymentMethod: "",
    billingCycle: "monthly"
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planData = urlParams.get('plan');
    const appData = urlParams.get('application');
    
    if (planData) setSelectedPlan(JSON.parse(decodeURIComponent(planData)));
    if (appData) setApplicationData(JSON.parse(decodeURIComponent(appData)));
    
    // Store the current payment URL for agent page return navigation
    sessionStorage.setItem('paymentPageUrl', window.location.href);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store current payment URL in sessionStorage before navigating
    sessionStorage.setItem('paymentPageUrl', window.location.href);
    // Process payment and navigate to agent page
    router.push('/agent');
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <select
                      name="paymentMethod"
                      value={paymentData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                      required
                    >
                      <option value="">Select Payment Method</option>
                      <option value="cashapp">Cash App</option>
                      <option value="venmo">Venmo</option>
                      <option value="paypal">PayPal</option>
                      <option value="zelle">Zelle</option>
                      <option value="ach">Bank Account (ACH)</option>
                      <option value="applepay">Apple Pay</option>
                      <option value="googlepay">Google Pay</option>
                      <option value="bitcoin">Bitcoin</option>
                      <option value="ethereum">Ethereum</option>
                    </select>
                  </div>

                  {/* Dynamic Payment Input Fields */}
                  {paymentData.paymentMethod && paymentData.paymentMethod !== "" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {paymentData.paymentMethod === "cashapp" && "Cash App Payment Details"}
                        {paymentData.paymentMethod === "venmo" && "Venmo Payment Details"}
                        {paymentData.paymentMethod === "paypal" && "PayPal Payment Details"}
                        {paymentData.paymentMethod === "zelle" && "Zelle Payment Details"}
                        {paymentData.paymentMethod === "ach" && "Bank Account Details"}
                        {paymentData.paymentMethod === "applepay" && "Apple Pay Details"}
                        {paymentData.paymentMethod === "googlepay" && "Google Pay Details"}
                        {paymentData.paymentMethod === "bitcoin" && "Bitcoin Payment Details"}
                        {paymentData.paymentMethod === "ethereum" && "Ethereum Payment Details"}
                      </h3>

                      {/* Cash App */}
                      {paymentData.paymentMethod === "cashapp" && (
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Cash App Username or Email *
                              </label>
                              <input
                                type="text"
                                name="cashappId"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                                placeholder="$username or email@example.com"
                                required
                              />
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>• Enter your Cash App username (starting with $) or email address</p>
                              <p>• Payment will be processed through Cash App's secure system</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Venmo */}
                      {paymentData.paymentMethod === "venmo" && (
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Venmo Username or Phone Number *
                              </label>
                              <input
                                type="text"
                                name="venmoId"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                placeholder="@username or phone number"
                                required
                              />
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>• Enter your Venmo username (starting with @) or phone number</p>
                              <p>• We'll send you a payment request through Venmo</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* PayPal */}
                      {paymentData.paymentMethod === "paypal" && (
                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                PayPal Email Address *
                              </label>
                              <input
                                type="email"
                                name="paypalEmail"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                                placeholder="your-paypal@email.com"
                                required
                              />
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>• Enter the email address associated with your PayPal account</p>
                              <p>• You'll be redirected to PayPal to complete the payment</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Zelle */}
                      {paymentData.paymentMethod === "zelle" && (
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Zelle Email or Phone Number *
                              </label>
                              <input
                                type="text"
                                name="zelleId"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                                placeholder="email@example.com or (555) 123-4567"
                                required
                              />
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>• Enter your Zelle-enrolled email or phone number</p>
                              <p>• Payment will be processed through your bank's Zelle service</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bank Account (ACH) */}
                      {paymentData.paymentMethod === "ach" && (
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Account Number *
                                </label>
                                <input
                                  type="text"
                                  name="accountNumber"
                                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                  placeholder="Account number"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Routing Number *
                                </label>
                                <input
                                  type="text"
                                  name="routingNumber"
                                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                  placeholder="9-digit routing number"
                                  maxLength={9}
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Account Type *
                              </label>
                              <select
                                name="accountType"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                required
                              >
                                <option value="">Select account type</option>
                                <option value="checking">Checking</option>
                                <option value="savings">Savings</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Apple Pay */}
                      {paymentData.paymentMethod === "applepay" && (
                        <div className="bg-gray-900 text-white p-6 rounded-lg">
                          <div className="text-center space-y-4">
                            <div className="text-lg font-semibold">Apple Pay</div>
                            <p className="text-sm text-gray-300">
                              Use Touch ID, Face ID, or your device passcode to pay securely
                            </p>
                            <div className="bg-white text-black px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                              <span className="text-sm font-medium">🍎 Pay</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Google Pay */}
                      {paymentData.paymentMethod === "googlepay" && (
                        <div className="bg-blue-600 text-white p-6 rounded-lg">
                          <div className="text-center space-y-4">
                            <div className="text-lg font-semibold">Google Pay</div>
                            <p className="text-sm text-blue-100">
                              Pay quickly and securely with Google Pay
                            </p>
                            <div className="bg-white text-blue-600 px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                              <span className="text-sm font-medium">G Pay</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bitcoin */}
                      {paymentData.paymentMethod === "bitcoin" && (
                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Bitcoin Wallet Address *
                              </label>
                              <input
                                type="text"
                                name="bitcoinAddress"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none font-mono text-sm"
                                placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                                required
                              />
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>• Enter your Bitcoin wallet address for payment verification</p>
                              <p>• Transaction will be processed on the Bitcoin network</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Ethereum */}
                      {paymentData.paymentMethod === "ethereum" && (
                        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Ethereum Wallet Address *
                              </label>
                              <input
                                type="text"
                                name="ethereumAddress"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none font-mono text-sm"
                                placeholder="0x742d35Cc6734C0532925a3b8D23AD16C..."
                                required
                              />
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>• Enter your Ethereum wallet address for payment verification</p>
                              <p>• Transaction will be processed on the Ethereum network</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

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
