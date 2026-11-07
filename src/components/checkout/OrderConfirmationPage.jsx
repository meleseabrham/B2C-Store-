import React from 'react';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  Calendar, 
  MapPin, 
  CreditCard, 
  ArrowRight, 
  Printer, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function OrderConfirmationPage() {
  const { lastOrder, navigateTo } = useShop();

  // Fallback demo data if user accessed directly
  const order = lastOrder || {
    orderNumber: 'AUR-847291',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    estimatedDelivery: 'Nov 12, 2026 – Nov 14, 2026',
    items: [],
    subtotal: 189.99,
    discount: 38.00,
    shippingFee: 0.00,
    tax: 12.16,
    total: 164.15,
    customer: {
      firstName: 'Alex',
      lastName: 'Morgan',
      email: 'alex.morgan@example.com',
      phone: '+1 (555) 392-8812',
      address: '742 Evergreen Terrace, Apt 4B',
      city: 'Springfield',
      state: 'OR',
      zipCode: '97477',
      paymentMethod: 'card'
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Header (Wireframe Feature Section) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200/80 shadow-sm mb-8">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xs border border-emerald-100 animate-fadeIn">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#537993] mb-2 block">
            Payment Completed Successfully
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Thank you for your order!
          </h1>

          <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
            We’ve received your order and our fulfillment team is preparing your package. A detailed confirmation receipt has been sent to{' '}
            <strong className="text-slate-800">{order.customer.email}</strong>.
          </p>

          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-2xl text-xs sm:text-sm">
            <span className="text-slate-500">Order Reference:</span>
            <span className="font-mono font-bold text-slate-900 text-base">{order.orderNumber}</span>
          </div>
        </div>

        {/* Stats Section: Order Summary Details (Wireframe Stats Section) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-8">
          <h2 className="text-base font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center justify-between">
            <span>Order Summary & Items Purchased</span>
            <span className="text-xs text-slate-400 font-normal">Date: {order.date}</span>
          </h2>

          {order.items && order.items.length > 0 ? (
            <div className="divide-y divide-slate-100 mb-6">
              {order.items.map((item) => (
                <div key={item.cartId} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="w-14 h-14 rounded-xl object-cover bg-slate-100 border border-slate-100"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        Qty: {item.quantity} {item.selectedColor ? `• ${item.selectedColor}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 mb-4">Sample order summary generated for preview.</p>
          )}

          {/* Totals Breakdown */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 space-y-2.5 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">${order.subtotal.toFixed(2)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Discount Applied</span>
                <span>-${order.discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping & Handling</span>
              <span className="font-semibold text-slate-900">
                {order.shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${order.shippingFee.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Sales Tax</span>
              <span className="font-semibold text-slate-900">${order.tax.toFixed(2)}</span>
            </div>
            <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline text-sm">
              <span className="font-bold text-slate-900">Total Amount Paid</span>
              <span className="text-xl font-black text-slate-900">${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Feature Section: Shipping Address & Estimated Delivery (Wireframe Feature Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Shipping Info Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#537993]/10 text-[#537993] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Delivery Destination
              </h3>
              <p className="text-sm font-bold text-slate-900">
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {order.customer.address}
              </p>
              <p className="text-xs text-slate-600">
                {order.customer.city}, {order.customer.state} {order.customer.zipCode}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Phone: {order.customer.phone}
              </p>
            </div>
          </div>

          {/* Estimated Arrival Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Estimated Delivery Window
              </h3>
              <p className="text-sm font-bold text-slate-900">
                {order.estimatedDelivery}
              </p>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Express 2-Day Courier Fulfillment
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Tracking numbers update via email once dispatched.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Section: Continue Shopping (Wireframe CTA Section) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print Order Receipt</span>
          </button>

          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#537993] hover:bg-[#43647b] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continue Shopping in Store</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}

