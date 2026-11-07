import React, { useState } from 'react';
import { Search, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/products';

export default function SearchFeatureSection() {
  const { navigateTo } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    navigateTo('shop', {
      search: searchTerm,
      category: selectedCat
    });
  };

  const popularSearches = [
    'Wireless Headphones',
    'Ceramic Carafe',
    'Hoodie',
    'Backpack',
    'Desk Lamp',
    'Silk Pillowcase'
  ];

  return (
    <section className="py-12 bg-surface-sand border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section title & subtitle matching wireframe */}
        <div className="max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[#537993] mb-2 block">
            Smart Product Finder
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Find what you need, fast
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Search across our entire catalog of curated electronics, apparel, lifestyle, and home gear.
          </p>
        </div>

        {/* Big Search Bar */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-6">
          <div className="bg-white p-2 rounded-2xl shadow-md border border-slate-200 flex flex-col sm:flex-row items-center gap-2">
            
            {/* Category dropdown within search */}
            <div className="w-full sm:w-auto border-b sm:border-b-0 sm:border-r border-slate-200 px-3 py-1">
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-slate-700 py-1.5 focus:outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Keyword Input */}
            <div className="flex-1 w-full relative flex items-center px-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products by brand, keyword, color, or style..."
                className="w-full pl-8 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#537993] hover:bg-[#43647b] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span>Search Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-slate-400" /> Popular:
          </span>
          {popularSearches.map((term) => (
            <button
              key={term}
              onClick={() => navigateTo('shop', { search: term, category: 'all' })}
              className="bg-white hover:bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 transition-colors shadow-2xs"
            >
              {term}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

