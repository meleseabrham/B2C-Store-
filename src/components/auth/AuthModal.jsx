import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  User as UserIcon, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function AuthModal() {
  const { 
    authModalOpen, 
    closeAuthModal, 
    authMode, 
    setAuthMode, 
    login, 
    register, 
    authRedirectTarget 
  } = useShop();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  if (!authModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'login') {
      if (email.trim() && password.trim()) {
        login(email, password);
      }
    } else {
      if (name.trim() && email.trim() && password.trim()) {
        register(name, email, password);
      }
    }
  };

  const handleDemoLogin = (demoName, demoEmail) => {
    setName(demoName);
    setEmail(demoEmail);
    setPassword('DemoPass2026!');
    login(demoEmail, 'DemoPass2026!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-white/90 hover:bg-slate-100 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Banner */}
        <div className="bg-[#537993] text-white p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
          
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <Lock className="w-6 h-6 text-white" />
          </div>

          <h2 className="text-2xl font-black tracking-tight text-white mb-1">
            {authMode === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>

          <p className="text-xs text-brand-100 max-w-xs mx-auto">
            {authRedirectTarget === 'checkout'
              ? 'Please sign in or create an account to proceed with your order'
              : 'Sign in for fast checkout, saved order tracking, and exclusive discounts.'}
          </p>

          {/* Checkout intent banner */}
          {authRedirectTarget === 'checkout' && (
            <div className="mt-3 inline-flex items-center gap-1.5 bg-amber-400 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Checkout Login Gate Active</span>
            </div>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 bg-slate-50">
          <button
            onClick={() => setAuthMode('login')}
            className={`flex-1 py-3 text-xs font-bold transition-all ${
              authMode === 'login'
                ? 'bg-white text-[#537993] border-b-2 border-[#537993] shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setAuthMode('register')}
            className={`flex-1 py-3 text-xs font-bold transition-all ${
              authMode === 'register'
                ? 'bg-white text-[#537993] border-b-2 border-[#537993] shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            New Customer? Register
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Register: Name field */}
            {authMode === 'register' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex.morgan@example.com"
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Password *
                </label>
                {authMode === 'login' && (
                  <button
                    type="button"
                    onClick={() => alert('Password reset link sent to demo email!')}
                    className="text-[11px] text-[#537993] hover:underline"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-[#537993] w-4 h-4"
                />
                <span>Remember me on this browser</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#537993] hover:bg-[#43647b] active:bg-[#344f62] text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{authMode === 'login' ? 'Sign In & Continue' : 'Create Account & Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Fill Buttons for Easy Testing */}
          <div className="pt-3 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400 font-semibold block mb-2">
              QUICK 1-CLICK DEMO LOGIN:
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('Alex Morgan', 'alex.morgan@example.com')}
                className="flex-1 py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
              >
                <span>👤 Alex (Customer)</span>
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('Sarah Jenkins', 'sarah.jenkins@example.com')}
                className="flex-1 py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
              >
                <span>👤 Sarah (VIP Buyer)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Your information is protected by 256-bit bank grade encryption.</span>
        </div>
      </div>
    </div>
  );
}
