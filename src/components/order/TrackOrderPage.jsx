import React, { useState } from 'react';
import { 
  Search, 
  Truck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Calendar, 
  Package, 
  ChevronRight, 
  AlertCircle,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function TrackOrderPage() {
  const { lastOrder, navigateTo } = useShop();
  const [orderQuery, setOrderQuery] = useState(lastOrder?.orderNumber || 'AUR-847291');
  const [emailQuery, setEmailQuery] = useState(lastOrder?.customer?.email || 'alex.morgan@example.com');
  const [trackedOrder, setTrackedOrder] = useState({
    orderNumber: lastOrder?.orderNumber || 'AUR-847291',
    carrier: 'FedEx Carbon-Neutral Express',
    trackingNumber: '784910293847',
    status: 'In Transit',
    origin: 'Seattle Logistics Facility, WA',
    destination: lastOrder ? `${lastOrder.customer.city}, ${lastOrder.customer.state}` : 'Austin, TX',
    estimatedDelivery: 'Thursday, Nov 12, 2026 by 7:00 PM',
    steps: [
      { title: 'Order Confirmed & Payment Verified', time: 'Nov 07, 10:30 AM', done: true },
      { title: 'Picked & Packed at Fulfillment Hub', time: 'Nov 07, 02:15 PM', done: true },
      { title: 'Departed Regional Distribution Facility', time: 'Nov 08, 04:45 AM', done: true },
      { title: 'In Transit to Local Delivery Station', time: 'Expected Nov 10', done: false, active: true },
      { title: 'Out for Final Courier Delivery', time: 'Expected Nov 12', done: false }
    ]
  });

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (orderQuery.trim()) {
      setTrackedOrder({
        orderNumber: orderQuery.trim().toUpperCase(),
        carrier: 'FedEx Carbon-Neutral Express',
        trackingNumber: `7849${Math.floor(10000000 + Math.random() * 90000000)}`,
        status: 'In Transit',
        origin: 'Seattle Logistics Hub, WA',
        destination: 'Customer Delivery Address',
        estimatedDelivery: 'Thursday, Nov 12, 2026 by 7:00 PM',
        steps: [
          { title: 'Order Confirmed & Payment Verified', time: 'Nov 07, 10:30 AM', done: true },
          { title: 'Picked & Packed at Fulfillment Hub', time: 'Nov 07, 02:15 PM', done: true },
          { title: 'Departed Regional Distribution Facility', time: 'Nov 08, 04:45 AM', done: true },
          { title: 'In Transit to Local Delivery Station', time: 'Expected Nov 10', done: false, active: true },
          { title: 'Out for Final Courier Delivery', time: 'Expected Nov 12', done: false }
        ]
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1.5">
          <button onClick={() => navigateTo('home')} className="hover:text-slate-800 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">Track Order</span>
        </nav>

        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#537993]/10 text-[#537993] flex items-center justify-center mx-auto mb-3">
            <Truck className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Track Your Package
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Check the real-time shipping status and delivery milestones of your order.
          </p>
        </div>

        {/* Track Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs max-w-2xl mx-auto mb-10">
          <form onSubmit={handleTrackSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Order Number *
                </label>
                <div className="relative">
                  <Package className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={orderQuery}
                    onChange={(e) => setOrderQuery(e.target.value)}
                    placeholder="e.g. AUR-847291"
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none uppercase font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={emailQuery}
                  onChange={(e) => setEmailQuery(e.target.value)}
                  placeholder="alex.morgan@example.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#537993] hover:bg-[#43647b] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Track Live Shipment</span>
            </button>
          </form>
        </div>

        {/* Tracking Details Card */}
        {trackedOrder && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs max-w-3xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Top overview status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Order Reference: <strong className="text-slate-900">{trackedOrder.orderNumber}</strong>
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {trackedOrder.status}
                  </span>
                  <span className="text-xs text-slate-400">Carrier: {trackedOrder.carrier}</span>
                </div>
              </div>

              <div className="text-right sm:block">
                <span className="text-xs text-slate-400 block">Tracking Number</span>
                <span className="font-mono font-bold text-sm text-[#537993]">{trackedOrder.trackingNumber}</span>
              </div>
            </div>

            {/* Delivery Window & Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200/70 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#537993] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Estimated Arrival Date:</span>
                  <span className="text-emerald-700 font-semibold">{trackedOrder.estimatedDelivery}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#537993] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Destination:</span>
                  <span>{trackedOrder.destination}</span>
                </div>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                Shipment Milestones
              </h3>

              <div className="relative pl-7 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {trackedOrder.steps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className={`absolute -left-7 top-0.5 w-6 h-6 rounded-full flex items-center justify-center ${
                      step.done
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : step.active
                        ? 'bg-[#537993] text-white ring-4 ring-[#537993]/20 animate-pulse'
                        : 'bg-slate-200 text-slate-400'
                    }`}>
                      {step.done ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-3.5 h-3.5" />}
                    </div>

                    <div>
                      <p className={`text-xs sm:text-sm font-bold ${step.done || step.active ? 'text-slate-900' : 'text-slate-400'}`}>
                        {step.title}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Callout */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Delivery guarantee active
              </span>
              <button 
                onClick={() => navigateTo('contact')}
                className="text-[#537993] font-bold hover:underline"
              >
                Questions about your delivery? Contact Support &rarr;
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

