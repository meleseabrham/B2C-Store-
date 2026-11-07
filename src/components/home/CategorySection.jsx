import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/products';

export default function CategorySection() {
  const { navigateTo } = useShop();

  return (
    <section id="categories-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#537993] mb-2 block">
              Curated Collections
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Shop by category
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Explore meticulously tested gear and everyday goods designed with minimalism, utility, and timeless beauty.
            </p>
          </div>
          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="text-sm font-semibold text-[#537993] hover:text-[#43647b] flex items-center gap-1 group self-start sm:self-auto"
          >
            <span>View full catalog</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateTo('shop', { category: cat.id })}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/5] flex flex-col justify-end p-6 border border-slate-100"
            >
              {/* Background Image with Zoom on hover */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent group-hover:from-slate-950/95 transition-all"></div>

              {/* Card Content */}
              <div className="relative z-10 text-white">
                <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-brand-200 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-2">
                  {cat.itemCount}
                </span>
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-amber-200 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:underline underline-offset-4">
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

