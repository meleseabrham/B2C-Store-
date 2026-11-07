import React, { useState } from 'react';
import { Mail, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function NewsletterSection() {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      showToast('Welcome to the inner circle! 15% discount code sent to ' + email);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-surface-sand border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-[#537993] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Stay in the loop</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Get 15% off your first purchase
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Be the first to hear about seasonal limited drops, member-only secret sales, and insider design stories. No spam ever.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center justify-center gap-2 font-medium text-sm animate-fadeIn">
            <Check className="w-5 h-5 text-emerald-600" />
            <span>Success! Check your inbox for your 15% welcome discount code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5 p-1.5 bg-white rounded-2xl shadow-md border border-slate-200">
              <div className="relative flex-1 flex items-center px-3">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-8 pr-2 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#537993] hover:bg-[#43647b] active:bg-[#344f62] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-3">
              By subscribing you agree with our Terms & Privacy Conditions.
            </p>
          </form>
        )}

      </div>
    </section>
  );
}

