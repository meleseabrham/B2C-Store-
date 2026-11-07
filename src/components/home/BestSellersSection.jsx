import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../common/ProductCard';

export default function BestSellersSection() {
  const { navigateTo } = useShop();
  // Filter best sellers (first 8 items)
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 8);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#537993] mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Top picks & best-sellers
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Our most-loved, highest-rated essentials tested and adored by shoppers worldwide.
            </p>
          </div>

          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="text-sm font-semibold text-[#537993] hover:text-[#43647b] flex items-center gap-1 self-start sm:self-auto group"
          >
            <span>See all {PRODUCTS.length} items</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4x2 Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

