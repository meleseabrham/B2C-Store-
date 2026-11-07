import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export default function WishlistModal() {
  const { 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    isWishlistOpen, 
    setIsWishlistOpen,
    navigateTo 
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white min-h-screen p-6 flex flex-col justify-between shadow-2xl animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h2 className="font-bold text-lg text-slate-900">
                Your Saved Items ({wishlistedProducts.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-300">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">
                Your wishlist is empty
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                Tap the heart on any product card to save items you love for later.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigateTo('shop');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#537993] text-white text-xs font-semibold hover:bg-[#43647b] transition-all shadow-sm"
              >
                Explore Products
              </button>
            </div>
          ) : (
            <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
              {wishlistedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3.5 group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-white flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigateTo('product-details', { productId: product.id });
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <h4 
                      onClick={() => {
                        setIsWishlistOpen(false);
                        navigateTo('product-details', { productId: product.id });
                      }}
                      className="text-xs font-bold text-slate-800 truncate cursor-pointer hover:text-[#537993]"
                    >
                      {product.name}
                    </h4>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">
                      ${product.price.toFixed(2)}
                    </span>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="px-2.5 py-1 bg-[#537993] hover:bg-[#43647b] text-white rounded-lg text-[11px] font-semibold flex items-center gap-1 shadow-2xs"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-[11px] text-slate-400 hover:text-rose-600 flex items-center gap-0.5"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                wishlistedProducts.forEach((p) => addToCart(p, 1));
                setIsWishlistOpen(false);
                navigateTo('cart');
              }}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <span>Add All to Cart</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
