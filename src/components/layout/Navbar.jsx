import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  Heart,
  Truck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES, PRODUCTS } from '../../data/products';

export default function Navbar() {
  const { 
    currentPage, 
    navigateTo, 
    totalItemCount, 
    searchQuery, 
    setSearchQuery,
    selectedCategory,
    wishlist,
    setIsWishlistOpen
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      navigateTo('shop', { search: localSearch.trim(), category: 'all' });
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top micro-announcement bar */}
      <div className="bg-[#42637b] text-brand-100 text-xs py-1.5 px-4 font-medium flex items-center justify-between border-b border-brand-400/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-[11px] text-white">
              <Sparkles className="w-3 h-3 text-amber-300" /> Limited Time
            </span>
            <span>Use code <strong className="text-white font-bold tracking-wide">SAVE20</strong> for 20% off all orders</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[12px]">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5" /> Free 2-day delivery on $50+
            </span>
            <span className="text-brand-300">|</span>
            <button 
              onClick={() => navigateTo('shop')} 
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Track Order
            </button>
            <span className="text-brand-300">|</span>
            <span className="text-white/90">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Exactly matching styleguide & screenshot 5 */}
      <nav className="bg-[#537993] text-white px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo - Cursive elegant typography matching wireframe screenshot */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => navigateTo('home')} 
              className="flex items-center gap-2 group text-left focus:outline-none"
            >
              <span className="font-script text-3xl md:text-4xl font-bold tracking-wide text-white drop-shadow-sm group-hover:opacity-90 transition-opacity">
                Logo
              </span>
              <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase bg-white/20 text-white font-semibold px-2 py-0.5 rounded ml-1">
                Store
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-medium">
              <button 
                onClick={() => navigateTo('home')}
                className={`py-1 transition-colors relative hover:text-white/80 ${
                  currentPage === 'home' ? 'text-white font-semibold' : 'text-white/90'
                }`}
              >
                Home
                {currentPage === 'home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></span>
                )}
              </button>

              <button 
                onClick={() => navigateTo('shop', { category: 'all', search: '' })}
                className={`py-1 transition-colors relative hover:text-white/80 ${
                  currentPage === 'shop' && selectedCategory === 'all' ? 'text-white font-semibold' : 'text-white/90'
                }`}
              >
                Shop
                {currentPage === 'shop' && selectedCategory === 'all' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></span>
                )}
              </button>

              {/* Categories Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCategoriesDropdownOpen(true)}
                onMouseLeave={() => setCategoriesDropdownOpen(false)}
              >
                <button 
                  onClick={() => navigateTo('shop')}
                  className="flex items-center gap-1 py-1 text-white/90 hover:text-white focus:outline-none"
                >
                  Categories
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>

                {categoriesDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white text-slate-800 rounded-xl shadow-2xl py-3 border border-slate-100 animate-fadeIn z-50">
                    <div className="px-4 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Featured Collections
                    </div>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          navigateTo('shop', { category: cat.id });
                          setCategoriesDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <span className="font-medium text-slate-800 group-hover:text-brand-600">
                            {cat.name}
                          </span>
                          <span className="block text-xs text-slate-400">{cat.itemCount}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-600 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                    <div className="border-t border-slate-100 mt-2 pt-2 px-4">
                      <button
                        onClick={() => {
                          navigateTo('shop', { category: 'all' });
                          setCategoriesDropdownOpen(false);
                        }}
                        className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1"
                      >
                        View all products &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 py-1 text-white/90 hover:text-white focus:outline-none">
                  About
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-52 bg-white text-slate-800 rounded-xl shadow-xl py-2 border border-slate-100 z-50">
                    <button 
                      onClick={() => {
                        navigateTo('home');
                        const el = document.getElementById('testimonials-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        setAboutDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                    >
                      Our Story & Values
                    </button>
                    <button 
                      onClick={() => {
                        navigateTo('home');
                        const el = document.getElementById('testimonials-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        setAboutDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                    >
                      Customer Reviews
                    </button>
                    <button 
                      onClick={() => {
                        navigateTo('home');
                        const el = document.getElementById('footer-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        setAboutDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                    >
                      Contact Support
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Action Icons & Search Button (Matches Wireframe) */}
          <div className="flex items-center gap-3">
            {/* Desktop Search Button - Exact match to wireframe */}
            <div className="hidden md:flex items-center relative">
              {searchOpen ? (
                <div className="relative">
                  <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                    <input
                      type="text"
                      value={localSearch}
                      onChange={(e) => setLocalSearch(e.target.value)}
                      placeholder="Search products..."
                      autoFocus
                      className="w-72 pl-9 pr-8 py-1.5 text-sm bg-white text-slate-800 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-inner"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3" />
                    <button
                      type="button"
                      onClick={() => { setSearchOpen(false); setLocalSearch(''); }}
                      className="absolute right-2.5 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </form>

                  {/* Autocomplete Suggestions Dropdown */}
                  {localSearch.trim().length > 1 && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 text-slate-800 animate-fadeIn">
                      <div className="p-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Search Matches
                      </div>
                      <div className="max-h-60 overflow-y-auto divide-y divide-slate-100">
                        {PRODUCTS.filter(p => 
                          p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
                          p.category.toLowerCase().includes(localSearch.toLowerCase())
                        ).slice(0, 4).map(prod => (
                          <div
                            key={prod.id}
                            onClick={() => {
                              navigateTo('product-details', { productId: prod.id });
                              setSearchOpen(false);
                              setLocalSearch('');
                            }}
                            className="p-2.5 flex items-center gap-3 hover:bg-slate-50 cursor-pointer transition-colors"
                          >
                            <img src={prod.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover bg-slate-100" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-800 truncate">{prod.name}</p>
                              <p className="text-[11px] text-[#537993] font-bold">${prod.price.toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 bg-slate-50 text-center border-t border-slate-100">
                        <button
                          onClick={handleSearchSubmit}
                          className="text-xs font-bold text-[#537993] hover:underline"
                        >
                          View all matching results &rarr;
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="bg-white text-slate-800 hover:bg-slate-100 font-medium px-4 py-1.5 rounded-lg text-sm transition-all shadow-sm flex items-center gap-2 hover:shadow"
                >
                  <Search className="w-4 h-4 text-slate-500" />
                  <span>Search</span>
                </button>
              )}
            </div>

            {/* Mobile search icon button */}
            <button
              onClick={() => {
                if (currentPage !== 'shop') {
                  navigateTo('shop');
                }
                setSearchOpen(!searchOpen);
              }}
              className="md:hidden p-2 text-white/90 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => navigateTo('cart')}
              className="relative flex items-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 px-3.5 py-1.5 rounded-lg text-white font-medium text-sm transition-all"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold leading-none text-[#537993] bg-white rounded-full shadow-sm">
                {totalItemCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input dropdown */}
        {searchOpen && (
          <div className="md:hidden pt-3 pb-1">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search products by keyword..."
                className="w-full pl-10 pr-10 py-2 rounded-lg bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <button 
                type="submit" 
                className="absolute right-3 top-2.5 text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded"
              >
                Go
              </button>
            </form>
          </div>
        )}
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 text-white backdrop-blur-md border-b border-slate-800 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                navigateTo('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg ${
                currentPage === 'home' ? 'bg-white/20 text-white' : 'text-slate-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigateTo('shop', { category: 'all' });
                setMobileMenuOpen(false);
              }}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg ${
                currentPage === 'shop' && selectedCategory === 'all' ? 'bg-white/20 text-white' : 'text-slate-200'
              }`}
            >
              Shop All Products
            </button>

            <div className="pt-2 border-t border-white/10">
              <span className="text-xs uppercase font-semibold text-slate-400 px-3 tracking-wider">
                Categories
              </span>
              <div className="mt-2 space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      navigateTo('shop', { category: cat.id });
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg flex justify-between items-center"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-slate-400">{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col space-y-2">
              <button
                onClick={() => {
                  navigateTo('cart');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 bg-[#537993] text-white rounded-lg text-center font-medium flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                View Cart ({totalItemCount} items)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

