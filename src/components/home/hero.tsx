import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

// Example slides
const slides = [
  { img: banner2, cta: "/shop" },
  { img: banner, cta: "/category/electronics" },
  { img: banner3, cta: "/category/home" },
];

export default function EcommerceHero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1 : 1.05,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
          />

          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 bg-white/10">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              {/* Optional title if you want */}
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow-md"
            >
              {/* Optional subtitle */}
            </motion.p>
          </div>
        </motion.div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              idx === current ? "bg-orange-500 scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
