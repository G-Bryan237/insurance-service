"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Check, Star, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function QuoteResults() {
  const [quoteData, setQuoteData] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState(1);

  useEffect(() => {
    // Get quote data from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const data = urlParams.get('data');
    
    if (data) {
      setQuoteData({
        type,
        ...JSON.parse(decodeURIComponent(data))
      });
    }
  }, []);

  const plans = [
    {
      id: 1,
      name: "Basic Protection",
      price: 89,
      originalPrice: 120,
      popular: false,
      features: [
        "Liability Coverage (State Minimum)",
        "24/7 Customer Support",
        "Online Claims Filing",
        "Basic Roadside Assistance"
      ],
      coverage: {
        liability: "$25,000/$50,000",
        collision: "Not Included",
        comprehensive: "Not Included",
        deductible: "N/A"
      }
    },
    {
      id: 2,
      name: "Standard Coverage",
      price: 156,
      originalPrice: 200,
      popular: true,
      features: [
        "Enhanced Liability Coverage",
        "Collision Coverage",
        "Comprehensive Coverage",
        "24/7 Roadside Assistance",
        "Rental Car Coverage",
        "Gap Insurance"
      ],
      coverage: {
        liability: "$100,000/$300,000",
        collision: "$500 Deductible",
        comprehensive: "$500 Deductible",
        deductible: "$500"
      }
    },
    {
      id: 3,
      name: "Premium Protection",
      price: 234,
      originalPrice: 300,
      popular: false,
      features: [
        "Maximum Liability Coverage",
        "Low Deductible Coverage",
        "Premium Roadside Assistance",
        "Rental Car Coverage",
        "Gap Insurance",
        "Accident Forgiveness",
        "New Car Replacement"
      ],
      coverage: {
        liability: "$250,000/$500,000",
        collision: "$250 Deductible",
        comprehensive: "$250 Deductible",
        deductible: "$250"
      }
    }
  ];

  const handleContinue = () => {
    const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
    window.location.href = `/quote/application?plan=${encodeURIComponent(JSON.stringify(selectedPlanData))}&data=${encodeURIComponent(JSON.stringify(quoteData))}`;
  };

  if (!quoteData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link href="/quote/auto" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Quote Form</span>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Auto Insurance Quotes</h1>
            <p className="text-gray-600">
              Based on your {quoteData.vehicleYear} {quoteData.vehicleMake} {quoteData.vehicleModel}
            </p>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block mt-4">
              <span className="font-semibold">Great news!</span> You qualify for special discounts
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                  selectedPlan === plan.id 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                } ${plan.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-blue-600">${plan.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      Was ${plan.originalPrice}/month
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save ${plan.originalPrice - plan.price}/month
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Coverage Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Liability:</span>
                        <span className="font-medium">{plan.coverage.liability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Collision:</span>
                        <span className="font-medium">{plan.coverage.collision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Comprehensive:</span>
                        <span className="font-medium">{plan.coverage.comprehensive}</span>
                      </div>
                    </div>
                  </div>

                  {selectedPlan === plan.id && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2 text-blue-600">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-semibold">Selected Plan</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleContinue}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Continue with Selected Plan
            </button>
            <p className="text-gray-500 text-sm mt-3">
              No payment required to continue. Review full application before final commitment.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
