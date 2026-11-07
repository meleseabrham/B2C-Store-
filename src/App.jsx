import React from 'react';
import { useShop } from './context/ShopContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import ShopPage from './components/shop/ShopPage';
import ProductDetailPage from './components/product/ProductDetailPage';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import OrderConfirmationPage from './components/checkout/OrderConfirmationPage';
import QuickViewModal from './components/common/QuickViewModal';
import WishlistModal from './components/common/WishlistModal';
import ToastNotification from './components/common/ToastNotification';

export default function App() {
  const { currentPage } = useShop();

  // Render current page based on active state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product-details':
        return <ProductDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'order-confirmation':
        return <OrderConfirmationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-800 font-sans selection:bg-[#537993] selection:text-white">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick View Product Modal */}
      <QuickViewModal />

      {/* Wishlist Drawer Modal */}
      <WishlistModal />

      {/* Global Toast Notification */}
      <ToastNotification />
    </div>
  );
}
