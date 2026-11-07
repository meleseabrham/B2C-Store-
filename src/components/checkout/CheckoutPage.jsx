import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  ArrowLeft, 
  Check, 
  Truck, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function CheckoutPage() {
  const {
    cart,
    cartSubtotal,
    cartDiscountAmount,
    discountPercent,
    shippingFee,
    estimatedTax,
    cartTotal,
    navigateTo,
    clearCart,
    setLastOrder,
    showToast
  } = useShop();

  // Form states
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 392-8812',
    address: '742 Evergreen Terrace',
    apartment: 'Apt 4B',
    city: 'Springfield',
    state: 'OR',
    zipCode: '97477',
    country: 'United States',
    paymentMethod: 'card', // 'card', 'paypal', 'applepay', 'cod'
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '883',
    saveInfo: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      showToast('Your cart is empty!', 'error');
      navigateTo('shop');
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement processing
    setTimeout(() => {
      const orderNumber = `AUR-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderRecord = {
        orderNumber,
        date: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        estimatedDelivery: 'Nov 12, 2026 – Nov 14, 2026',
        items: [...cart],
        subtotal: cartSubtotal,
        discount: cartDiscountAmount,
        discountPercent,
        shippingFee,
        tax: estimatedTax,
        total: cartTotal,
        customer: { ...formData }
      };

      setLastOrder(orderRecord);
      clearCart();
      setIsSubmitting(false);
      navigateTo('order-confirmation');
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[60vh] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl text-center shadow-sm max-w-sm">
          <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-slate-800 mb-1">Your cart is empty</h2>
          <p className="text-xs text-slate-500 mb-4">Please add products before checking out.</p>
          <button
            onClick={() => navigateTo('shop')}
            className="w-full py-2.5 rounded-xl bg-[#537993] text-white text-xs font-semibold"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <button onClick={() => navigateTo('cart')} className="hover:text-slate-800">
              1. Shopping Cart
            </button>
            <span>&rarr;</span>
            <span className="font-bold text-[#537993]">2. Checkout</span>
            <span>&rarr;</span>
            <span>3. Order Confirmation</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Secure Checkout
          </h1>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 Columns: Customer Info, Shipping Address, Payment Method */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Customer Information Form (Wireframe Section) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#537993] text-white text-xs flex items-center justify-center font-bold">
                      1
                    </span>
                    Customer Information
                  </h2>
                  <span className="text-xs text-slate-400">Required fields *</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Shipping Address Form (Wireframe Section) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#537993] text-white text-xs flex items-center justify-center font-bold">
                      2
                    </span>
                    Shipping Address
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Free Standard Shipping</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address or P.O. Box"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Apartment, Suite, Unit (Optional)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      placeholder="Apartment, suite, unit, building, floor"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        State / Province *
                      </label>
                      <input
                        type="text"
                        required
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        ZIP / Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Payment Method Selection (Wireframe Section) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#537993] text-white text-xs flex items-center justify-center font-bold">
                      3
                    </span>
                    Payment Method
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>256-Bit Encrypted</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {/* Credit Card Option */}
                  <label className={`block rounded-2xl border p-4 cursor-pointer transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'border-[#537993] bg-[#537993]/5 ring-1 ring-[#537993]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleChange}
                          className="text-[#537993] focus:ring-[#537993]"
                        />
                        <span className="font-semibold text-xs text-slate-800">
                          Credit / Debit Card
                        </span>
                      </div>
                      <div className="flex gap-1.5 text-xs font-mono font-bold text-slate-400">
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded">VISA</span>
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded">MC</span>
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded">AMEX</span>
                      </div>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="mt-4 pt-4 border-t border-slate-200/60 space-y-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Card Number
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                              Expiration Date
                            </label>
                            <input
                              type="text"
                              name="cardExp"
                              value={formData.cardExp}
                              onChange={handleChange}
                              placeholder="MM/YY"
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                              Security Code (CVC)
                            </label>
                            <input
                              type="text"
                              name="cardCvc"
                              value={formData.cardCvc}
                              onChange={handleChange}
                              placeholder="CVC"
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </label>

                  {/* PayPal Option */}
                  <label className={`block rounded-2xl border p-4 cursor-pointer transition-all ${
                    formData.paymentMethod === 'paypal'
                      ? 'border-[#537993] bg-[#537993]/5 ring-1 ring-[#537993]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleChange}
                          className="text-[#537993]"
                        />
                        <span className="font-semibold text-xs text-slate-800">
                          PayPal Express Checkout
                        </span>
                      </div>
                      <span className="font-bold text-xs text-sky-700 italic">PayPal</span>
                    </div>
                  </label>

                  {/* Apple Pay Option */}
                  <label className={`block rounded-2xl border p-4 cursor-pointer transition-all ${
                    formData.paymentMethod === 'applepay'
                      ? 'border-[#537993] bg-[#537993]/5 ring-1 ring-[#537993]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="applepay"
                          checked={formData.paymentMethod === 'applepay'}
                          onChange={handleChange}
                          className="text-[#537993]"
                        />
                        <span className="font-semibold text-xs text-slate-800">
                          Apple Pay / Google Pay
                        </span>
                      </div>
                      <span className="font-semibold text-xs text-slate-800">Pay</span>
                    </div>
                  </label>
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    className="rounded text-[#537993]"
                  />
                  <span>Save this information for a faster 1-click checkout next time</span>
                </label>
              </div>

            </div>

            {/* Right 5 Columns: Order Summary & Place Order CTA */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Order Items Preview (Wireframe Feature Section) */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    Order Summary ({cart.length} items)
                  </h3>
                  <button
                    type="button"
                    onClick={() => navigateTo('cart')}
                    className="text-xs text-[#537993] hover:underline font-medium"
                  >
                    Edit Cart
                  </button>
                </div>

                {/* Items scroll */}
                <div className="max-h-64 overflow-y-auto space-y-3 pr-1 divide-y divide-slate-100">
                  {cart.map((item) => (
                    <div key={item.cartId} className="pt-3 first:pt-0 flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
                        <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                        <span className="absolute top-0 right-0 bg-[#537993] text-white text-[10px] font-bold w-4 h-4 rounded-bl flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-slate-800 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] text-slate-400">
                          {item.selectedColor || 'Default'} {item.selectedSize ? `• ${item.selectedSize}` : ''}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Costs breakdown */}
                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-slate-900">${cartSubtotal.toFixed(2)}</span>
                  </div>

                  {cartDiscountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Promo Discount ({discountPercent}%)</span>
                      <span>-${cartDiscountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium text-slate-900">
                      {shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Sales Tax</span>
                    <span className="font-medium text-slate-900">${estimatedTax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Final Total */}
                <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                  <span className="text-base font-bold text-slate-900">Total Due</span>
                  <span className="text-2xl font-black text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>

                {/* Place Order CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#537993] hover:bg-[#43647b] active:bg-[#344f62] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Processing Payment & Placing Order...</span>
                    </div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Place Order • ${cartTotal.toFixed(2)}</span>
                    </>
                  )}
                </button>

                <div className="pt-2 text-center text-[11px] text-slate-400">
                  By clicking Place Order, you confirm acceptance of our Terms & Delivery conditions.
                </div>
              </div>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
}

