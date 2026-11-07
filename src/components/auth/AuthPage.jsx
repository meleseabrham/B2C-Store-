import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  User as UserIcon, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function AuthPage() {
  const { 
    authMode, 
    setAuthMode, 
    login, 
    register, 
    authRedirectTarget,
    navigateTo 
  } = useShop();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

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
    <div className="bg-slate-50 min-h-screen py-12 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center justify-center gap-1.5">
          <button onClick={() => navigateTo('home')} className="hover:text-slate-800 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-semibold">
            {authMode === 'login' ? 'Customer Sign In' : 'Create New Account'}
          </span>
        </nav>

        {/* Main Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
          
          {/* Header Banner */}
          <div className="bg-[#537993] text-white p-8 text-center relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Lock className="w-7 h-7 text-white" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              {authMode === 'login' ? 'Sign In to Your Account' : 'Join Our Shopping Community'}
            </h1>

            <p className="text-xs sm:text-sm text-brand-100 max-w-sm mx-auto">
              {authRedirectTarget === 'checkout'
                ? 'Sign in or create an account to proceed to checkout and secure your items.'
                : 'Access order tracking, saved wishlist items, and special member promotions.'}
            </p>

            {authRedirectTarget === 'checkout' && (
              <div className="mt-4 inline-flex items-center gap-1.5 bg-amber-400 text-slate-900 text-xs font-bold px-3.5 py-1 rounded-full shadow-xs">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Checkout Login Gate Active</span>
              </div>
            )}
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-slate-100 bg-slate-50">
            <button
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-3.5 text-xs sm:text-sm font-bold transition-all text-center ${
                authMode === 'login'
                  ? 'bg-white text-[#537993] border-b-2 border-[#537993]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode('register')}
              className={`flex-1 py-3.5 text-xs sm:text-sm font-bold transition-all text-center ${
                authMode === 'register'
                  ? 'bg-white text-[#537993] border-b-2 border-[#537993]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-10 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {authMode === 'register' && (
                <div>
                  {/* <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label> */}
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Full name"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                    />
                  </div>
                </div>
              )}

              <div>
                {/* <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label> */}
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                  />
                </div>
              </div>

              <div>
               
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                 <div className="flex justify-end items-right mt-4">
                  {/* <label className="block text-xs font-semibold text-slate-700">
                    Password *
                  </label> */}
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
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-[#537993] w-4 h-4"
                  />
                  <span>Remember me on this device</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#537993] hover:bg-[#43647b] active:bg-[#344f62] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>{authMode === 'login' ? 'Sign In' : 'Register'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Test Logins */}
            {/* <div className="pt-4 border-t border-slate-100 text-center">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider block mb-2.5">
                Quick 1-Click Demo Login
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleDemoLogin('Alex Morgan', 'alex.morgan@example.com')}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <UserIcon className="w-3.5 h-3.5 text-[#537993]" />
                  <span>Alex (Customer)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin('Sarah Jenkins', 'sarah.jenkins@example.com')}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Sarah (VIP Buyer)</span>
                </button>
              </div>
            </div> */}
          </div>

          {/* Footer security badge */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-Bit SSL Encrypted & Bank-Grade Security</span>
          </div>

        </div>

      </div>
    </div>
  );
}

