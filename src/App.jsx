import React from 'react';
import { useShop } from './context/ShopContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import ShopPage from './components/shop/ShopPage';
import CategoriesPage from './components/categories/CategoriesPage';
import ProductDetailPage from './components/product/ProductDetailPage';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import OrderConfirmationPage from './components/checkout/OrderConfirmationPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import AccountPage from './components/account/AccountPage';
import AuthPage from './components/auth/AuthPage';
import WishlistPage from './components/wishlist/WishlistPage';
import TrackOrderPage from './components/order/TrackOrderPage';
import ToastNotification from './components/common/ToastNotification';

export default function App() {
  const { currentPage } = useShop();

  // Render current page based on active state - Zero popups, each navigates to its own dedicated page!
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'product-details':
        return <ProductDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'order-confirmation':
        return <OrderConfirmationPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'account':
        return <AccountPage />;
      case 'login':
      case 'register':
        return <AuthPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'track-order':
        return <TrackOrderPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-800 font-sans selection:bg-[#537993] selection:text-white">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Page Content - Displays dedicated full page */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Toast Notification */}
      <ToastNotification />
    </div>
  );
}
