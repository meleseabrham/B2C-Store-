import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Check, Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, navigateTo, setQuickViewProduct, isWishlisted, toggleWishlist } = useShop();
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    navigateTo('product-details', { productId: product.id });
  };

  return (
    <div 
      onClick={() => navigateTo('product-details', { productId: product.id })}
      className="group relative bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Image Container with Badges & Quick View */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm text-white ${
              product.badge.includes('Best') || product.badge.includes('Top')
                ? 'bg-amber-600'
                : product.badge.includes('OFF') || product.discount
                ? 'bg-rose-600'
                : 'bg-[#537993]'
            }`}>
              {product.badge}
            </span>
          )}
          {product.discount && !product.badge?.includes('OFF') && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm bg-rose-500 text-white">
              {product.discount}
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-rose-500 shadow-sm transition-all hover:scale-110"
          aria-label="Wishlist"
        >
          <Heart 
            className={`w-3.5 h-3.5 transition-colors ${
              isWishlisted(product.id) ? 'fill-rose-500 text-rose-500' : 'text-slate-600'
            }`} 
          />
        </button>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={handleQuickView}
            className="bg-white/95 text-slate-800 hover:bg-white hover:text-[#42637b] px-4 py-2 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="capitalize font-medium tracking-wide text-[#537993]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-700">{product.rating}</span>
              <span className="text-slate-400 text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-semibold text-slate-800 text-sm sm:text-base line-clamp-2 group-hover:text-[#42637b] transition-colors leading-snug mb-2">
            {product.name}
          </h3>

          {/* Short summary */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
            {product.summary}
          </p>
        </div>

        {/* Price and Add to Cart Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-bold text-slate-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.stock <= 15 ? (
              <span className="text-[11px] text-amber-600 font-medium block">
                Only {product.stock} left in stock
              </span>
            ) : (
              <span className="text-[11px] text-emerald-600 font-medium block">
                In Stock & ready to ship
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
              addedAnimation
                ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                : 'bg-[#537993] hover:bg-[#43647b] text-white active:scale-95'
            }`}
            title="Add to Cart"
          >
            {addedAnimation ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

