import React, { useState, useEffect } from 'react';
import { Sparkles, Timer, Copy, Check, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function PromoBannerSection() {
  const { navigateTo, showToast } = useShop();
  const [copied, setCopied] = useState(false);

  // Live countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 36,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('SAVE20');
    setCopied(true);
    showToast('Coupon code "SAVE20" copied to clipboard! Paste it at checkout for 20% off.');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 bg-surface-sand border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#203a4c] via-[#294c63] to-[#39627e] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Subtle decorative circles */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none blur-2xl"></div>
          <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-amber-400/10 pointer-events-none blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Promo text & countdown */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Tag className="w-3.5 h-3.5" />
                <span>Limited-Time Exclusive</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Flash Mid-Season Sale: Up to 40% Off Select Styles
              </h2>

              <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Take your everyday carry, audio, and home comfort to the next level. Enjoy tiered seasonal discounts and free priority shipping on every order today.
              </p>

              {/* Countdown timer blocks */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5 mr-2">
                  <Timer className="w-4 h-4 text-amber-400" /> Ends In:
                </span>
                
                <div className="flex items-center gap-2">
                  <div className="bg-slate-900/60 backdrop-blur-md px-3.5 py-2 rounded-xl text-center border border-white/10 min-w-[54px]">
                    <span className="block text-xl sm:text-2xl font-black text-amber-300 font-mono">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase text-slate-400 font-medium">Hours</span>
                  </div>
                  <span className="text-xl font-bold text-slate-400">:</span>
                  <div className="bg-slate-900/60 backdrop-blur-md px-3.5 py-2 rounded-xl text-center border border-white/10 min-w-[54px]">
                    <span className="block text-xl sm:text-2xl font-black text-amber-300 font-mono">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase text-slate-400 font-medium">Mins</span>
                  </div>
                  <span className="text-xl font-bold text-slate-400">:</span>
                  <div className="bg-slate-900/60 backdrop-blur-md px-3.5 py-2 rounded-xl text-center border border-white/10 min-w-[54px]">
                    <span className="block text-xl sm:text-2xl font-black text-amber-300 font-mono">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase text-slate-400 font-medium">Secs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Promo code action card */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-4">
              <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block">
                Use Promo Code At Checkout
              </span>

              <div 
                onClick={handleCopyCode}
                className="bg-white/20 hover:bg-white/25 border-2 border-dashed border-amber-300/80 rounded-xl p-3 flex items-center justify-between cursor-pointer group transition-all"
              >
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-amber-200 block font-semibold">20% Flat Discount</span>
                  <span className="text-xl font-black tracking-widest text-white font-mono">SAVE20</span>
                </div>
                <div className="bg-white text-slate-900 p-2 rounded-lg group-hover:scale-105 transition-transform">
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#537993]" />}
                </div>
              </div>

              <button
                onClick={() => navigateTo('shop', { category: 'all' })}
                className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-900 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Shop The Flash Sale</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-slate-300">
                Applied automatically on qualifying cart items over $50.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

