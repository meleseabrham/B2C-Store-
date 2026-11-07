import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../common/ProductCard';

export default function NewArrivalsSection() {
  const { navigateTo } = useShop();
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#537993] mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Fresh Off The Line</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Just in: New arrivals
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Fresh silhouettes, smart hardware upgrades, and seasonal home pieces freshly added this week.
            </p>
          </div>

          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="text-sm font-semibold text-[#537993] hover:text-[#43647b] flex items-center gap-1 self-start sm:self-auto group"
          >
            <span>Browse all new drops</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 or 4 column grid of new items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

