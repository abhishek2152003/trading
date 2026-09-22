"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-deep-navy text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading font-bold text-2xl text-white tracking-wide">
              Authentic<span className="text-spice-gold">Flavors</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center text-[15px]">
            <Link href="/" className="text-spice-gold font-semibold transition-colors duration-200">Home</Link>
            <Link href="/about" className="hover:text-spice-gold transition-colors duration-200">About Us</Link>
            <Link href="/products/dry-fruits" className="hover:text-spice-gold transition-colors duration-200">Dry Fruits</Link>
            <Link href="/products/fruits" className="hover:text-spice-gold transition-colors duration-200">Fruits</Link>
            <Link href="/products/vegetable" className="hover:text-spice-gold transition-colors duration-200">Vegetable</Link>
            <Link href="/products/spices" className="hover:text-spice-gold transition-colors duration-200">Spices</Link>
            <Link href="/products/millets" className="hover:text-spice-gold transition-colors duration-200">Millets</Link>
            <Link href="/products/pulses" className="hover:text-spice-gold transition-colors duration-200">Pulses</Link>
            <Link href="/contact" className="hover:text-spice-gold transition-colors duration-200">Contact Us</Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-spice-gold focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-industrial-blue/95 backdrop-blur-sm border-t border-ocean-blue">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-semibold text-spice-gold bg-ocean-blue/20">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">About Us</Link>
            <Link href="/products/dry-fruits" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">Dry Fruits</Link>
            <Link href="/products/fruits" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">Fruits</Link>
            <Link href="/products/vegetable" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">Vegetable</Link>
            <Link href="/products/spices" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">Spices</Link>
            <Link href="/products/millets" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">Millets</Link>
            <Link href="/products/pulses" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">Pulses</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-ocean-blue hover:text-spice-gold transition-colors">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
