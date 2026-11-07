import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, navigateTo } = useShop();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentColor = selectedColor || (product.colors && product.colors[0]);
  const currentSize = selectedSize || (product.sizes && product.sizes[0]);

  const handleAddToCart = () => {
    addToCart(product, quantity, currentColor, currentSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const handleFullDetails = () => {
    setQuickViewProduct(null);
    navigateTo('product-details', { productId: product.id });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery side */}
          <div className="p-6 bg-slate-50 flex flex-col justify-between">
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-inner mb-4">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-[#537993] shadow-md ring-2 ring-[#537993]/20' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#537993] bg-[#537993]/10 px-2.5 py-0.5 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-slate-700">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-black text-slate-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                    Save {product.discount}
                  </span>
                )}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {product.summary}
              </p>

              {/* Color Selector */}
              {product.colors && (
                <div className="mb-4">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                    Color: <span className="font-normal text-slate-500">{currentColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                          currentColor === color
                            ? 'border-[#537993] bg-[#537993] text-white shadow-sm'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector if available */}
              {product.sizes && (
                <div className="mb-6">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                    Size: <span className="font-normal text-slate-500">{currentSize}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-9 h-9 rounded-lg border text-xs font-semibold flex items-center justify-center transition-all ${
                          currentSize === size
                            ? 'border-[#537993] bg-[#537993] text-white'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity picker */}
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-semibold text-sm text-slate-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#537993] hover:bg-[#43647b] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Cart (${(product.price * quantity).toFixed(2)})
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={handleFullDetails}
                className="w-full text-center text-xs font-semibold text-[#537993] hover:text-[#3d596d] py-1 flex items-center justify-center gap-1"
              >
                View full specifications and reviews &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

