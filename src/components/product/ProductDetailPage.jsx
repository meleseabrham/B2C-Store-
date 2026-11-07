import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Share2, 
  Heart,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../common/ProductCard';

export default function ProductDetailPage() {
  const { 
    selectedProduct, 
    addToCart, 
    navigateTo, 
    showToast 
  } = useShop();

  const product = selectedProduct;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: 'Jordan Miller',
      date: '2 days ago',
      rating: 5,
      title: 'Exceeded all expectations',
      comment: 'The materials and finish are extraordinary. Shipped fast and package arrived in pristine condition.',
      verified: true
    },
    {
      id: 2,
      name: 'Claire Dupont',
      date: '1 week ago',
      rating: 5,
      title: 'Remarkable daily utility',
      comment: 'I use this daily and get compliments constantly. Super durable and well thought-out ergonomics.',
      verified: true
    },
    {
      id: 3,
      name: 'Ethan Ross',
      date: '3 weeks ago',
      rating: 4,
      title: 'Great piece, fast shipping',
      comment: 'Very happy with the build quality. Only minor feedback is color looks slightly warmer in person, but I actually prefer it.',
      verified: true
    }
  ]);

  const [newReviewForm, setNewReviewForm] = useState({
    name: '',
    rating: 5,
    title: '',
    comment: ''
  });

  const handlePostReview = (e) => {
    e.preventDefault();
    if (newReviewForm.name && newReviewForm.comment) {
      const added = {
        id: Date.now(),
        name: newReviewForm.name,
        date: 'Just now',
        rating: Number(newReviewForm.rating),
        title: newReviewForm.title || 'Verified Customer Review',
        comment: newReviewForm.comment,
        verified: true
      };
      setReviewsList([added, ...reviewsList]);
      setShowReviewModal(false);
      setNewReviewForm({ name: '', rating: 5, title: '', comment: '' });
      showToast('Thank you! Your verified review has been published.');
      setActiveTab('reviews');
    }
  };

  // Related products from the same category or best sellers (excluding current item)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    navigateTo('checkout');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 flex-wrap">
          <button onClick={() => navigateTo('home')} className="hover:text-slate-800 transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <button onClick={() => navigateTo('shop', { category: 'all' })} className="hover:text-slate-800 transition-colors">
            Shop
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <button 
            onClick={() => navigateTo('shop', { category: product.category })} 
            className="hover:text-slate-800 transition-colors capitalize"
          >
            {product.category}
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </nav>

        {/* Main Product Section: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          
          {/* Left Column: Image Gallery with Thumbnails (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            
            {/* Thumbnail Column */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 sm:w-20 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-[#537993] shadow-md ring-2 ring-[#537993]/20'
                      : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Large Active Image Showcase */}
            <div className="flex-1 relative aspect-square sm:aspect-auto sm:h-[540px] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-inner group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm bg-amber-600 text-white">
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm bg-rose-600 text-white">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Share button */}
              <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md transition-colors"
                title="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Product Specs, Pricing, Controls (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#537993] bg-[#537993]/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-amber-500">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} customer reviews)</span>
                </div>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                {product.name}
              </h1>

              {/* Pricing & Stock Status */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-black text-slate-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-slate-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-lg">
                    Save {product.discount}
                  </span>
                )}
              </div>

              {/* Availability banner */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-semibold text-emerald-700">
                  In Stock ({product.stock} units ready to dispatch from warehouse)
                </span>
              </div>

              {/* Short summary */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {product.summary}
              </p>

              {/* Color variant picker */}
              {product.colors && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2.5">
                    <span>Select Color:</span>
                    <span className="text-[#537993] font-normal">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`text-xs px-3.5 py-2 rounded-xl border font-medium transition-all ${
                          selectedColor === color
                            ? 'border-[#537993] bg-[#537993] text-white shadow-sm'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size variant picker */}
              {product.sizes && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2.5">
                    <span>Select Size:</span>
                    <span className="text-[#537993] font-normal">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-11 h-11 rounded-xl border text-xs font-semibold flex items-center justify-center transition-all ${
                          selectedSize === size
                            ? 'border-[#537993] bg-[#537993] text-white shadow-sm'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-11 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-sm text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-11 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-200 font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 ${
                      addedAnimation
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#537993] hover:bg-[#43647b] text-white'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instant Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  className="w-full h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Buy Now with Instant Checkout</span>
                </button>
              </div>

              {/* Guarantee bullets */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Free 2-day delivery on $50+</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>30-day money-back return</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>2-year limited warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>100% authentic guarantee</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tabbed Info Section (Description, Specifications, Shipping) */}
        <div className="mb-20">
          <div className="border-b border-slate-200 flex gap-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === 'description'
                  ? 'text-[#537993]'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Description & Features
              {activeTab === 'description' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#537993]"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === 'specs'
                  ? 'text-[#537993]'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Technical Specifications
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#537993]"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === 'shipping'
                  ? 'text-[#537993]'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Shipping & Returns
              {activeTab === 'shipping' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#537993]"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === 'reviews'
                  ? 'text-[#537993]'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Reviews ({reviewsList.length})
              {activeTab === 'reviews' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#537993]"></span>
              )}
            </button>
          </div>

          <div className="py-8 text-slate-700 text-sm leading-relaxed max-w-4xl">
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-black text-slate-900">{product.rating}</div>
                    <div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Based on {reviewsList.length} verified ratings</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowReviewModal(true)}
                    className="px-5 py-2.5 bg-[#537993] hover:bg-[#43647b] text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                  >
                    Write a Review
                  </button>
                </div>

                <div className="space-y-4">
                  {reviewsList.map((rev) => (
                    <div key={rev.id} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">{rev.name}</span>
                          {rev.verified && (
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Check className="w-3 h-3 text-emerald-600" /> Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-400">{rev.date}</span>
                      </div>

                      <div className="flex items-center text-amber-400 mb-1.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>

                      <h4 className="font-bold text-slate-800 text-xs sm:text-sm mb-1">{rev.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p>{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-1">Sustainable Crafting</h4>
                    <p className="text-xs text-slate-600">Manufactured with responsibly sourced, durable raw elements tested to survive years of daily use.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-1">Ergonomic Architecture</h4>
                    <p className="text-xs text-slate-600">Balanced weight distribution engineered to minimize strain and maximize convenience.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <dl className="divide-y divide-slate-200">
                  {Object.entries(product.specs || {}).map(([key, value]) => (
                    <div key={key} className="py-3 flex justify-between text-xs sm:text-sm">
                      <dt className="font-semibold text-slate-500">{key}</dt>
                      <dd className="font-medium text-slate-900">{value}</dd>
                    </div>
                  ))}
                  <div className="py-3 flex justify-between text-xs sm:text-sm">
                    <dt className="font-semibold text-slate-500">Model Identifier</dt>
                    <dd className="font-mono text-slate-700">{product.id.toUpperCase()}-REV2</dd>
                  </div>
                </dl>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <p>
                  We offer expedited carbon-neutral shipping on all domestic orders. Orders processed by 2:00 PM EST ship the same business day from our automated fulfillment center.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                  <li><strong>Standard Ground (3-5 Days):</strong> Free on orders over $50 ($4.99 otherwise).</li>
                  <li><strong>Expedited Air (2 Business Days):</strong> Flat rate $9.99.</li>
                  <li><strong>Hassle-Free Returns:</strong> 30 calendar days from package arrival. Prepaid return shipping labels provided inside the box.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section - Exactly from wireframe */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#537993] block mb-1">
                Complementary Pieces
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                You might also love
              </h2>
            </div>
            <button
              onClick={() => navigateTo('shop', { category: product.category })}
              className="text-xs sm:text-sm font-semibold text-[#537993] hover:underline"
            >
              Explore more in {product.category} &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Write a Customer Review</h3>
            <p className="text-xs text-slate-500 mb-6">
              Reviewing: <span className="font-semibold text-slate-800">{product.name}</span>
            </p>

            <form onSubmit={handlePostReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Overall Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReviewForm({ ...newReviewForm, rating: star })}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReviewForm.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={newReviewForm.name}
                  onChange={(e) => setNewReviewForm({ ...newReviewForm, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Review Headline</label>
                <input
                  type="text"
                  value={newReviewForm.title}
                  onChange={(e) => setNewReviewForm({ ...newReviewForm, title: e.target.value })}
                  placeholder="e.g. Best headphones I have ever owned"
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Review *</label>
                <textarea
                  required
                  rows={4}
                  value={newReviewForm.comment}
                  onChange={(e) => setNewReviewForm({ ...newReviewForm, comment: e.target.value })}
                  placeholder="What did you like or dislike? How is the quality and feel?"
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#537993] hover:bg-[#43647b] text-white text-xs font-bold shadow-sm"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

