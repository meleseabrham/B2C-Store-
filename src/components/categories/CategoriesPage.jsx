import React from 'react';
import { ArrowRight, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES, PRODUCTS } from '../../data/products';

export default function CategoriesPage() {
  const { navigateTo } = useShop();

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1.5">
          <button onClick={() => navigateTo('home')} className="hover:text-slate-800 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Product Categories</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#537993] mb-2 block">
            Curated Collections
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore All Categories
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Meticulously tested essentials, apparel, audio hardware, and home living collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CATEGORIES.map((cat) => {
            const sampleProducts = PRODUCTS.filter((p) => p.category === cat.id).slice(0, 3);
            return (
              <div
                key={cat.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-200 bg-white/20 px-2.5 py-0.5 rounded-full mb-1.5 inline-block">
                        {cat.itemCount}
                      </span>
                      <h2 className="text-2xl font-bold text-white">{cat.name}</h2>
                    </div>
                    <button
                      onClick={() => navigateTo('shop', { category: cat.id })}
                      className="px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold shadow-md hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                    >
                      <span>Browse</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Description & Sample Products */}
                <div className="p-6 sm:p-7 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Popular In This Collection:
                    </span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {sampleProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => navigateTo('product-details', { productId: p.id })}
                          className="bg-slate-50 p-2 rounded-xl border border-slate-200/70 hover:border-[#537993] cursor-pointer transition-colors"
                        >
                          <img src={p.images[0]} alt="" className="w-full aspect-square object-cover rounded-lg mb-1" />
                          <p className="text-[11px] font-semibold text-slate-800 truncate">{p.name}</p>
                          <p className="text-[10px] font-bold text-[#537993]">${p.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
