import React from 'react';
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function HeroSection() {
  const { navigateTo } = useShop();

  return (
    <section className="relative overflow-hidden bg-[#244255] text-white">
      {/* Background Architectural/Modern Lifestyle Imagery with subtle overlay matching Screenshot 4 & 5 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80"
          alt="Modern Architectural Interior"
          className="w-full h-full object-cover object-center mix-blend-overlay opacity-35 scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#355870]/70 via-[#274456]/90 to-[#1e3444]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
        {/* Top badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-8 text-brand-100 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>New Season Drops & Curated Essentials</span>
        </div> */}

        {/* Main Headline - Exactly matching screenshot 5 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-md">
          Everything you need, delivered fast
        </h1>

        {/* Subtitle - Exactly matching screenshot 5 */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-10">
          Shop our wide selection of quality products at great prices. Enjoy free shipping on orders over $50.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base hover:bg-slate-100 active:bg-slate-200 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <ShoppingBag className="w-5 h-5 text-[#537993]" />
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('categories-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold text-base border border-white/25 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            Explore Categories
          </button>
        </div>

        {/* Bottom stats banner */}
        <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <Truck className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Free Shipping</p>
              <p className="text-xs text-slate-300">Orders over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <Clock className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Fast 2-Day</p>
              <p className="text-xs text-slate-300">Expedited fulfillment</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">30-Day Guarantee</p>
              <p className="text-xs text-slate-300">Free returns & swaps</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">4.9 / 5.0 Rating</p>
              <p className="text-xs text-slate-300">50,000+ happy buyers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

