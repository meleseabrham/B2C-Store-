import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  Tag, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function CartPage() {
  const {
    cart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartDiscountAmount,
    discountPercent,
    shippingFee,
    freeShippingThreshold,
    estimatedTax,
    cartTotal,
    navigateTo,
    applyPromoCode,
    removePromoCode,
    appliedPromoName,
    promoError,
    user,
    openAuthModal
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  const handleCheckoutClick = () => {
    if (user) {
      navigateTo('checkout');
    } else {
      openAuthModal('login', 'checkout');
    }
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput.trim()) {
      const ok = applyPromoCode(couponInput);
      if (ok) setCouponInput('');
    }
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  if (cart.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[70vh] py-16 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center bg-white p-10 rounded-3xl border border-slate-200/80 shadow-md">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5 text-slate-400">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Your shopping cart is empty
          </h2>
          <p className="text-sm text-slate-500 mb-8">
            Looks like you haven't added anything to your cart yet. Explore our curated collections to get started!
          </p>
          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="w-full py-3.5 px-6 rounded-xl bg-[#537993] hover:bg-[#43647b] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Start Shopping Now</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header with Flow Steps */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="font-bold text-[#537993]">1. Shopping Cart</span>
            <span>&rarr;</span>
            <span>2. Checkout</span>
            <span>&rarr;</span>
            <span>3. Order Confirmation</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Shopping Cart ({cart.reduce((a, b) => a + b.quantity, 0)} items)
            </h1>
            <button
              onClick={clearCart}
              className="text-xs text-slate-400 hover:text-rose-600 transition-colors self-start sm:self-auto flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear cart</span>
            </button>
          </div>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-white rounded-2xl p-4 mb-8 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <div className="flex items-center gap-2 text-slate-700">
              <Truck className="w-4 h-4 text-[#537993]" />
              {amountNeededForFreeShipping === 0 ? (
                <span className="text-emerald-700 font-bold">
                  Congratulations! You've unlocked FREE Standard Shipping!
                </span>
              ) : (
                <span>
                  Add <strong className="text-[#537993]">${amountNeededForFreeShipping.toFixed(2)}</strong> more to qualify for <strong>FREE Shipping</strong>!
                </span>
              )}
            </div>
            <span className="text-slate-400">{Math.round(freeShippingPercent)}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                amountNeededForFreeShipping === 0 ? 'bg-emerald-500' : 'bg-[#537993]'
              }`}
              style={{ width: `${freeShippingPercent}%` }}
            ></div>
          </div>
        </div>

        {/* 2-Column Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Cart Items List (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
              {cart.map((item) => (
                <div key={item.cartId} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  {/* Thumbnail */}
                  <div
                    onClick={() => navigateTo('product-details', { productId: item.product.id })}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 cursor-pointer border border-slate-100"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 w-full text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#537993]">
                          {item.product.category}
                        </span>
                        <h3
                          onClick={() => navigateTo('product-details', { productId: item.product.id })}
                          className="font-bold text-slate-900 text-sm sm:text-base hover:text-[#537993] cursor-pointer transition-colors"
                        >
                          {item.product.name}
                        </h3>

                        {/* Selected Variants */}
                        <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 mt-1">
                          {item.selectedColor && (
                            <span>Color: <strong>{item.selectedColor}</strong></span>
                          )}
                          {item.selectedSize && (
                            <span>Size: <strong>{item.selectedSize}</strong></span>
                          )}
                        </div>
                      </div>

                      {/* Unit Price */}
                      <div className="text-right sm:block hidden">
                        <span className="font-bold text-slate-900 text-base">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[11px] text-slate-400">
                            ${item.product.price.toFixed(2)} each
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector & Remove Button */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                      <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                        <button
                          onClick={() => updateCartQuantity(item.cartId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-xs font-bold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.cartId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Mobile subtotal */}
                      <span className="sm:hidden font-bold text-slate-900 text-sm">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping Button */}
            <div className="pt-2">
              <button
                onClick={() => navigateTo('shop', { category: 'all' })}
                className="text-xs font-semibold text-[#537993] hover:text-[#3d596d] flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Continue Shopping for More Essentials</span>
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Promo Code Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#537993]" />
                Have a Promo Code?
              </h3>

              {appliedPromoName ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between text-xs text-emerald-800">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Promo <strong>{appliedPromoName}</strong> applied ({discountPercent}% Off)</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-slate-500 hover:text-rose-600 underline font-medium"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Try 'SAVE20' or 'WELCOME10'"
                      className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20 uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#537993] hover:bg-[#43647b] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {promoError}
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Order Totals Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                Order Summary
              </h3>

              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="font-semibold text-slate-900">${cartSubtotal.toFixed(2)}</span>
                </div>

                {cartDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${cartDiscountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-slate-900">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `$${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Sales Tax (8%)</span>
                  <span className="font-semibold text-slate-900">${estimatedTax.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                <span className="text-sm font-bold text-slate-900">Total</span>
                <span className="text-2xl font-black text-slate-900">${cartTotal.toFixed(2)}</span>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                onClick={handleCheckoutClick}
                className="w-full py-4 rounded-xl bg-[#537993] hover:bg-[#43647b] active:bg-[#344f62] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>{user ? 'Proceed to Checkout' : 'Sign In & Proceed to Checkout'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Safe 256-Bit SSL Encrypted Checkout</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

