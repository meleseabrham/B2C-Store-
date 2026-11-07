import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ChevronDown, 
  ArrowUpDown, 
  Sparkles, 
  Truck, 
  Tag, 
  Check, 
  RotateCcw,
  Grid3X3,
  Grid2X2
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import ProductCard from '../common/ProductCard';

export default function ShopPage() {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    navigateTo 
  } = useShop();

  // Local filter states
  const [localSearch, setLocalSearch] = useState(searchQuery || '');
  const [sortBy, setSortBy] = useState('popularity'); // 'popularity', 'price-low', 'price-high', 'newest', 'rating'
  const [maxPrice, setMaxPrice] = useState(250);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [gridCols, setGridCols] = useState(3); // 3 or 4 columns on large screens

  // Synchronize incoming search queries
  useMemo(() => {
    if (searchQuery !== localSearch) {
      setLocalSearch(searchQuery);
    }
  }, [searchQuery]);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Search keyword filter
      if (localSearch.trim()) {
        const query = localSearch.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.summary.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }

      // In-stock filter
      if (inStockOnly && product.stock <= 0) {
        return false;
      }

      // On-sale filter
      if (onSaleOnly && !product.discount) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: popularity / best seller first
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [selectedCategory, localSearch, maxPrice, minRating, inStockOnly, onSaleOnly, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setLocalSearch('');
    setSearchQuery('');
    setMaxPrice(250);
    setMinRating(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setSortBy('popularity');
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    localSearch.trim() !== '' || 
    maxPrice < 250 || 
    minRating > 0 || 
    inStockOnly || 
    onSaleOnly;

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Title */}
        <div className="mb-6">
          <nav className="text-xs text-slate-500 mb-2 flex items-center gap-1.5">
            <button onClick={() => navigateTo('home')} className="hover:text-slate-800 transition-colors">
              Home
            </button>
            <span>/</span>
            <span className="text-slate-800 font-semibold capitalize">
              {selectedCategory === 'all' ? 'All Products' : selectedCategory}
            </span>
            {localSearch && (
              <>
                <span>/</span>
                <span className="text-slate-600 italic">"{localSearch}"</span>
              </>
            )}
          </nav>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight capitalize">
                {selectedCategory === 'all' ? 'Browse All Products' : `${selectedCategory} Collection`}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing <span className="font-bold text-slate-800">{filteredProducts.length}</span> results tailored for modern lifestyles
              </p>
            </div>

            {/* View Switcher & Mobile Filter Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-xs"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#537993]" />
                Filters {hasActiveFilters && '(Active)'}
              </button>

              <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-xs">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-1.5 rounded-lg ${gridCols === 3 ? 'bg-slate-100 text-[#537993]' : 'text-slate-400'}`}
                  title="3 Columns"
                >
                  <Grid2X2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-1.5 rounded-lg ${gridCols === 4 ? 'bg-slate-100 text-[#537993]' : 'text-slate-400'}`}
                  title="4 Columns"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>

              {/* Sorting Dropdown */}
              <div className="relative">
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 shadow-xs">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline text-slate-400">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer text-xs pr-1"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filter Pills Bar */}
        {hasActiveFilters && (
          <div className="bg-white rounded-xl p-3 mb-6 border border-slate-200/80 flex flex-wrap items-center gap-2 text-xs shadow-2xs">
            <span className="font-semibold text-slate-500">Active Filters:</span>

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-[#537993]/10 text-[#537993] font-medium px-2.5 py-1 rounded-lg">
                Category: <strong className="capitalize">{selectedCategory}</strong>
                <button onClick={() => setSelectedCategory('all')} className="hover:text-slate-900 ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {localSearch && (
              <span className="inline-flex items-center gap-1 bg-[#537993]/10 text-[#537993] font-medium px-2.5 py-1 rounded-lg">
                Query: "<strong>{localSearch}</strong>"
                <button onClick={() => { setLocalSearch(''); setSearchQuery(''); }} className="hover:text-slate-900 ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {maxPrice < 250 && (
              <span className="inline-flex items-center gap-1 bg-[#537993]/10 text-[#537993] font-medium px-2.5 py-1 rounded-lg">
                Under: <strong>${maxPrice}</strong>
                <button onClick={() => setMaxPrice(250)} className="hover:text-slate-900 ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {minRating > 0 && (
              <span className="inline-flex items-center gap-1 bg-[#537993]/10 text-[#537993] font-medium px-2.5 py-1 rounded-lg">
                Rating: <strong>{minRating}+ Stars</strong>
                <button onClick={() => setMinRating(0)} className="hover:text-slate-900 ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {onSaleOnly && (
              <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 font-medium px-2.5 py-1 rounded-lg">
                On Sale Only
                <button onClick={() => setOnSaleOnly(false)} className="hover:text-rose-900 ml-1">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={resetFilters}
              className="text-slate-500 hover:text-rose-600 underline underline-offset-2 ml-auto font-medium"
            >
              Reset All
            </button>
          </div>
        )}

        {/* 2-Column Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Left Sidebar Filters */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            
            {/* Search Filter Box */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#537993]" />
                Search Products
              </h3>
              <div className="relative">
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => {
                    setLocalSearch(e.target.value);
                    setSearchQuery(e.target.value);
                  }}
                  placeholder="Keyword, model, color..."
                  className="w-full pl-8 pr-7 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20 focus:border-[#537993]"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                {localSearch && (
                  <button
                    onClick={() => { setLocalSearch(''); setSearchQuery(''); }}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Box */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Categories
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#537993] text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>All Categories</span>
                  <span className={`text-[11px] ${selectedCategory === 'all' ? 'text-white/80' : 'text-slate-400'}`}>
                    {PRODUCTS.length}
                  </span>
                </button>

                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'bg-[#537993] text-white font-semibold shadow-xs'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Slider Filter */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Price Budget
                </h3>
                <span className="text-xs font-bold text-[#537993]">
                  Up to ${maxPrice}
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="250"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#537993] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>$30 min</span>
                <span>$140</span>
                <span>$250 max</span>
              </div>
            </div>

            {/* Special Toggles */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                Preferences
              </h3>

              <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onSaleOnly}
                  onChange={(e) => setOnSaleOnly(e.target.checked)}
                  className="rounded text-[#537993] focus:ring-[#537993] w-4 h-4 cursor-pointer"
                />
                <span className="font-medium">On Sale / Discounted only</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-[#537993] focus:ring-[#537993] w-4 h-4 cursor-pointer"
                />
                <span className="font-medium">In-Stock items only</span>
              </label>
            </div>

            {/* Side Promo Card */}
            <div className="bg-gradient-to-br from-[#244255] to-[#3b6582] text-white rounded-2xl p-5 shadow-sm text-center">
              <Truck className="w-7 h-7 mx-auto mb-2 text-amber-300" />
              <h4 className="font-bold text-sm mb-1">Free 2-Day Shipping</h4>
              <p className="text-xs text-slate-200 mb-3">
                Automatically applied to all carts over $50 at checkout!
              </p>
              <span className="inline-block bg-white/20 text-white font-mono text-[11px] px-2.5 py-1 rounded-md font-bold">
                NO CODE NEEDED
              </span>
            </div>

          </aside>

          {/* Main Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  No matching products found
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-6">
                  We couldn't find any products matching your specific filters. Try expanding your price limit or clearing the search query.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-xl bg-[#537993] text-white text-xs font-semibold hover:bg-[#43647b] transition-all shadow-sm"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3'} gap-6`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Bottom Promo CTA Banner - Directly from wireframe */}
            <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Tag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Need Help Finding The Right Item?
                  </h3>
                  <p className="text-xs text-slate-500">
                    Our team of stylists and product specialists are on live chat 24/7 to help you choose.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigateTo('cart')}
                className="px-5 py-2.5 bg-[#537993] hover:bg-[#43647b] text-white rounded-xl text-xs font-semibold transition-all shadow-sm flex-shrink-0"
              >
                Review Your Cart
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Mobile Filters Slide-over / Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-white min-h-screen p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#537993]" />
                  Filter Products
                </h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category selection */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                  Category
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${
                      selectedCategory === 'all'
                        ? 'border-[#537993] bg-[#537993] text-white'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    All ({PRODUCTS.length})
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${
                        selectedCategory === cat.id
                          ? 'border-[#537993] bg-[#537993] text-white'
                          : 'border-slate-200 text-slate-700'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max price slider */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Max Price:</span>
                  <span className="text-[#537993]">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="250"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#537993]"
                />
              </div>

              {/* Toggles */}
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={(e) => setOnSaleOnly(e.target.checked)}
                    className="rounded text-[#537993] w-4 h-4"
                  />
                  <span>On Sale / Discounted only</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded text-[#537993] w-4 h-4"
                  />
                  <span>In-stock only</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={resetFilters}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#537993] text-white text-xs font-semibold shadow-sm"
              >
                Apply Filters ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

