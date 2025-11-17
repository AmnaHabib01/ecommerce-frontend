// DealsSection.tsx
import React from "react";
import { ShoppingCart } from "lucide-react";

interface Deal {
  id: number;
  title: string;
  description: string;
  price: string;
  img: string;
}

interface DealsSectionProps {
  deals: Deal[];
}

const DealsSection: React.FC<DealsSectionProps> = ({ deals }) => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-12 text-center animate-pulse">
          Hot Deals & Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-600/50 transform transition-transform hover:scale-105 duration-300"
            >
              <img
                src={deal.img}
                alt={deal.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full bg-linear-to-t from-black/80 via-black/60 to-transparent absolute bottom-0 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">{deal.title}</h3>
                <div className="flex items-center justify-between">
                  <button className="bg-orange-300 hover:bg-orange-600 text-black font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                    <ShoppingCart size={18} /> Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
