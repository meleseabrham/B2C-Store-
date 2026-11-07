import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function ContactPage() {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    orderNumber: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      showToast('Thank you! Your message has been sent. We will respond within 4 hours.');
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        orderNumber: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const faqs = [
    {
      q: 'How fast do orders ship?',
      a: 'All orders placed before 2:00 PM EST ship the very same business day. Delivery usually takes 2–4 business days via carbon-neutral expedited courier.'
    },
    {
      q: 'What is your return & exchange policy?',
      a: 'We offer a 30-day no-questions-asked return policy. All returns include a prepaid return shipping label inside your package.'
    },
    {
      q: 'Do you offer international shipping?',
      a: 'Yes, we ship to over 45 countries including Canada, the UK, the European Union, Australia, and Japan with all duties and taxes calculated upfront.'
    },
    {
      q: 'How do I track my order?',
      a: 'As soon as your package leaves our fulfillment center, you will receive an email containing your live courier tracking link.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#537993] mb-2 block">
            We Are Here To Help
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Customer Support
          </h1>
          <p className="text-slate-600 text-sm mt-3">
            Have a question about an order, sizing, or product specifications? Reach out anytime and our dedicated team will be delighted to assist you.
          </p>
        </div>

        {/* 2-Column Grid: Contact Form + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#537993]" />
              Send us a message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Message received! A support representative has been assigned to your ticket.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Topic / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Tracking">Order Tracking & Shipping</option>
                    <option value="Returns & Refunds">Returns & Refunds</option>
                    <option value="Product Details">Product Sizing & Specs</option>
                    <option value="Wholesale">Corporate / Wholesale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Order Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    placeholder="e.g. AUR-847291"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How can we help you? *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry or order details in detail..."
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#537993]/20 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#537993] hover:bg-[#43647b] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Right Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#537993]/10 text-[#537993] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Toll-Free Phone</h3>
                <p className="text-sm font-bold text-slate-900 mt-0.5">1-800-555-0199</p>
                <p className="text-xs text-slate-500 mt-1">Direct support hotline (toll-free across USA & Canada).</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</h3>
                <p className="text-sm font-bold text-slate-900 mt-0.5">support@aurastore.com</p>
                <p className="text-xs text-slate-500 mt-1">Average response time: under 3 hours.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Support Hours</h3>
                <p className="text-sm font-bold text-slate-900 mt-0.5">Monday – Saturday: 8am – 9pm EST</p>
                <p className="text-xs text-slate-500 mt-1">Sunday: 10am – 6pm EST (Urgent inquiries answered 24/7).</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Fulfillment Center</h3>
                <p className="text-sm font-bold text-slate-900 mt-0.5">742 Evergreen Logistics Blvd</p>
                <p className="text-xs text-slate-500 mt-1">Suite 1200, Seattle, WA 98101</p>
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#537993] mb-1 block">
              Quick Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-[#537993]" />
                  {faq.q}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
