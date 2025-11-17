


"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useProductStore from "@/store/storeProducts"

interface ProductType {
  _id: string
  productName: string
  productDescription: string
  productImageUrl: string
  price: number
  stock: number
  productStatus: string
  category?: string
}

const Product: React.FC = () => {
  const { products, loading, error, fetchProducts } = useProductStore()
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [showCategories, setShowCategories] = useState<boolean>(false)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const categories = ["All", ...new Set(products.map((p: ProductType) => p.category || "Uncategorized"))]

  const filteredProducts = products.filter((product: ProductType) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (loading)
    return (
      <div className="text-center py-20 text-orange-500 text-xl font-semibold animate-pulse">
        Loading products...
      </div>
    )

  if (error)
    return (
      <div className="text-center py-20 text-red-500 text-xl font-semibold">
        Error: {error}
      </div>
    )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 relative">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-bold text-orange-500 cursor-pointer"
          >
            ShopEase 🛍️
          </motion.h1>

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <nav className="hidden md:flex gap-6 text-gray-700 font-medium items-center relative">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="hover:text-orange-500 transition-colors flex items-center gap-1"
              >
                Categories
              </button>

              <AnimatePresence>
                {showCategories && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-48 overflow-hidden z-50"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat)
                          setShowCategories(false)
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-orange-100 text-gray-700"
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#products" className="hover:text-orange-500 transition-colors">Shop</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>

            {/* Profile Button */}
            <div className="relative">
              <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full hover:bg-orange-50 transition">
                <span>Profile</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <motion.div
        id="home"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-orange-500 text-white flex items-center justify-center py-32 px-4 overflow-hidden"
      >
        <img
          src=""
          alt="Ecommerce Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative text-center max-w-2xl">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 animate-pulse"
          >
            🛒 Discover Our Best Deals
          </motion.h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Browse top categories and find products you'll love ❤️
          </p>
          <a
            href="#products"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
          >
            Shop Now
          </a>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your products delivered at lightning speed.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment gateways for a safe shopping experience.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Best Prices</h3>
              <p className="text-gray-600">Enjoy unbeatable prices on all products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="about">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
              alt="About us"
              className="rounded-3xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About ShopEase</h2>
            <p className="text-gray-600 mb-4">
              ShopEase is your one-stop online shop for the latest products, best deals, and a seamless shopping experience. We prioritize quality, security, and speed for every customer.
            </p>
            <a
              href="#products"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-12">
        <div className="flex flex-wrap items-center justify-center gap-3 py-6 px-4 md:px-6 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-orange-100"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductType, index: number) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 transition hover:shadow-xl"
              >
                <div className="h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.productImageUrl}
                    alt={product.productName}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between h-52">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 truncate">{product.productName}</h2>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.productDescription}</p>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-orange-500 font-bold text-lg">${product.price}</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition">
                      Add to Cart
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Stock: {product.stock} | Status: {product.productStatus}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-20">No products found.</div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Alice", "Bob", "Charlie"].map((name, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <p className="text-gray-600 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Best shopping experience!"</p>
                <h3 className="text-orange-500 font-semibold">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-orange-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6 opacity-90">Get exclusive deals and updates straight to your inbox.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-full text-gray-800 w-full sm:w-auto flex-1 focus:outline-none"
          />
          <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Product





















