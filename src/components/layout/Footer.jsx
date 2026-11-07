import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones, 
  CreditCard,
  Mail,
  Send,
  Heart,
  ExternalLink
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/products';

export default function Footer() {
  const { navigateTo, showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      showToast('Thank you for subscribing! Your 15% discount code is on the way.');
      setEmail('');
    }
  };

  return (
    <footer id="footer-section" className="bg-[#1e3547] text-slate-300 pt-16 pb-8 border-t border-slate-700/50">
      {/* Trust Badges Strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 mb-12 border-b border-slate-700/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-brand-300 flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Free Express Shipping</h4>
              <p className="text-xs text-slate-400">On all orders over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-brand-300 flex-shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">30-Day Hassle Returns</h4>
              <p className="text-xs text-slate-400">No questions asked</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-brand-300 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">100% Secure Checkout</h4>
              <p className="text-xs text-slate-400">Bank-level 256-bit SSL</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-brand-300 flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">24/7 Dedicated Support</h4>
              <p className="text-xs text-slate-400">Live chat & quick assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Column 1: Brand Info (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => navigateTo('home')} 
              className="flex items-center gap-2 group text-left focus:outline-none"
            >
              <span className="font-script text-4xl font-bold tracking-wide text-white drop-shadow-sm">
                Logo
              </span>
              <span className="text-[10px] uppercase tracking-widest bg-white/15 text-white font-semibold px-2 py-0.5 rounded">
                E-Commerce
              </span>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your modern destination for premium daily lifestyle, electronics, apparel, and home essentials. Thoughtfully curated for superior everyday living.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Customer Helpline:</strong> 1-800-555-0199</p>
              <p><strong className="text-slate-300">Email:</strong> support@aurastore.com</p>
              <p><strong className="text-slate-300">Hours:</strong> Monday – Saturday, 8am – 9pm EST</p>
            </div>
          </div>

          {/* Column 2: Quick Shop */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Shop</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => navigateTo('shop', { category: 'all' })} className="hover:text-white transition-colors">
                  All Products
                </button>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button onClick={() => navigateTo('shop', { category: cat.id })} className="hover:text-white transition-colors">
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => navigateTo('shop', { category: 'all' })} className="hover:text-white transition-colors text-amber-300 font-medium">
                  Flash Deals (Up to 40% Off)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Customer Care</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => navigateTo('cart')} className="hover:text-white transition-colors">
                  Shopping Cart
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-white transition-colors">
                  Order Tracking
                </button>
              </li>
              <li>
                <button onClick={() => showToast('Shipping policy: Fast 2-day delivery across USA & Canada.')} className="hover:text-white transition-colors">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button onClick={() => showToast('Easy 30-day returns accepted on all unused items.')} className="hover:text-white transition-colors">
                  Returns & Refunds
                </button>
              </li>
              <li>
                <button onClick={() => showToast('Need help? Our customer support is available 24/7.')} className="hover:text-white transition-colors">
                  Help Center & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Join Our Circle</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for exclusive flash sales, private early access, and get 15% off your next purchase.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#537993] hover:bg-[#43647b] text-white px-3 rounded-md text-xs font-medium transition-colors flex items-center justify-center"
                  aria-label="Submit Newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Payment methods */}
        <div className="pt-8 border-t border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} NovaStore / Logo Inc. All rights reserved. Designed with clean modern aesthetics.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Guaranteed Safe Checkout:</span>
            <div className="flex items-center gap-2 text-slate-300 font-semibold tracking-wide">
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">VISA</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Mastercard</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">AMEX</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Apple Pay</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

