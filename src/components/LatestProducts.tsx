'use client';

import ProductCard from './ProductCard';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const latestProducts = [
  {
    id: 1,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "T-Shirts",
    isNew: true,
  },
  {
    id: 2,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Jackets",
    isNew: true,
  },
  {
    id: 3,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Dresses",
    isNew: true,
  },
  {
    id: 4,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Shirts",
    isNew: true,
  },
  {
    id: 5,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Pants",
    isNew: true,
  },
  {
    id: 6,
    name: "Gamis Pink",
    price: 90000,
    image: "/image/Product-1.jpg",
    category: "Blazers",
    isNew: true,
  },
];

export default function LatestProducts() {
  const { containerRef, visibleItems } = useStaggeredAnimation(latestProducts.length, 200);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Latest Products
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our newest arrivals featuring the latest trends and timeless classics
          </p>
          <div className="w-24 h-1 bg-neutral-900 mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
          {latestProducts.map((product, index) => (
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
          <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-4 px-8 rounded-sm transition-all duration-300 transform hover:scale-105">
            View All Latest Products
          </button>
        </div>
      </div>
    </section>
  );
}
