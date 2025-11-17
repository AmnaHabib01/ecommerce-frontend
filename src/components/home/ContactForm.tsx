// ContactSection.tsx
import React, { useState } from "react";
import contact from "../../assets/contact.jpg";
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left Side - Dark Ecommerce Image */}
        <div className="md:w-1/2 bg-black relative">
          <img
            src={contact}
            alt="Ecommerce contact"
            className="w-full h-full object-cover brightness-75"
          />
          
        </div>

        {/* Right Side - Light Form */}
        <div className="md:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-500 mb-6">
            Fill out the form and we'll respond as quickly as possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all duration-300"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all duration-300 resize-none"
            />

            <button
              type="submit"
              className="mt-2 bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-black shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
