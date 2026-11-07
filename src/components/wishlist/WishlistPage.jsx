import React from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Trash2, 
  ArrowLeft, 
  ArrowRight, 
  Star, 
  Check, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../common/ProductCard';

export default function WishlistPage() {
  const { 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    navigateTo, 
    showToast 
  } = useShop();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleAddAllToCart = () => {
    wishlistedProducts.forEach((p) => addToCart(p, 1));
    showToast(`Added all ${wishlistedProducts.length} items to your shopping cart!`);
    navigateTo('cart');
  };

  const handleClearAll = () => {
    wishlist.forEach((id) => toggleWishlist(id));
    showToast('Wishlist cleared', 'info');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1.5">
          <button onClick={() => navigateTo('home')} className="hover:text-slate-800 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">
            My Wishlist ({wishlistedProducts.length})
          </span>
        </nav>

        {/* Page Title & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#537993] mb-1">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Saved For Later</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              My Saved Wishlist
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {wishlistedProducts.length} items saved. Keep track of products you want to purchase later.
            </p>
          </div>

          {wishlistedProducts.length > 0 && (
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                onClick={handleClearAll}
                className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Wishlist</span>
              </button>

              <button
                onClick={handleAddAllToCart}
                className="px-6 py-2.5 rounded-xl bg-[#537993] hover:bg-[#43647b] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add All to Cart</span>
              </button>
            </div>
          )}
        </div>

        {/* Wishlist Items Content */}
        {wishlistedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200/80 shadow-xs max-w-xl mx-auto my-12">
            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-5 text-rose-400">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mb-8 leading-relaxed">
              Explore our wide selection of quality products. Click the heart icon on any product to save it here for later.
            </p>
            <button
              onClick={() => navigateTo('shop', { category: 'all' })}
              className="px-8 py-3.5 rounded-xl bg-[#537993] hover:bg-[#43647b] text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore Products in Store</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
