import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Leaf, 
  Users, 
  Truck, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function AboutPage() {
  const { navigateTo } = useShop();

  const values = [
    {
      icon: Sparkles,
      title: 'Timeless Simplicity',
      desc: 'We strip away needless ornamentation to focus on balanced ergonomics, clean lines, and utilitarian elegance that endures.'
    },
    {
      icon: Leaf,
      title: 'Ethical & Sustainable',
      desc: 'Partnered with certified carbon-neutral mills and workshops that respect craftspeople and utilize non-toxic, recyclable materials.'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      desc: 'Every garment, ceramic piece, and acoustic driver is tested rigorously before it ever reaches your doorway.'
    },
    {
      icon: Users,
      title: 'Human-First Support',
      desc: 'No automated deflection mazes. Our customer team in Austin and Seattle is available 24/7 to solve questions in minutes.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#1e3547] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80"
            alt="Craft Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-300 bg-white/10 px-3.5 py-1 rounded-full mb-4">
            Our Story & Heritage
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Elevating everyday life through thoughtful design
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Founded with a simple mission: create a single destination where modern shoppers can find meticulously crafted essentials at honest prices.
          </p>
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&auto=format&fit=crop&q=80"
                alt="Studio Craft"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase font-bold tracking-wider text-amber-300">Handcrafted & Tested</p>
                <h3 className="text-xl font-bold">From Blueprint to Living Room</h3>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#537993]">
                The Aura Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Designed for living. Built to last for years.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We started AuraStore after becoming frustrated with flimsy fast-fashion goods, overpriced tech accessories, and cluttered online marketplaces flooded with low-grade knockoffs.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                By designing in-house, sourcing directly from audited artisan manufacturers, and stripping away retail middlemen, we offer premium lifestyle gear and homeware that punches far above its price tag.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-2xl font-black text-[#537993]">50,000+</span>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Orders delivered worldwide</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-2xl font-black text-amber-600">4.9 / 5.0</span>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Verified customer review rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#537993] mb-2 block">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              What we stand for every single day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#537993]/10 text-[#537993] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-surface-sand border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Ready to discover your next favorite piece?
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-lg mx-auto">
            Browse our complete catalog with free 2-day delivery on all orders over $50.
          </p>
          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="px-8 py-3.5 bg-[#537993] hover:bg-[#43647b] text-white text-sm font-bold rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

