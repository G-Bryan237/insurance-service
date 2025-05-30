"use client";

import { useState } from "react";
import { Menu, X, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const serviceItems = [
    { name: "Car Insurance", href: "/services/car-insurance" },
    { name: "Life Insurance", href: "/services/life-insurance" },
    { name: "Home Insurance", href: "/services/home-insurance" },
    { name: "Health Insurance", href: "/services/health-insurance" },
    { name: "Business Insurance", href: "/services/business-insurance" },
    { name: "Travel Insurance", href: "/services/travel-insurance" }
  ];

  const blogItems = [
    { name: "All Posts", href: "/blog" },
    { name: "Insurance Tips", href: "/blog?category=tips" },
    { name: "Industry News", href: "/blog?category=news" },
    { name: "Policy Guides", href: "/blog?category=guides" },
    { name: "Claims Advice", href: "/blog?category=claims" }
  ];

  return (
    <header className="w-full">
      {/* Opening hours bar */}
      <div className="bg-yellow-500 text-blue-900 py-1 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>Opening Hours: Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM | Sun: Closed</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-900">
                Insur.
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1 py-2">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-[60] transition-all duration-200 ${
                  activeDropdown === 'services' ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Blog Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('blog')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1 py-2">
                  <span>Blog</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-[60] transition-all duration-200 ${
                  activeDropdown === 'blog' ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                  {blogItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/agent">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get a Quote
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-left">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium text-left">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-left">About</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium text-left">Blog</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-left">Contact</Link>
                <Link href="/agent" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
