import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Page state: 'home', 'shop', 'product-details', 'cart', 'checkout', 'order-confirmation'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('prod-1');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Wishlist state
  const [wishlist, setWishlist] = useState(['prod-1', 'prod-3']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Authentication State
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('b2c_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [authRedirectTarget, setAuthRedirectTarget] = useState(null);

  // User Order History
  const [userOrders, setUserOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('b2c_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Shopping Cart state
  const [cart, setCart] = useState(() => {
    // Initial sample items to make the store feel alive immediately
    return [
      {
        cartId: 'init-1',
        product: PRODUCTS[0],
        quantity: 1,
        selectedColor: PRODUCTS[0].colors ? PRODUCTS[0].colors[0] : null,
        selectedSize: null
      },
      {
        cartId: 'init-2',
        product: PRODUCTS[3],
        quantity: 1,
        selectedColor: PRODUCTS[3].colors ? PRODUCTS[3].colors[0] : null,
        selectedSize: null
      }
    ];
  });

  // Promo code & discounts
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [appliedPromoName, setAppliedPromoName] = useState('');

  // Quick View Modal
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast feedback
  const [toast, setToast] = useState(null);

  // Placed Order history
  const [lastOrder, setLastOrder] = useState(null);

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProductId]);

  const openAuthModal = (mode = 'login', redirectTarget = null) => {
    setAuthMode(mode);
    setAuthRedirectTarget(redirectTarget);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const login = (email, password) => {
    // Generate clean user profile
    const namePart = email.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    const newUser = {
      id: `usr-${Date.now()}`,
      name: formattedName.includes('.') ? formattedName.split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : formattedName,
      email: email.trim().toLowerCase(),
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
      joinedDate: 'Joined Nov 2026'
    };

    setUser(newUser);
    try {
      localStorage.setItem('b2c_user', JSON.stringify(newUser));
    } catch {}

    showToast(`Welcome back, ${newUser.name}!`);
    setAuthModalOpen(false);

    // If customer was trying to checkout, seamlessly continue straight into checkout!
    if (authRedirectTarget) {
      setCurrentPage(authRedirectTarget);
      setAuthRedirectTarget(null);
    }
  };

  const register = (name, email, password) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80`,
      joinedDate: 'Joined Nov 2026'
    };

    setUser(newUser);
    try {
      localStorage.setItem('b2c_user', JSON.stringify(newUser));
    } catch {}

    showToast(`Account created successfully! Welcome, ${newUser.name}.`);
    setAuthModalOpen(false);

    if (authRedirectTarget) {
      setCurrentPage(authRedirectTarget);
      setAuthRedirectTarget(null);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('b2c_user');
    } catch {}
    showToast('You have been signed out safely.', 'info');
    if (currentPage === 'checkout' || currentPage === 'orders') {
      setCurrentPage('home');
    }
  };

  const addOrderToHistory = (order) => {
    setUserOrders((prev) => {
      const updated = [order, ...prev];
      try {
        localStorage.setItem('b2c_orders', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 3200);
  };

  const navigateTo = (page, data = {}) => {
    if (data.productId) {
      setSelectedProductId(data.productId);
    }
    if (data.category !== undefined) {
      setSelectedCategory(data.category);
    }
    if (data.search !== undefined) {
      setSearchQuery(data.search);
    }
    if (data.redirect !== undefined) {
      setAuthRedirectTarget(data.redirect);
    }
    if (data.mode !== undefined) {
      setAuthMode(data.mode);
    }
    setCurrentPage(page);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const product = PRODUCTS.find(p => p.id === productId);
      if (exists) {
        showToast(`Removed "${product?.name || 'Item'}" from wishlist`, 'info');
        return prev.filter(id => id !== productId);
      } else {
        showToast(`Saved "${product?.name || 'Item'}" to your wishlist!`);
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  const addToCart = (product, quantity = 1, color = null, size = null) => {
    const chosenColor = color || (product.colors && product.colors[0]) || null;
    const chosenSize = size || (product.sizes && product.sizes[0]) || null;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === chosenColor &&
          item.selectedSize === chosenSize
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem = {
          cartId: `${product.id}-${Date.now()}`,
          product,
          quantity,
          selectedColor: chosenColor,
          selectedSize: chosenSize
        };
        return [...prevCart, newItem];
      }
    });

    showToast(`Added ${quantity}x "${product.name}" to your cart!`);
  };

  const updateCartQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (cartId) => {
    const itemToRemove = cart.find(i => i.cartId === cartId);
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
    if (itemToRemove) {
      showToast(`Removed "${itemToRemove.product.name}" from cart`, 'info');
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'SAVE20' || cleaned === 'SUMMER20') {
      setDiscountPercent(20);
      setAppliedPromoName(cleaned);
      setPromoError('');
      showToast(`Promo code ${cleaned} applied! 20% discount activated.`);
      return true;
    } else if (cleaned === 'WELCOME10') {
      setDiscountPercent(10);
      setAppliedPromoName(cleaned);
      setPromoError('');
      showToast(`Promo code ${cleaned} applied! 10% discount activated.`);
      return true;
    } else {
      setPromoError('Invalid coupon code. Try "SAVE20" or "WELCOME10"');
      return false;
    }
  };

  const removePromoCode = () => {
    setDiscountPercent(0);
    setAppliedPromoName('');
    setPromoError('');
  };

  // Cart calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartDiscountAmount = (cartSubtotal * discountPercent) / 100;
  // Free shipping over $50
  const freeShippingThreshold = 50.0;
  const shippingFee = cartSubtotal === 0 || cartSubtotal >= freeShippingThreshold ? 0.0 : 9.99;
  const estimatedTax = (cartSubtotal - cartDiscountAmount) * 0.08; // 8% sales tax
  const cartTotal = Math.max(0, cartSubtotal - cartDiscountAmount + shippingFee + (cartSubtotal > 0 ? estimatedTax : 0));
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  return (
    <ShopContext.Provider
      value={{
        user,
        authModalOpen,
        authMode,
        setAuthMode,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout,
        userOrders,
        addOrderToHistory,
        wishlist,
        toggleWishlist,
        isWishlisted,
        isWishlistOpen,
        setIsWishlistOpen,
        currentPage,
        setCurrentPage,
        selectedProductId,
        selectedProduct,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartSubtotal,
        cartDiscountAmount,
        discountPercent,
        shippingFee,
        freeShippingThreshold,
        estimatedTax,
        cartTotal,
        totalItemCount,
        promoCode,
        setPromoCode,
        appliedPromoName,
        promoError,
        applyPromoCode,
        removePromoCode,
        quickViewProduct,
        setQuickViewProduct,
        lastOrder,
        setLastOrder,
        toast,
        showToast,
        navigateTo,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

