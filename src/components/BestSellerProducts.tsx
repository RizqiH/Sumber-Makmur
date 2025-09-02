'use client';

import ProductCard from './ProductCard';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const bestSellerProducts = [
  {
    id: 7,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Hoodies",
    isBestSeller: true,
  },
  {
    id: 8,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Jeans",
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Jackets",
    isBestSeller: true,
  },
  {
    id: 10,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Shoes",
    isBestSeller: true,
  },
  {
    id: 11,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Sweaters",
    isBestSeller: true,
  },
  {
    id: 12,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Polo",
    isBestSeller: true,
  },
];

export default function BestSellerProducts() {
  const { containerRef, visibleItems } = useStaggeredAnimation(bestSellerProducts.length, 200);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our most popular items loved by customers worldwide
          </p>
          <div className="w-24 h-1 bg-neutral-900 mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
          {bestSellerProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ease-out ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-semibold py-4 px-8 rounded-sm transition-all duration-300 transform hover:scale-105">
            Shop Best Sellers
          </button>
        </div>
      </div>
    </section>
  );
}
