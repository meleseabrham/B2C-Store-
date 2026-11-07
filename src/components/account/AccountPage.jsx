import React, { useState } from 'react';
import { 
  User as UserIcon, 
  Package, 
  Clock, 
  MapPin, 
  CreditCard, 
  LogOut, 
  ShieldCheck, 
  Truck, 
  ChevronRight,
  ShoppingBag,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function AccountPage() {
  const { user, logout, userOrders, lastOrder, navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'profile'

  if (!user) {
    return (
      <div className="bg-slate-50 min-h-[60vh] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl text-center shadow-sm max-w-sm">
          <UserIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-slate-800 mb-1">Please Sign In</h2>
          <p className="text-xs text-slate-500 mb-4">You need to be logged in to view your account and order history.</p>
          <button
            onClick={() => navigateTo('home')}
            className="w-full py-2.5 rounded-xl bg-[#537993] text-white text-xs font-semibold"
          >
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  // Combine userOrders with lastOrder if available
  const allOrders = [
    ...(lastOrder ? [lastOrder] : []),
    ...userOrders
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-slate-900">{user.name}</h1>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Verified Member
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{user.email}</p>
              <p className="text-[11px] text-slate-400 mt-1">{user.joinedDate || 'Member since 2026'}</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-rose-50 hover:border-rose-200 text-slate-600 hover:text-rose-600 text-xs font-semibold flex items-center gap-2 transition-colors self-start sm:self-auto"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 mb-8 gap-8">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === 'orders' ? 'text-[#537993]' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Order History ({allOrders.length})
            </span>
            {activeTab === 'orders' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#537993]"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === 'profile' ? 'text-[#537993]' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              Account Settings & Preferences
            </span>
            {activeTab === 'profile' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#537993]"></span>
            )}
          </button>
        </div>

        {/* Orders Tab Content */}
        {activeTab === 'orders' && (
          <div>
            {allOrders.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-xs">
                <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">No orders placed yet</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                  Items you purchase will appear here with live tracking updates and receipts.
                </p>
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-6 py-2.5 rounded-xl bg-[#537993] text-white text-xs font-semibold hover:bg-[#43647b] transition-all shadow-sm"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {allOrders.map((ord, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-sm text-slate-900">{ord.orderNumber}</span>
                          <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Truck className="w-3 h-3" /> Preparing for Dispatch
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> Placed on {ord.date}
                        </p>
                      </div>

                      <div className="text-right sm:block flex justify-between items-baseline">
                        <span className="text-xs text-slate-400 sm:block">Total Paid:</span>
                        <span className="text-lg font-black text-slate-900">${ord.total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="py-4 divide-y divide-slate-100">
                      {ord.items && ord.items.map((it, itemIdx) => (
                        <div key={itemIdx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img src={it.product.images[0]} alt="" className="w-12 h-12 rounded-xl object-cover bg-slate-100 border border-slate-100" />
                            <div>
                              <h4 className="text-xs font-bold text-slate-800">{it.product.name}</h4>
                              <p className="text-[11px] text-slate-400">
                                Qty: {it.quantity} {it.selectedColor ? `• ${it.selectedColor}` : ''}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-slate-900">
                            ${(it.product.price * it.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer destination & estimate */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#537993]" />
                        <span>Shipping to: <strong className="text-slate-700">{ord.customer.address}, {ord.customer.city}</strong></span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Estimated delivery: {ord.estimatedDelivery}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Profile Settings Content */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs max-w-2xl space-y-6">
            <h3 className="text-base font-bold text-slate-900">Personal Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  readOnly
                  value={user.name}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  readOnly
                  value={user.email}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700"
                />
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs text-emerald-800">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Your account is verified and eligible for complimentary 2-day express shipping on all orders.</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

