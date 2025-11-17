// EcommerceFooter.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Store, Factory } from "lucide-react";
import { toast } from "react-hot-toast";

export default function EcommerceFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    // Here you can add your API call logic to save the email
    toast.success(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & Socials */}
        <div>
          <h2 className="text-2xl font-extrabold text-orange-500 mb-4">MultiVendor</h2>
          <p className="text-gray-300 mb-4">
            Your one-stop online marketplace for electronics, fashion, home & more!
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-orange-500 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link to="/store" className="hover:text-orange-500 transition">Store <Store size={14} className="inline ml-1" /></Link></li>
            <li><Link to="/factory" className="hover:text-orange-500 transition">Factory <Factory size={14} className="inline ml-1" /></Link></li>
            <li><Link to="/vendors" className="hover:text-orange-500 transition">Vendors</Link></li>
            <li><Link to="/deals" className="hover:text-orange-500 transition">Deals</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li><Link to="/category/electronics" className="hover:text-orange-500 transition">Electronics</Link></li>
            <li><Link to="/category/fashion" className="hover:text-orange-500 transition">Fashion</Link></li>
            <li><Link to="/category/home" className="hover:text-orange-500 transition">Home & Kitchen</Link></li>
            <li><Link to="/category/beauty" className="hover:text-orange-500 transition">Beauty</Link></li>
            <li><Link to="/category/sports" className="hover:text-orange-500 transition">Sports</Link></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Subscribe</h3>
          <p className="text-gray-300 mb-4">Get the latest updates and deals!</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded-xl transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MultiVendor. All rights reserved.
      </div>
    </footer>
  );
}
