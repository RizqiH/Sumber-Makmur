'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import MobileBottomNav from '../../components/MobileBottomNav';

const allProducts = [
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

const categories = ["All", "T-Shirts", "Jackets", "Dresses", "Shirts", "Pants", "Blazers", "Hoodies", "Jeans", "Shoes", "Sweaters", "Polo"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = allProducts.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
              Shop Collection
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover our complete range of fashion essentials
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Categories - Desktop */}
            <div className="hidden lg:flex items-center space-x-4 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-sm font-medium whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-full flex items-center justify-between bg-white px-4 py-3 rounded-sm border border-neutral-300 text-black"
              >
                <span className="font-medium">
                  Filter & Sort {selectedCategory !== "All" && `(${selectedCategory})`}
                </span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${filterOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-neutral-600 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className=" text-black bg-white border border-neutral-300 rounded-sm px-3 py-2 focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {filterOpen && (
            <div className="lg:hidden mt-4 p-4 bg-white rounded-sm border border-neutral-300">
              <h3 className="font-semibold mb-3 text-black">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setFilterOpen(false);
                    }}
                    className={`px-3 py-2 rounded-sm text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-neutral-600">
              Showing {sortedProducts.length} products
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <MobileBottomNav />
    </div>
  );
}
