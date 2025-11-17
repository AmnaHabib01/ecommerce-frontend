

import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  Facebook,
  Instagram, 
  Twitter,
  User,
  ChevronDown,
  Store,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // adjust path if needed

export default function EcommerceHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { cart } = useCart();

  return (
    <header className="w-full bg-white text-black shadow-lg border-b border-gray-200">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-2 bg-black text-sm">
        <span className="text-white">🚚 Free Shipping on Orders Over $50</span>
        <div className="flex items-center gap-4 text-white">
          <Link
            to="/store"
            className="flex items-center gap-1 bg-orange-600 text-white text-xs px-3 py-1 rounded-full 
            hover:bg-orange-500 hover:scale-105 transition-all duration-200"
          >
            <Store size={14} /> Store
          </Link>
          <Link
            to="/factory"
            className="flex items-center gap-1 bg-orange-600 text-white text-xs px-3 py-1 rounded-full 
            hover:bg-orange-500 hover:scale-105 transition-all duration-200"
          >
            <Factory size={14} /> Factory
          </Link>
          <a href="#" className="hover:text-orange-500 transition"><Facebook size={18} /></a>
          <a href="#" className="hover:text-orange-500 transition"><Instagram size={18} /></a>
          <a href="#" className="hover:text-orange-500 transition"><Twitter size={18} /></a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-orange-600 hover:text-black transition duration-300"
        >
          MultiVendor
        </Link>

        {/* Desktop Search */}
        <div
          className={`hidden md:flex items-center border rounded-2xl overflow-hidden w-[550px] transition-all duration-300 ${
            searchActive
              ? "bg-orange-100 border-orange-500 shadow-[0_0_12px_#ff7a18]"
              : "bg-gray-100 border-gray-300"
          }`}
        >
          <input
            type="text"
            value={search}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products, vendors, brands..."
            className="w-full bg-transparent px-4 py-3 outline-none text-black"
          />
          <button className="px-5 text-white transition-all duration-300">
            <Search size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-700">

          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-orange-500 transition">
            <User size={24} />
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:text-orange-500 transition">
            <ShoppingCart size={26} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="hidden md:flex px-6 pb-4 gap-10 text-lg font-medium text-gray-700">
        <Link to="/" className="hover:text-orange-500 transition">Home</Link>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 hover:text-orange-500 transition"
          >
            Categories <ChevronDown size={18} />
          </button>
          {dropdownOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-xl border border-gray-200 rounded-xl w-64 p-4 flex flex-col gap-2 animate-fadeIn z-30">
              <Link to="/category/electronics" className="hover:text-orange-500 transition">Electronics</Link>
              <Link to="/category/fashion" className="hover:text-orange-500 transition">Fashion</Link>
              <Link to="/category/home" className="hover:text-orange-500 transition">Home & Kitchen</Link>
              <Link to="/category/beauty" className="hover:text-orange-500 transition">Beauty</Link>
              <Link to="/category/sports" className="hover:text-orange-500 transition">Sports</Link>
              <Link to="/vendors" className="hover:text-orange-500 transition">Top Vendors</Link>
            </div>
          )}
        </div>

        <Link to="/vendors" className="hover:text-orange-500 transition">Vendors</Link>
        <Link to="/deals" className="hover:text-orange-500 transition">Deals</Link>
        <Link to="/about" className="hover:text-orange-500 transition">About</Link>
        <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>

        {/* Auth Buttons */}
        <div className="ml-auto flex gap-4">
          <Link
            to="/login"
            className="px-7 py-2 border border-gray-400 rounded-4xl hover:bg-orange-500 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-7 py-2 bg-orange-500 text-white rounded-4xl hover:bg-black transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden flex flex-col bg-white px-6 pb-4 text-lg gap-4 border-t border-gray-200 animate-fadeIn text-gray-700">

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-xl overflow-hidden w-full mt-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent px-4 py-3 outline-none"
            />
            <button className="px-4 hover:bg-orange-500 transition text-white bg-orange-400">
              <Search size={20} />
            </button>
          </div>

          <hr className="border-gray-300" />

          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/shop" className="hover:text-orange-500 transition">Shop</Link>
          <Link to="/vendors" className="hover:text-orange-500 transition">Vendors</Link>
          <Link to="/factory" className="hover:text-orange-500 transition">Factory</Link>
          <Link to="/about" className="hover:text-orange-500 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>

          {/* Auth */}
          <Link to="/login" className="hover:text-orange-500 transition">Login</Link>
          <Link to="/signup" className="hover:text-orange-500 transition">Sign Up</Link>
        </nav>
      )}
    </header>
  );
}
