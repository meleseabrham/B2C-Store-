import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function ToastNotification() {
  const { toast } = useShop();

  if (!toast) return null;

  const isInfo = toast.type === 'info';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-subtle pointer-events-none">
      <div className={`p-4 rounded-2xl shadow-2xl border flex items-center gap-3 backdrop-blur-md pointer-events-auto ${
        isError 
          ? 'bg-rose-900/90 text-white border-rose-700'
          : isInfo 
          ? 'bg-slate-900/90 text-white border-slate-700'
          : 'bg-[#1e3547]/95 text-white border-brand-500/30'
      }`}>
        <div className="flex-shrink-0">
          {isError ? (
            <AlertCircle className="w-5 h-5 text-rose-400" />
          ) : isInfo ? (
            <Info className="w-5 h-5 text-sky-400" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          )}
        </div>
        <p className="text-sm font-medium flex-1 leading-snug">
          {toast.message}
        </p>
      </div>
    </div>
  );
}

