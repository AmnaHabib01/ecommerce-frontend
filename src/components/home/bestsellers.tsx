import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
}

interface BestSellersProps {
  products: Product[];
}

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-12 text-center">
          Best Sellers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-orange-500/30 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/50 duration-300"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  {product.title}
                </h3>
                <p className="text-white text-lg mb-4">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto bg-white text-black font-bold px-5 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart size={20} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
