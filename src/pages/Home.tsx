"use client";

import { ShoppingCart, Zap, Shield, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function LandingPage() {
  const features: Feature[] = [
    { icon: Zap, title: "Fast Shipping", desc: "Deliver in 2-3 business days" },
    { icon: Shield, title: "Secure Payments", desc: "Your data is always protected" },
    { icon: ShoppingCart, title: "Easy Returns", desc: "30-day hassle-free returns" },
    { icon: Truck, title: "Free Shipping", desc: "On orders above $50" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-3xl font-extrabold text-orange-600 tracking-tight">
          ShopEase
        </div>
        <div className="flex items-center gap-6">
          <a href="/" className="text-gray-700 hover:text-orange-600 font-medium transition">
            Home
          </a>
          <a href="/login" className="text-gray-700 hover:text-orange-600 font-medium transition">
            Login
          </a>
          <a
            href="/register"
            className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-600 transition font-semibold shadow-md"
          >
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[600px] px-6 text-center bg-linear-to-b from-orange-50 to-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Discover <span className="text-orange-600">Quality</span> Products
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Explore our latest collections — crafted for comfort, designed for style, and delivered to your door in days.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="/register"
            className="px-10 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-600 transition font-semibold text-lg shadow-md"
          >
            Start Shopping
          </a>
          <button className="px-10 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition font-semibold text-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white border-t border-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Shop With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join Thousands of Happy Shoppers</h2>
          <p className="text-lg mb-8 opacity-90">
            Sign up now and get <span className="font-semibold">10% off</span> your first order!
          </p>
          <a
            href="/register"
            className="inline-block px-10 py-3 bg-white text-orange-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Create Account Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 border-t border-orange-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p>&copy; 2025 ShopEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
